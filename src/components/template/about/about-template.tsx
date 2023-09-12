import { AiOutlineDownload } from "react-icons/ai";
import "./about-template.css";

export default function AboutTemplate() {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        Sobre <span>Mim</span>
      </h2>

      <div className="container about__container">
        <div className="about__img">
          <img
            src="/images/deniscley_about.jpg"
            alt="About Image"
            width={300}
            height={230}
          />
          <div className="about__circle-spin"></div>
        </div>
        <div className="about__content">
          <h3>Full Stack Developer</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            expedita incidunt officiis sed rem, ducimus quia eveniet? Ut
            voluptatem quis distinctio repudiandae nemo voluptatibus enim dicta
            expedita totam! Quam, distinctio!
          </p>

          <div className="about__btn-box">
            <a
              href="/images/CurriculumVitae_Deniscley.pdf"
              download="CurriculumVitae_Deniscley"
              className="btn"
            >
              <AiOutlineDownload />
              <div>Download CV</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
