import "./skills-template.css";

export default function SkillsTemplate() {
  return (
    <section className="skills">
      <h2 className="heading">
        Minhas <span className="section__subtitle">Habilidades</span>
      </h2>

      <div className="skills__row">
        <div className="skills__column">
          <h3 className="title">Habilidades de Front-End</h3>

          <div className="skills__box">
            <div className="skills__content">
              <div className="skills__colum-image">
                <div className="skills__img">
                  <img
                    src="/images/skills/html.svg"
                    alt="HTML"
                    width={75}
                    height={75}
                  />
                  <h3 style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
                    HTML
                  </h3>

                  <img
                    src="/images/skills/css.svg"
                    alt="HTML"
                    width={75}
                    height={75}
                  />
                  <h3 style={{ marginLeft: "2.5rem", marginBottom: "1rem" }}>
                    CSS
                  </h3>
                </div>

                <div className="skills_img">
                  <img
                    src="/images/skills/javascript.svg"
                    alt="HTML"
                    width={75}
                    height={75}
                  />
                  <h3 style={{ marginLeft: "0.5rem", marginBottom: "1rem" }}>
                    JavaScript
                  </h3>

                  <img
                    src="/images/skills/typescript.svg"
                    alt="HTML"
                    width={75}
                    height={75}
                  />
                  <h3 style={{ marginLeft: "0.5rem", marginBottom: "1rem" }}>
                    TypeScript
                  </h3>
                </div>

                <div className="skills_img">
                  <img
                    src="/images/skills/react.svg"
                    alt="HTML"
                    width={75}
                    height={75}
                  />
                  <h3 style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
                    React
                  </h3>

                  <img
                    src="/images/skills/angular.svg"
                    alt="HTML"
                    width={75}
                    height={75}
                  />
                  <h3 style={{ marginLeft: "1.2rem", marginBottom: "1rem" }}>
                    Angular
                  </h3>
                </div>

                <div className="skills_img">
                  <img
                    src="/images/skills/next-js.svg"
                    alt="HTML"
                    width={75}
                    height={75}
                  />
                  <h3 style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                    Next.JS
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__column">
          <h3 className="title">Habilidades de Back-End</h3>

          <div className="skills__box">
            <div className="skills__content">
              <div className="skills__colum-image-back">
                <div>
                  <img
                    src="/images/skills/microsoft-net.svg"
                    alt="HTML"
                    width={75}
                    height={75}
                  />
                  <h3 style={{ marginLeft: "2.2rem", marginBottom: "1rem" }}>
                    .Net
                  </h3>

                  <img
                    src="/images/skills/c4.svg"
                    alt="HTML"
                    width={75}
                    height={75}
                  />
                  <h3 style={{ marginLeft: "2.7rem", marginBottom: "1rem" }}>
                    C#
                  </h3>
                </div>

                <div>
                  <img
                    src="/images/skills/microsoft-sql-server.svg"
                    alt="HTML"
                    width={75}
                    height={75}
                  />
                  <h3 style={{ marginLeft: "1rem", marginBottom: "1rem" }}>
                    SQL Server
                  </h3>

                  <img
                    src="/images/skills/mongodb.svg"
                    alt="HTML"
                    width={75}
                    height={75}
                  />
                  <h3 style={{ marginLeft: "0.9rem", marginBottom: "1rem" }}>
                    MongoDB
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
