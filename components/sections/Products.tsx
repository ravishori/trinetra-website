import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { typography } from '@/styles/theme';

const products = [
  {
    name: 'SecureShield',
    description: 'A digital safety and security-oriented product currently in development.',
  },
  {
    name: 'GeoProof Camera',
    description: 'A camera-related product concept focused on verifiable visual capture.',
  },
  {
    name: 'EmergencyMesh',
    description: 'A communications-oriented product concept for emergency and mesh connectivity.',
  },
  {
    name: 'SGNP Smart Ticketing',
    description: 'A smart ticketing product concept for visitor and access workflows.',
  },
  {
    name: 'VitaPulse AI',
    description: 'An AI product concept in the health and wellbeing space.',
  },
  {
    name: 'Trinetra AI Platform',
    description: 'A platform concept for applying AI across Trinetra digital products.',
  },
] as const;

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 border-y border-border bg-muted/30 py-16 sm:py-24">
      <Container>
        <h2 className={typography.title}>Products</h2>
        <p className={`${typography.body} mt-3 max-w-2xl`}>
          Early product directions. Detailed case studies will be published when they are ready.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} className="shadow-sm">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">Coming soon</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
