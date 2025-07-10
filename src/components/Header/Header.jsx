import React from "react";
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src="./logo.png" alt="Bizim Mətbəx" />
        </div>

        <h1 className="header-title">Tezliklə burada!</h1>

        <p className="header-description">
          Aztəminatlı ailələrə və ehtiyacı olan insanlara yardım etmək üçün
          sizin dəstəyinizə ehtiyacımız var. Hər bir yardım, bir ürəyi
          sevindirir və bir insanı doyurur.
        </p>

        <div className="header-social">
            <p>Yenilikləri izləyin</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
                </a>
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;
