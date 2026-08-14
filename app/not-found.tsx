import Link from 'next/link';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Container className="py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">The page you requested does not exist.</p>
      <Button className="mt-6" nativeButton={false} render={<Link href="/" />}>
        Back to home
      </Button>
    </Container>
  );
}
