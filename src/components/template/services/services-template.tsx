import { BiCheck } from "react-icons/bi";
import "./services-template.css";

export default function ServicesTemplate() {
  return (
    <section className="services">
      <h2 className="heading">
        Meus <span> Serviços</span>
      </h2>

      <article className="container service__container">
        <div className="service__row">
          <div className="service__column">
            <h3 className="title">Back-End</h3>
            <ul className="service__list">
              <div className="service__content">
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>
                    Mapeamento de requisitos e dados para a implementação de
                    projetos;
                  </p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>
                    Desenvolver novas funcionalidades, que atendam às
                    necessidades dos usuários;
                  </p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>
                    Elaboração, implementação, testes, depuração e atualização
                    de códigos;
                  </p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Criação, integração e gerenciamento de Bancos de Dados;</p>
                </li>
              </div>
            </ul>
          </div>

          <div className="service__column">
            <h3 className="title">Front-End</h3>
            <ul className="service__list">
              <div className="service__content">
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>
                    Manutenção e otimização de websites e interfaces de usuário;
                  </p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>
                    Melhorar a usabilidade do usuário através de novas
                    funcionalidades e processos;
                  </p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Converter o design da peça UX/UI em realidade;</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>
                    Criar ferramentas e elementos que melhorem a interação com o
                    site em qualquer dispositivo ou navegador;
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </div>
        {/* <div className="services__images-center">
          <div className="services__images">
            <div className="services__images-computer">
              <img
                src="/images/servico_computer.jpg"
                alt="Service Image"
                width={465}
                height={465}
              />
            </div>
          </div>
        </div> */}
      </article>
    </section>
  );
}
