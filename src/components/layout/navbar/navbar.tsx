import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.css";
import { links } from "../../../state/routes/routes";
import { yellowtail } from "@/assets/fonts/fonts";
import LightMode from "@/components/lightMode/light-mode";

export default function Navbar() {
  const isActive = usePathname();
  const activeNav = "active-nav";

  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link href="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <div className={yellowtail.className}>DENISCLEY MARFRAN.</div>
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <Link
                  href={path}
                  className={isActive === path ? activeNav : ""}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  <div>{name}</div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="light-mode__color-icon">
          <LightMode />
        </div>

        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
