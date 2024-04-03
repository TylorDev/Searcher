import navbar from "./../Styles/Components/Navbar.module.scss";
import { TbLockSquareRounded } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

/*
Para usar  css modules usa esta expesiones regulares al terminar de trabajar aqui.

Buscar = className="(.*?)"
Remplazar = className={navbar.$1}

*/

export default function Navbar() {
  return (
    <nav className={navbar.navbar}>
      <Link to={"/"} className={navbar.Logo}>
        <img src="./logo.png" alt="Logo" />
      </Link>
      <div className={navbar.Search}>
        <input type="text" placeholder="Search" />
        <FiSearch className={navbar.lupa} />
      </div>
      <div className={navbar.Links}>
        <Link to="/Explore">Explore</Link>
        <Link to="/Stats">Stats</Link>
        <Link to="Resources">Resources</Link>
        <Link to="/Create">Create</Link>
      </div>

      <div className={navbar.buttons}>
        <div className={navbar.Profile}>
          <button>
            <FaRegUser />
          </button>
        </div>
        <div className={navbar.Wallet}>
          <button>
            <TbLockSquareRounded />
          </button>
        </div>
      </div>
    </nav>
  );
}
