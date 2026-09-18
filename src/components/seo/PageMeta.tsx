import { useEffect } from "react";
import {
  absoluteUrl,
  buildFirmJsonLd,
  type SeoConfig,
} from "../../data/seo";

const managedSelector = "[data-ninewells-seo]";

function setMeta(attribute: "name" | "property", key: string, content: string) {
  const meta = document.createElement("meta");
  meta.setAttribute(attribute, key);
  meta.setAttribute("content", content);
  meta.dataset.ninewellsSeo = "true";
  document.head.appendChild(meta);
}

export function PageMeta({ config }: { config: SeoConfig }) {
  useEffect(() => {
    document.head.querySelectorAll(managedSelector).forEach((node) => node.remove());
    document.title = config.title;

    setMeta("name", "description", config.description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", config.title);
    setMeta("property", "og:description", config.description);
    setMeta("property", "og:type", config.type ?? "website");
    setMeta("property", "og:url", absoluteUrl(config.path));
    setMeta("name", "twitter:card", config.image ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", config.title);
    setMeta("name", "twitter:description", config.description);
    if (config.image) {
      setMeta("property", "og:image", absoluteUrl(config.image));
      setMeta("name", "twitter:image", absoluteUrl(config.image));
    }

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = absoluteUrl(config.path);
    canonical.dataset.ninewellsSeo = "true";
    document.head.appendChild(canonical);

    const jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.dataset.ninewellsSeo = "true";
    jsonLd.textContent = JSON.stringify(config.jsonLd ?? buildFirmJsonLd());
    document.head.appendChild(jsonLd);

    return () => {
      document.head.querySelectorAll(managedSelector).forEach((node) => node.remove());
    };
  }, [config]);

  return null;
}

