import Link from 'next/link';

import { Container } from '@/components/layout/Container';
import { navItems } from '@/components/navigation/NavLinks';
import { siteName, siteTagline } from '@/lib/metadata';

const productLinks = [
  'SecureShield',
  'GeoProof Camera',
  'EmergencyMesh',
  'SGNP Smart Ticketing',
  'VitaPulse AI',
  'Trinetra AI Platform',
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="max-w-sm">
          <p className="text-sm font-semibold text-foreground">{siteName}</p>
          <p className="mt-2 text-sm text-muted-foreground">{siteTagline}</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Building practical AI, security and digital products.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Navigation</p>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Products</p>
          <ul className="mt-3 space-y-2">
            {productLinks.map((name) => (
              <li key={name} className="text-sm text-muted-foreground">
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">Contact details will be published here.</p>
        </div>
      </Container>
      <Container className="border-t border-border py-6">
        <p className="text-xs text-muted-foreground">
          © {year} {siteName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
