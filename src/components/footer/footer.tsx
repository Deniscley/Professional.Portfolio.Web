import "./footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiTwitterFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer>
      <a href="/" className="footer__logo">
        DENISCLEY MARFRAN
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/sobre">Sobre</a>
        </li>
        <li>
          <a href="/jornada">Jornada</a>
        </li>
        <li>
          <a href="/habilidades">Habilidades</a>
        </li>
        <li>
          <a href="/servicos">Serviços</a>
        </li>
        <li>
          <a href="/portfolio">Portfólio</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/deniscley.marfran">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/deniscleymarfran/">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/DeniscleyMAF">
          <RiTwitterFill />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Portfólio Deniscley Marfran. Todos os direitos reservados.
        </small>
      </div>
    </footer>
  );
}
