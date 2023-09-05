import { BiSolidCalendar } from "react-icons/bi";
import "./education-template.css";

export default function EducationTemplate() {
  return (
    <section className="education" id="education">
      <h2 className="heading">
        Minha <span>Jornada</span>
      </h2>
      <div className="education__row">
        <div className="education__column">
          <h3 className="title">Educação</h3>
          <div className="education__box">
            <div className="education__content">
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
        </div>

        <div className="education__column">
          <h3 className="title">Experiência</h3>
          <div className="education__box">
            <div className="education__content">
              <div className="content">
                <div className="year">
                  <BiSolidCalendar />
                  <a> 2019 - 2023</a>
                </div>
                <h3>Squadra Tecnologia</h3>
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
      </div>
      <div className="education__img">
        <img
          src="/images/engin-akyurt.jpg"
          alt="Computer Image"
          width={1000}
          height={600}
        ></img>
      </div>
    </section>
  );
}
