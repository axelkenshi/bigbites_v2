import React, { useState, useEffect, useRef } from 'react';
import { imageData } from './ImageCarouselData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  containerClassName?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ containerClassName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVertical, setIsVertical] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imageData.length > 0) {
      const image = new Image();
      image.src = imageData[currentIndex].src;
      image.onload = () => {
        setIsVertical(image.naturalHeight > image.naturalWidth);
      };
    }
  }, [currentIndex]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const checkOverflow = () => {
      if (thumbnailsContainerRef.current) {
        const { scrollWidth, clientWidth } = thumbnailsContainerRef.current;
        setShowArrows(scrollWidth > clientWidth);
      }
    };

    const timer = setTimeout(checkOverflow, 100);
    window.addEventListener('resize', checkOverflow);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [imageData]);

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailsContainerRef.current) {
      const scrollAmount = thumbnailsContainerRef.current.clientWidth * 0.8;
      thumbnailsContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`${containerClassName || "w-full max-w-4xl mx-auto my-8 p-4"} overflow-hidden`}>
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100/50 mb-4 shadow-lg">
        <img
          src={imageData[currentIndex].src}
          alt={imageData[currentIndex].alt}
          className={`w-full h-full transition-all duration-500 ease-in-out ${isVertical ? 'object-cover' : 'object-contain'}`}
        />
      </div>
      <div className="relative flex items-center justify-center px-8">
        {showArrows && (
          <button
            onClick={() => scrollThumbnails('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-1 z-10 shadow-md hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
        )}

        <div
          ref={thumbnailsContainerRef}
          className="flex items-center gap-2 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {imageData.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`flex-shrink-0 w-16 h-16 object-cover rounded-md cursor-pointer transition-all duration-300 hover:opacity-100 block ${currentIndex === index ? 'ring-2 ring-offset-2 ring-offset-[var(--color-surface-cream)] ring-[var(--color-primary-matcha)]' : 'opacity-70'}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>

        {showArrows && (
          <button
            onClick={() => scrollThumbnails('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-1 z-10 shadow-md hover:bg-white"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
