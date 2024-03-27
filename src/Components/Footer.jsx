import footer from "./../Styles/Components/Footer.module.scss";
export default function Footer() {
  return (
    <>
      <footer className={footer.footer}>
        <div className={footer.footerColumn}>
          {/* Columna 1: Logo */}
          <div className={footer.logo}>
            {/* Aquí puedes colocar tu logo */}
            <img src="./logo.png" alt="Logo" />
          </div>
        </div>
        <div className={footer.footerColumn}>
          {/* Columna 2: Market place, My account, Resources, Company, Social media buttons */}
          <div className={footer.links}>
            <a href="#">Market Place</a>
            <a href="#">My Account</a>
            <a href="#">Resources</a>
            <a href="#">Company</a>
            {/* Aquí puedes colocar tus botones de redes sociales */}
            <div className={footer.socialMedia}>
              <button>Facebook</button>
              <button>Twitter</button>
              <button>Instagram</button>
            </div>
          </div>
        </div>
        <div className={footer.footerColumn}>
          {/* Columna 3: Email input, Copyright */}
          <div className={footer.contact}>
            <input type="email" placeholder="Your Email" />
            <p>&copy; 2024 Your Company Name</p>
          </div>
        </div>
      </footer>
    </>
  );
}
