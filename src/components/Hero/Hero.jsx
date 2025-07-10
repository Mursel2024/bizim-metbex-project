import React, {useState} from "react";
import "./Hero.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Donate from "../Donate/Donate";

function Hero(){
    
    const [showDonate, setShowDonate]=useState(false);

    return(
        <section className="hero">
            <div className="hero-container">
                <div className="hero-image-side">
                    <div className="hero-image-wrapper">
                        <img src="./food.jpg" alt="Yemək paylanması" className="hero-main-image" />
                    </div>
                </div>
                <div className="hero-content-side">
                    <img src="./logo.png" alt="Bizim Mətbəx" className="hero-logo" />
                    <h1 className="hero-title">
                        Birlikdə paylaşaq, <br />ümid yaradaq!
                    </h1>
                    <p className="hero-description">
                        Aztəminatlı ailələrə yardım etmək üçün sizin dəstəyinizə ehtiyacımız var. Hər gün bir yardım, bir ürəyi sevindirir və bir insanı doyurur.
                    </p>
                    <div className="hero-actions">
                        <button className="hero-btn primary" onClick={()=> setShowDonate(true)}>
                            Dəstək ol
                        </button>
                        <button className="hero-btn secondary">Könüllü ol</button>
                    </div>
                    <div className="hero-social">
                        <p>Yenilikləri sosial məkanda izləyin</p>
                        <div className="hero-social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="hero-footer">&copy; 2025, Bizim Mətbəx</footer>
            {/* Modal Donate form */}
            {showDonate && (
                <div className="donate-modal-overlay" onClick={()=>setShowDonate(false)}>
                    <div className="donate-modal" onClick={e => e.stopPropagation()}>
                        <button className="donate-modal-close" onClick={() => setShowDonate(false)}>×</button>
                        <Donate />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Hero;