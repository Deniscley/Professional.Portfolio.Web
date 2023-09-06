import AboutTemplate from "@/components/template/about/about-template";
import JourneyTemplate from "@/components/template/journey/journey-template";
import MainHome from "@/components/template/main-home/main-home";
import ServicesTemplate from "@/components/template/services/services-template";
import SkillsTemplate from "@/components/template/skills/skills-template";

export default function Home() {
  return (
    <>
      <MainHome />
      <AboutTemplate />
      <JourneyTemplate />
      <SkillsTemplate />
      <ServicesTemplate />
    </>
  );
}
