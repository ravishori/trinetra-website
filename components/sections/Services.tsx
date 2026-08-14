import { CloudIcon, CpuIcon, ShieldIcon, WorkflowIcon } from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { typography } from '@/styles/theme';

const services = [
  {
    title: 'AI & Intelligent Systems',
    description: 'Applied machine intelligence for products that need reliable, useful automation.',
    icon: CpuIcon,
  },
  {
    title: 'Cybersecurity & Digital Safety',
    description: 'Protective product thinking for people, devices and digital workflows.',
    icon: ShieldIcon,
  },
  {
    title: 'Cloud & Application Engineering',
    description: 'Modern web and application platforms designed for clarity, scale and maintainability.',
    icon: CloudIcon,
  },
  {
    title: 'Automation & Digital Platforms',
    description: 'Operational systems that reduce friction and keep teams focused on real work.',
    icon: WorkflowIcon,
  },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <h2 className={typography.title}>Solutions</h2>
        <p className={`${typography.body} mt-3 max-w-2xl`}>
          Focused capabilities we apply when building digital products.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="shadow-sm">
              <CardHeader>
                <service.icon className="mb-3 size-5 text-primary" aria-hidden />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
