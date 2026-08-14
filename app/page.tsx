import { Hero } from '@/components/hero/Hero';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Products } from '@/components/sections/Products';
import { Services } from '@/components/sections/Services';
import { TechnologyStack } from '@/components/sections/TechnologyStack';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <TechnologyStack />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}
