import Head from "next/head";

const SEO = ({ title, description, url, image, publishedTime }) => {
  return (
    <Head>
      {/* ✅ Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* ✅ Open Graph (For Facebook, LinkedIn) */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="article:published_time" content={publishedTime} />

      {/* ✅ Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ✅ Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": description,
            "datePublished": publishedTime,
            "dateModified": publishedTime,
            "author": {
              "@type": "Person",
              "name": "BeTech Solutions"
            },
            "publisher": {
              "@type": "Organization",
              "name": "BeTech Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://betechsolutions.com/logo.png"
              }
            },
            "image": image,
            "url": url
          }),
        }}
      />
    </Head>
  );
};

export default SEO;
