import { Container } from '@/components/layout/Container';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { typography } from '@/styles/theme';

const principles = [
  {
    title: 'Security by Design',
    description: 'Protective defaults and careful handling of sensitive workflows from the start.',
  },
  {
    title: 'Practical Innovation',
    description: 'New technology only where it improves a real product or process.',
  },
  {
    title: 'AI with Purpose',
    description: 'Intelligence applied to clear problems, with human review where it matters.',
  },
  {
    title: 'User-Centric Engineering',
    description: 'Interfaces and systems that stay readable, usable and maintainable.',
  },
] as const;

export function WhyChooseUs() {
  return (
    <section id="why" className="scroll-mt-20 border-y border-border bg-muted/30 py-16 sm:py-24">
      <Container>
        <h2 className={typography.title}>Why Trinetra</h2>
        <p className={`${typography.body} mt-3 max-w-2xl`}>
          A small set of principles that guide how we design and build.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => (
            <Card key={principle.title} className="shadow-sm">
              <CardHeader>
                <CardTitle>{principle.title}</CardTitle>
                <CardDescription>{principle.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
