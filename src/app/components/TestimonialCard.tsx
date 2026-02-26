import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  imageUrl: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col items-center text-center">
      <img
        src={testimonial.imageUrl}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
      <p className="text-gray-600 mt-2 text-sm">"{testimonial.comment}"</p>
    </div>
  );
};

export default TestimonialCard;
