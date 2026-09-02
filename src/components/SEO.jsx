import { useEffect } from "react";

function SEO({ title, description, canonical }) {
  useEffect(() => {
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    // Update canonical URL
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute("href", canonical);
  }, [title, description, canonical]);

  return null;
}

export default SEO;