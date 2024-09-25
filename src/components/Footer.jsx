import React from "react";
import FacebookIcon from "../assets/icons8-facebook.svg";
import TwitterIcon from "../assets/icons8-twitter.svg";
import InstagramIcon from "../assets/icons8-instagram.svg";
import ContactUs1 from "./ContactUs1";
import Partnerships1 from "./Partnerships1";

//import LinkedInIcon from "..src/assets/images/linkedin.svg";
import "./Footer.css"; // Footer specific styles

function Footer() {
  return (
    <footer className="footer">
      <div class="grid-container">
        <div class="column-left">
          <div>
            <ContactUs1></ContactUs1>
          </div>
          <div className="container1">
            <p>&copy; 2024 IEM innovatAl</p>
            <ul className="social-links">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterIcon} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column-right">
          <Partnerships1></Partnerships1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
