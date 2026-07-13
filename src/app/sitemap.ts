import { MetadataRoute } from "next";
import { portfolioConfig } from "@/config/portfolio.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = portfolioConfig.seo.url;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
     {
      url: `${baseUrl}/education`,
      lastModified: new Date(),
    },
     {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
    },
  ];
}