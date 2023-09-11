import "./clients-template.css";

export default function ClientsTemplate() {
  return (
    <section className="clients" id="clients">
      <h2 className="heading">
        Meus <span>Clientes</span>
      </h2>

      <div className="container companies__container">
        <div className="clients__subtitle">
          <p>
            Tive a oportunidade de trabalhar com um grupo diversificado de
            empresas. Algumas das empresas notáveis ​com as quais trabalhei
            incluem.
          </p>
        </div>

        <article className="companies">
          <img
            src="/images/squadra-logo.png"
            width={400}
            height={200}
            alt="Logo Empresa"
          />
        </article>
      </div>
    </section>
  );
}
