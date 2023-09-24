import { AiOutlineDownload } from "react-icons/ai";
import "./about-template.css";
import { FaAward, FaGraduationCap } from "react-icons/fa";

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
          <div className="about__circle-spin" />
        </div>
        <h3>Full Stack Developer</h3>
        <div className="about__cards">
          <article className="about__card">
            <FaGraduationCap className="about__icon" />
            <h5>Graduação</h5>
            <small>
              Ciência da Computação
              <br />
            </small>
            <small>Universidade Federal de Lavras - UFLA</small>
          </article>

          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experiência</h5>
            <small>4+ Anos Trabalhando</small>
          </article>
        </div>
        <p>
          Sou Deniscley Marfran, um entusiasta de DevOps, Domain-Driven Design
          (DDD), Arquitetura de Software e Código Limpo (Clean Code). Formado no
          curso de Bacharelado em Ciência da Computação pela Universidade
          Federal de Lavras. Dentro da área de atuação profissional, atuo como
          desenvolvedor de software full stack com foco no desenvolvimento de
          aplicações para web utilizando-se de diversas tecnologias para estar
          melhorando as experiências do usuário de maneira moderna e amigável.
        </p>

        <div className="about__btn-box">
          <a
            href="/images/CurriculumVitae-Deniscley_Marfran.pdf"
            download="CurriculumVitae-Deniscley_Marfran"
            className="btn"
          >
            <AiOutlineDownload />
            <div>Download CV</div>
          </a>
        </div>
      </div>
    </section>
  );
}
