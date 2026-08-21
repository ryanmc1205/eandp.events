import React from "react";

type SchemaType = "LocalBusiness" | "Organization" | "Service";

type SchemaMarkupProps = {
  type?: SchemaType;
  // org basics
  id?: string;                 // stable org @id (defaults to `${url}/#org`)
  name?: string;
  url?: string;                // org homepage
  description?: string;
  telephone?: string;
  logo?: string;
  image?: string;
  sameAs?: string[];
  priceRange?: string;         // e.g., "$$$"

  // service-specific
  serviceType?: string;
  areaServedName?: string;     // e.g., "Atlanta, GA"
  serviceUrl?: string;         // canonical URL of this service page
};

function prune<T>(obj: T): T {
  if (obj && typeof obj === "object") {
    const out: any = Array.isArray(obj) ? [] : {};
    for (const [k, v] of Object.entries(obj as any)) {
      if (v == null) continue;
      if (typeof v === "object") {
        const pv = prune(v);
        if (Array.isArray(pv) ? pv.length : Object.keys(pv).length) out[k] = pv;
      } else {
        if (v !== "") out[k] = v;
      }
    }
    return out;
  }
  return obj;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  type = "LocalBusiness",
  id,
  name = "E & P Events",
  url = "https://eandp.events",
  description = "Luxury wedding and corporate event planning in Atlanta, specializing in South Asian and fusion weddings.",
  telephone = "+1-770-410-8302",
  logo,
  image,
  sameAs,
  priceRange,

  // service
  serviceType,
  areaServedName = "Atlanta, GA",
  serviceUrl,
}) => {
  const orgId = id || `${url.replace(/\/$/, "")}/#org`;

  let json: any = {
    "@context": "https://schema.org",
    "@type": type,
  };

  if (type === "LocalBusiness" || type === "Organization") {
    json = {
      ...json,
      "@id": orgId,
      name,
      url,
      description,
      telephone,
      ...(logo ? { logo } : {}),
      ...(image ? { image } : {}),
      ...(sameAs && sameAs.length ? { sameAs } : {}),
      ...(type === "LocalBusiness"
        ? {
            address: {
              "@type": "PostalAddress",
              streetAddress: "1691 Ashbury Park Dr.",
              addressLocality: "Hoschton",
              addressRegion: "GA",
              postalCode: "30548",
              addressCountry: "US",
            },
            ...(priceRange ? { priceRange } : {}),
          }
        : {}),
    };
  }

  if (type === "Service") {
    const pageUrl =
      serviceUrl ||
      (typeof window !== "undefined"
        ? window.location.origin + window.location.pathname
        : url);

    json = {
      ...json,
      serviceType,
      url: pageUrl,
      provider: { "@id": orgId },
      areaServed: { "@type": "Place", name: areaServedName },
    };
  }

  const cleaned = prune(json);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleaned) }}
    />
  );
};

export default SchemaMarkup;
