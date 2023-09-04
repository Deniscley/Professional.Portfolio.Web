import "./about.css";

export default function AboutTemplate() {
  return (
    <section className="about">
      <h2 className="about__heading">
        About <span>Me</span>
      </h2>
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
          <a href="" className="btn">
            Leia Mais
          </a>
        </div>
      </div>
    </section>
  );
}
