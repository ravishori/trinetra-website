import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { typography } from '@/styles/theme';

export function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-24">
      <Container className="rounded-xl border border-border bg-card px-6 py-12 shadow-sm sm:px-10">
        <h2 className={typography.title}>Start a Conversation</h2>
        <p className={`${typography.body} mt-3 max-w-xl`}>
          If you would like to discuss a product, research idea or collaboration, reach out when
          public contact details are published.
        </p>
        <div className="mt-6">
          <Button type="button" disabled>
            Contact details coming soon
          </Button>
        </div>
      </Container>
    </section>
  );
}
