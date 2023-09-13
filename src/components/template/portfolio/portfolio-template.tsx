import "./portfolio-template.css";

export default function PortfolioTemplate() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Meu <span>Portfólio</span>
      </h2>

      <div className="container portfolio__container">
        <div className="portfolio__column">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="/images/site_n&e.jpg"
                alt="Portfolio Image"
                width={520}
                height={370}
              />
            </div>
            <h2>Denis Marlon - Nutrição & Exercício</h2>
            <div className="btn-box portfolio__button-center">
              <div className="portfolio__item-button">
                <div className="portfolio__btn-box">
                  <a
                    href="https://github.com/Deniscley/Nutrition.And.Exercise.Web"
                    className="btn"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Github
                  </a>
                  {/* <a
                  href=""
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Site
                </a> */}
                </div>
              </div>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="/images/portfolio_deniscley.jpg"
                alt="Portfolio Image2"
                width={540}
                height={370}
              />
            </div>
            <h2>Portfólio Deniscley Marfran</h2>
            <div className="btn-box portfolio__button-center">
              <div className="portfolio__item-button">
                <div className="portfolio__btn-box">
                  <a
                    href="https://github.com/Deniscley/Nutrition.And.Exercise.Web"
                    className="btn"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Github
                  </a>
                  {/* <a
                    href=""
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Site
                  </a> */}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
