import { BiSolidCalendar } from "react-icons/bi";
import "./journey-template.css";

export default function JourneyTemplate() {
  return (
    <section className="journey" id="journey">
      <h2 className="heading">
        Minha <span>Jornada</span>
      </h2>

      <div className="container journey__container">
        <div className="journey__row">
          <div className="journey__column">
            <h3 className="title">Educação</h3>
            <div className="journey__box">
              <div className="journey__content">
                <div className="content">
                  <div className="year">
                    <BiSolidCalendar />
                    <a> 2012 - 2018</a>
                  </div>
                  <h3>Universidade Federal de Lavras</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores maxime architecto voluptas facere, officia
                    voluptatibus veritatis necessitatibus vel, dolorem incidunt
                    magnam at sit fuga atque distinctio ullam quasi.
                    Exercitationem, ad.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="title">Experiência</h3>
            <div className="journey__box">
              <div className="journey__content">
                <div className="content">
                  <div className="year">
                    <BiSolidCalendar />
                    <a> 2019 - 2023</a>
                  </div>
                  <h3>Squadra Digital</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores maxime architecto voluptas facere, officia
                    voluptatibus veritatis necessitatibus vel, dolorem incidunt
                    magnam at sit fuga atque distinctio ullam quasi.
                    Exercitationem, ad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="journey__column">
            <div className="journey-background-image">
              <img
                src="/images/deniscley_image.png"
                alt="Imagem Deniscley Formal"
                width={570}
                height={715}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
