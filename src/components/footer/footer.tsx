import { AiOutlineMail } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
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
        <a href="https://www.linkedin.com/in/deniscleymarfran/">
          <BiLogoLinkedin />
        </a>
        <a href="https://github.com/Deniscley">
          <BiLogoGithub />
        </a>
        <a href="mailto: deniscleymaf@gmail.com">
          <AiOutlineMail />
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
