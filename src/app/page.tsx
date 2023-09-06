import AboutTemplate from "@/components/template/about/about-template";
import JourneyTemplate from "@/components/template/journey/journey-template";
import HomeTemplate from "@/components/template/main-home/home-template";
import PortfolioTemplate from "@/components/template/portfolio/portfolio-template";
import ServicesTemplate from "@/components/template/services/services-template";
import SkillsTemplate from "@/components/template/skills/skills-template";

export default function Home() {
  return (
    <>
      <HomeTemplate />
      <AboutTemplate />
      <JourneyTemplate />
      <SkillsTemplate />
      <ServicesTemplate />
      <PortfolioTemplate />
    </>
  );
}
