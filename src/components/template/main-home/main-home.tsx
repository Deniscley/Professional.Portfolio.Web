import "./main-home.css";

export default function MainHome() {
  return (
    <section className="home">
      <div className="container home__content">
        <h1>
          Olá, Eu sou <span>Deniscley Marfran</span>
        </h1>
        <div className="home__text-animate">
          <h3>Full Stack Developer</h3>
          <p>
            Este é o site oficial do meu portfólio para estar me apresentando e
            mostrar todos os meus trabalhos relacionados ao desenvolvimento web.
          </p>

          <div className="home__btn-box">
            <a href="" className="btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
