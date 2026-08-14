import { Container } from '@/components/layout/Container';

export default function CaseStudiesLoading() {
  return (
    <Container className="py-16">
      <div className="h-8 w-48 animate-pulse rounded-md bg-muted" />
      <div className="mt-4 h-4 w-full max-w-xl animate-pulse rounded-md bg-muted" />
    </Container>
  );
}
