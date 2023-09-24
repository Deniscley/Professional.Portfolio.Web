"use client";
import "./footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiThreadsFill, RiTwitterXFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { yellowtail } from "@/assets/fonts/fonts";
import { BiSolidChevronsUp } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();

  const setPathname = () => {
    if (pathName === "/") {
      return true;
    }
    return false;
  };

  return (
    <footer>
      <a href="/" className="footer__logo">
        <div className={yellowtail.className}>DENISCLEY MARFRAN</div>
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
          <RiTwitterXFill />
        </a>
        <a href="https://www.threads.net/@deniscleymarfran">
          <RiThreadsFill />
        </a>
        <a href="https://www.youtube.com/@DeniscleyMarfran">
          <AiFillYoutube />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Portfólio Deniscley Marfran. Todos os direitos reservados.
        </small>
      </div>

      {setPathname() && (
        <div className="footer__iconTop">
          <Link href="/">
            <BiSolidChevronsUp />
          </Link>
        </div>
      )}
    </footer>
  );
}
