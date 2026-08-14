export const siteName = 'Trinetra Digital Lab';

export const siteTagline = 'AI • Technology • Digital Innovation';

export const siteMetadata = {
  title: 'Trinetra Digital Lab | AI, Technology & Digital Innovation',
  description:
    'Trinetra Digital Lab builds intelligent digital products, AI-powered solutions, cybersecurity platforms and technology experiences.',
} as const;

function resolveSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  return raw.replace(/\/+$/, '');
}

export const siteUrl = resolveSiteUrl();
