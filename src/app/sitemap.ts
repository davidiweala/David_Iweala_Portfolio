import { MetadataRoute } from "next";
import { portfolioConfig } from "@/config/portfolio.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = portfolioConfig.seo.url;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
        priority: 0.8,
    },
     {
      url: `${baseUrl}/education`,
      lastModified: new Date(),
        priority: 0.8,
    },
     {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
        priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/more`,
      lastModified: new Date(),
      changeFrequency: "daily",
        priority: 1.0,
    },
  ];
}