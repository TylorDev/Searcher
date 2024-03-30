import { Link } from "react-router-dom";
import footer from "./../Styles/Components/Footer.module.scss";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className={footer.footer}>
        <div className={footer.column}>
          <div className={footer.logo}>
            <img src="./logo.png" alt="Logo" />
          </div>
          <p className={footer.frase}>
            The IMG marketplace with everything for everyone
          </p>
        </div>
        <div className={footer.column}>
          <div className={footer.links}>
            <Link to="/Market">Market Place</Link>
            <Link to="/Profile">My Account</Link>
            <Link to="/Explore">Resources</Link>
            <Link to="/About">Company</Link>
          </div>
          <div className={footer.socialMedia}>
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaFacebookF />
            </button>
            <button>
              <FaDiscord />
            </button>
            <button>
              <FaYoutube />
            </button>
          </div>
        </div>
        <div className={footer.column}>
          <div className={footer.contact}>
            <p className={footer.text}>Stay updated, join our mailing list.</p>
            <div className={footer.mail}>
              <input type="email" placeholder="Your Email" />
              <button>Send</button>
            </div>
          </div>

          <p>&copy; 2024 Your Company Name</p>
        </div>
      </footer>
    </>
  );
}
