import Link from 'next/link';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { siteName, siteTagline } from '@/lib/metadata';
import { typography } from '@/styles/theme';

export function Hero() {
  return (
    <section className="border-b border-border py-16 sm:py-24">
      <Container>
        <p className="text-sm font-medium tracking-wide text-primary">{siteTagline}</p>
        <h1 className={`${typography.display} mt-4 max-w-3xl text-foreground`}>
          Building Intelligent Digital Experiences
        </h1>
        <p className={`${typography.lead} mt-5 max-w-2xl`}>
          {siteName} explores and builds AI-powered, secure and practical digital products across
          technology, cybersecurity and intelligent automation.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button nativeButton={false} render={<Link href="/#services" />}>
            Explore Solutions
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/#products" />}>
            View Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
