import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.metrcs.org";

  const routes = [
    "",
    "/dashboard",
    "/dayflow",
    "/routelab",
    "/goalhub",
    "/planner",
    "/comparators",
    "/endurance",
    "/strength",
    "/fuel",
    "/gear",
    "/client-hub",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}