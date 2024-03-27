import navbar from "./../Styles/Components/Navbar.module.scss";

/*
Para usar  css modules usa esta expesiones regulares al terminar de trabajar aqui.

Buscar = className="(.*?)"
Remplazar = className={navbar.$1}

*/

export default function Navbar() {
  return (
    <nav className={navbar.navbar}>
      <div className={navbar.navbarLogo}>
        {/* Aquí puedes colocar tu logo */}
        <img src="./logo.png" alt="Logo" />
      </div>
      <div className={navbar.navbarSearch}>
        {/* Aquí puedes colocar tu input searchbar */}
        <input type="text" placeholder="Search..." />
      </div>
      <div className={navbar.navbarLinks}>
        {/* Aquí puedes colocar los enlaces de tu navbar */}
        <a href="#">Explore</a>
        <a href="#">Stats</a>
        <a href="#">Resources</a>
        <a href="#">Create</a>
      </div>
      <div className={navbar.navbarProfile}>
        {/* Aquí puedes colocar el botón de perfil */}
        <button>Profile</button>
      </div>
      <div className={navbar.navbarWallet}>
        {/* Aquí puedes colocar el botón de wallet */}
        <button>Wallet</button>
      </div>
    </nav>
  );
}
