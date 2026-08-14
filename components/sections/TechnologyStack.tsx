import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { typography } from '@/styles/theme';

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] as const;

export function TechnologyStack() {
  return (
    <section id="technology" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <h2 className={typography.title}>Technology</h2>
        <p className={`${typography.body} mt-3 max-w-2xl`}>
          This website is built with a focused, modern web stack.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li key={item}>
              <Badge variant="secondary">{item}</Badge>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
