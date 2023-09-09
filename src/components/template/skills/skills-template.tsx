import "./skills-template.css";

export default function SkillsTemplate() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        Minhas <span>Skills</span>
      </h2>

      <div className="container skills__container">
        <div className="container skills__row">
          <div className="skills__column">
            <h3 className="title">Front-End</h3>
            <div className="skills__content">
              <div className="skills__colum-image">
                <div className="skills__img">
                  <img
                    src="/images/skills/html.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>HTML</h3>
                  <img
                    src="/images/skills/css.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>CSS</h3>
                </div>
                <div className="skills_img">
                  <img
                    src="/images/skills/javascript.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>JavaScript</h3>
                  <img
                    src="/images/skills/typescript.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>TypeScript</h3>
                </div>
                <div className="skills_img">
                  <img
                    src="/images/skills/react.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>React</h3>
                  <img
                    src="/images/skills/angular.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>Angular</h3>
                </div>
                <div className="skills_img">
                  <img
                    src="/images/skills/next-js.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>Next.JS</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="skills__column">
            <h3 className="title">Back-End</h3>
            <div className="skills__content">
              <div className="skills__colum-image-back">
                <div>
                  <img
                    src="/images/skills/microsoft-net.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>.Net</h3>
                  <img
                    src="/images/skills/c4.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>C#</h3>
                </div>
                <div>
                  <img
                    src="/images/skills/microsoft-sql-server.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>SQL Server</h3>
                  <img
                    src="/images/skills/mongodb.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>MongoDB</h3>
                </div>
                <div>
                  <img
                    src="/images/skills/postgresql.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>PostgreSQL</h3>
                  <img
                    src="/images/skills/mysql.svg"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>MySQL</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="skills__images-center">
          <div className="skills__images">
            <div className="skills__images-tools">
              <img
                src="/images/coding.jpg"
                alt="Computer Image"
                width={465}
                height={465}
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
