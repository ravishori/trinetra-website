import type { Metadata } from 'next';

import { Container } from '@/components/layout/Container';
import { typography } from '@/styles/theme';

export const metadata: Metadata = {
  title: 'Case Studies | Trinetra Digital Lab',
  description: 'Case studies for Trinetra Digital Lab products will be published here.',
};

const upcoming = [
  'SecureShield',
  'GeoProof Camera',
  'EmergencyMesh',
  'SGNP Smart Ticketing',
  'VitaPulse AI',
  'Trinetra AI Platform',
];

export default function CaseStudiesPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <h1 className={typography.title}>Case Studies</h1>
        <p className={`${typography.body} mt-3 max-w-2xl`}>
          Detailed case studies are not published yet. The following product names are reserved for
          upcoming write-ups.
        </p>
        <ul className="mt-8 space-y-2">
          {upcoming.map((name) => (
            <li key={name} className="text-sm text-muted-foreground">
              {name} — coming soon
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
