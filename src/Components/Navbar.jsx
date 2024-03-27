import navbar from "./../Styles/Components/Navbar.module.scss";
import { TbLockSquareRounded } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
/*
Para usar  css modules usa esta expesiones regulares al terminar de trabajar aqui.

Buscar = className="(.*?)"
Remplazar = className={navbar.$1}

*/

export default function Navbar() {
  return (
    <nav className={navbar.navbar}>
      <div className={navbar.Logo}>
        <img src="./logo.png" alt="Logo" />
      </div>
      <div className={navbar.Search}>
        <input type="text" placeholder="Search" />
        <FiSearch className={navbar.lupa} />
      </div>
      <div className={navbar.Links}>
        <a href="#">Explore</a>
        <a href="#">Stats</a>
        <a href="#">Resources</a>
        <a href="#">Create</a>
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
