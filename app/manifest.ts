import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kayzer Danışmanlık",
    short_name: "Kayzer",
    description: "Kayzer Danışmanlık - Profesyonel Çözüm Ortağınız",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/images/logos/kayzer.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logos/kayzer.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
