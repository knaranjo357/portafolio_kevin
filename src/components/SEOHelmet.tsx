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
  image = 'https://media.licdn.com/dms/image/v2/D4E03AQGz9Hn9h2qPrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694973929346?e=1746662400&v=beta&t=rWPTpX0hd9tBxU2lxPEeHNZk-MitLkGAcxJvBWnwCe8',
  type = 'website'
}) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentUrl = `https://kevinnaranjo.com${location.pathname}`;

  const defaultTitle = t('home.title');
  const defaultDescription = t('home.description');
  const defaultKeywords = t('meta.keywords', 'Kevin Naranjo, Software Development, Artificial Intelligence, Machine Learning, Computer Vision, Mechatronics Engineer, Colombia');

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;

  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kevin Alejandro Naranjo Reyes",
    "jobTitle": t('home.subtitle'),
    "description": pageDescription,
    "image": image,
    "url": "https://kevinnaranjo.com",
    "sameAs": [
      "https://github.com/kevin0naranjo",
      "https://www.linkedin.com/in/kevin-alejandro-naranjo-reyes-2573351a2/"
    ],
    "knowsAbout": [
      "Software Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Web Development"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={i18n.language} />
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
      <meta property="og:locale" content={i18n.language} />
      <meta property="og:locale:alternate" content={i18n.language === 'es' ? 'en' : 'es'} />

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
        href={`https://kevinnaranjo.com${location.pathname}`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://kevinnaranjo.com${location.pathname}`}
      />
      <link rel="alternate" hrefLang="x-default" href="https://kevinnaranjo.com" />
    </Helmet>
  );
};

export default SEOHelmet;