import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import "./contact-template.css";

export default function ContactTemplate() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Meus <span>Contatos</span>
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <a
              href="mailto:deniscleymaf@outlook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdOutlineMailOutline className="contact__option-icon" />
              <h2>Email</h2>
              Envie uma Mensagem
            </a>
          </article>
          <article className="contact__option">
            <a
              href="https://m.me/deniscley.marfran/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RiMessengerLine className="contact__option-icon" />
              <h2>Messenger</h2>
              Envie uma Mensagem
            </a>
          </article>
          <article className="contact__option">
            <a
              href="https://wa.me/553598158860"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsWhatsapp className="contact__option-icon" />
              <h2>Whatsapp</h2>
              Envie uma Mensagem
            </a>
          </article>
        </div>
        <form
          action="https://formsubmit.co/deniscleymaf@yahoo.com.br"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu Nome Completo"
            required
          />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Sua Mensagem"
            required
          />
          <div style={{ display: "flex" }}>
            <div className="contact__btn-box">
              <button type="submit" className="btn">
                <a>Enviar</a>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
