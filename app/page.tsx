import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import FeatureCards from '@/components/sections/FeatureCards';
import AboutSection from '@/components/sections/AboutSection';
import WhyExhibit from '@/components/sections/WhyExhibit';
import SideEvents from '@/components/sections/SideEvents';
import SpeakersTeaser from '@/components/sections/SpeakersTeaser';
import InstitutionsBar from '@/components/sections/InstitutionsBar';
import BrandLogos from '@/components/sections/BrandLogos';
import MediaPartners from '@/components/sections/MediaPartners';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeatureCards />
      <AboutSection />
      <WhyExhibit />
      <SideEvents />
      <SpeakersTeaser />
      <InstitutionsBar />
      <BrandLogos />
      <MediaPartners />
      <FinalCTA />
    </>
  );
}
