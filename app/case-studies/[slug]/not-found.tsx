import Link from 'next/link';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';

export default function CaseStudyNotFound() {
  return (
    <Container className="py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Case study not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">This case study is not available yet.</p>
      <Button className="mt-6" nativeButton={false} render={<Link href="/case-studies" />}>
        Back to case studies
      </Button>
    </Container>
  );
}
