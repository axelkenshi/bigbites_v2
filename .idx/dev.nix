{ pkgs, ... }: {
  idx.previews = {
    enable = true;
    previews = {
      web = {
        command = ["npm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0"];
        manager = "web";
      };
    };
  };

  # Instal dependensi saat workspace dibuat
  idx.workspace.onCreate = {
    install-deps = "npm install";
  };
}