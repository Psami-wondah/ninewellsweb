import { useEffect } from "react";
import { absoluteUrl, type SeoConfig } from "../../data/seo";

function setMeta(attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${value}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function PageMeta({ seo }: { seo: SeoConfig }) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(seo.canonicalPath);
    document.title = seo.title;

    const metadata: Array<["name" | "property", string, string]> = [
      ["name", "description", seo.description],
      ["name", "robots", "index,follow"],
      ["property", "og:title", seo.ogTitle || seo.title],
      ["property", "og:description", seo.ogDescription || seo.description],
      ["property", "og:type", seo.ogType || "website"],
      ["property", "og:url", canonicalUrl],
      ["name", "twitter:card", seo.image ? "summary_large_image" : "summary"],
      ["name", "twitter:title", seo.ogTitle || seo.title],
      ["name", "twitter:description", seo.ogDescription || seo.description],
    ];

    metadata.forEach(([attribute, value, content]) =>
      setMeta(attribute, value, content),
    );

    if (seo.image) {
      setMeta("property", "og:image", absoluteUrl(seo.image));
    } else {
      document.head
        .querySelectorAll('meta[property="og:image"]')
        .forEach((meta) => meta.remove());
    }

    document.head
      .querySelectorAll('link[rel="canonical"]')
      .forEach((link) => link.remove());
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = canonicalUrl;
    document.head.appendChild(canonical);

    document.head
      .querySelectorAll('script[data-seo-jsonld="true"]')
      .forEach((script) => script.remove());
    if (seo.structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        ...seo.structuredData,
      });
      document.head.appendChild(script);
    }
  }, [seo]);

  return null;
}
