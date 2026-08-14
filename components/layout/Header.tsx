import { Container } from '@/components/layout/Container';
import { Navbar } from '@/components/navigation/Navbar';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <Container>
        <Navbar />
      </Container>
    </header>
  );
}
