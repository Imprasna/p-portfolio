import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';
import { Experiences } from '../components/Experiences';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';

export const Home = () => {
  return (
    <PageTransition>
      <SEO 
        title="Prasanna S — Creative Director & Design Engineer"
        description="Crafting elevated brand identities, bespoke digital systems, and architectural web experiences. Explore selected projects and capabilities."
        keywords={['Creative Director', 'Design Engineer', 'Prasanna', 'Selected Works', 'UI/UX Design', 'Digital Products']}
      />
      <Hero />
      <Projects limit={6} />
      <Experiences />
      <Services />
    </PageTransition>
  );
};

