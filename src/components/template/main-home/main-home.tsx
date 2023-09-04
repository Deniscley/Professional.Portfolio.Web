import "./main-home.css";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

export default function MainHome() {
  return (
    <>
      <section className="home">
        <div className="container home__content">
          <div className="home__left">
            <h1>
              Olá, Eu sou <span>Deniscley Marfran</span>
            </h1>
            <div className="home__text-animate">
              <h3>Full Stack Developer</h3>
              <p>
                Este é o site oficial do meu portfólio para estar me
                apresentando e mostrar todos os meus trabalhos relacionados ao
                desenvolvimento web.
              </p>

              <div className="home__btn-box">
                <a href="" className="btn">
                  <AiOutlineDownload />
                  Download CV
                </a>
              </div>

              <div className="home__sci">
                <a href="" target="_blank" rel="noreferrer noopener">
                  <BiLogoLinkedin />
                </a>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <BiLogoGithub />
                </a>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </div>

          <div className="home__rigth">
            <div className="home__image">
              <img
                src="/images/deniscley_foto2-home.jpg"
                alt="Main Home Image"
                width={540}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="home__img-hover" />
      </section>
      <script></script>
    </>
  );
}
