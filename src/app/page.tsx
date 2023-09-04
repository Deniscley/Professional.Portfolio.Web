import AboutTemplate from "@/components/template/about/about-template";
import EducationTemplate from "@/components/template/education/education-template";
import MainHome from "@/components/template/main-home/main-home";

export default function Home() {
  return (
    <>
      <MainHome />
      <AboutTemplate />
      <EducationTemplate />
    </>
  );
}
