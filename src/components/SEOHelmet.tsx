import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title,
  description,
  keywords,
  image = 'https://kevinnaranjo.com/og-kevin-naranjo.png',
  type = 'website'
}) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const language = i18n.language.toLowerCase().startsWith('en') ? 'en' : 'es';
  const baseUrl = 'https://kevinnaranjo.com';
  const spanishUrl = `${baseUrl}${location.pathname}`;
  const englishUrl = `${spanishUrl}?lang=en`;
  const currentUrl = language === 'en' ? englishUrl : spanishUrl;

  const defaultTitle = language === 'en'
    ? 'Kevin Naranjo | Software, AI & Automation'
    : 'Kevin Naranjo | Software, IA y Automatización';
  const defaultDescription = t('home.description');
  const defaultKeywords = t('meta.keywords', 'Kevin Naranjo, Software Development, Artificial Intelligence, Machine Learning, Computer Vision, Mechatronics Engineer, Colombia');

  const pageTitle = title ? `${title} | Kevin Naranjo` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;

  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        "name": "Kevin Alejandro Naranjo Reyes",
        "jobTitle": t('home.subtitle'),
        "description": pageDescription,
        "image": `${baseUrl}/kevin.webp`,
        "url": baseUrl,
        "sameAs": [
          "https://github.com/kevin0naranjo",
          "https://www.linkedin.com/in/kevin-alejandro-naranjo-reyes-2573351a2/"
        ],
        "knowsAbout": [
          "Software product engineering",
          "Applied artificial intelligence",
          "Business process automation",
          "Computer vision",
          "Cloud platforms"
        ]
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/#engineering-service`,
        "name": language === 'en'
          ? "Software product engineering, applied AI, and automation"
          : "Ingeniería de producto, IA aplicada y automatización",
        "provider": { "@id": `${baseUrl}/#person` },
        "areaServed": "Worldwide",
        "url": `${baseUrl}/contact`
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Kevin Alejandro Naranjo Reyes" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Kevin Naranjo" />
      <meta property="og:locale" content={language === 'es' ? 'es_CO' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'es' ? 'en_US' : 'es_CO'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Alternate language versions */}
      <link
        rel="alternate"
        hrefLang="es"
        href={spanishUrl}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={englishUrl}
      />
      <link rel="alternate" hrefLang="x-default" href={spanishUrl} />
    </Helmet>
  );
};

export default SEOHelmet;
