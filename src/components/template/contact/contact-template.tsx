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
            <MdOutlineMailOutline className="contact__option-icon" />
            <h2>Email</h2>
            <a
              href="mailto:deniscleymaf@outlook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Envie uma Mensagem
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h2>Messenger</h2>
            <a
              href="https://m.me/deniscley.marfran/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Envie uma Mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h2>Whatsapp</h2>
            <a
              href="https://wa.me/553598158860"
              target="_blank"
              rel="noreferrer noopener"
            >
              Envie uma Mensagem
            </a>
          </article>
        </div>
        <form action="">
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
            <button type="submit" className="btn-box-send btn">
              <a>Enviar</a>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
