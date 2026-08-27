import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Prasanna S — Creative Director & Design Engineer',
  description = 'Portfolio of Prasanna S, an independent Creative Director and Design Engineer specializing in bespoke digital architecture, visual identities, and interactive web experiences.',
  keywords = [
    'Creative Director',
    'Design Engineer',
    'UI/UX Architecture',
    'Prasanna Portfolio',
    'Brand Identity',
    'Interactive Motion',
    'React',
    'TypeScript',
    'GSAP',
    'Framer Motion',
  ],
  image = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
  url = 'https://Prasanna.design',
  type = 'website',
}) => {
  const siteTitle = title.includes('Prasanna') ? title : `${title} | Prasanna S`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Prasanna S" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0a0a0a" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Font Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};
