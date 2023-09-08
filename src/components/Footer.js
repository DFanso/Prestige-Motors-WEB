import React from 'react';
import './Footer.css'; // Create a CSS file Footer.css and link it here
// import '../../public/sitemap.html';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-row">
                <div className="footer-column">
                    <img src="/images/logo.png" alt="Logo" />
                </div>
                <div className="footer-column">
                    <h3>Prestige Motor's</h3>
                    <ul>
                        <li><a href="#">Page d'accueil</a></li>
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Vente</a></li>
                        <li><a href="#">Contactez-nous</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Information d'entreprise</h3>
                    <p>Conditions d'utilisation</p>
                    <p>Politique de confidentialité</p>
                </div>
                <div className="footer-column">
                    <h3>Contactez-nous</h3>
                    <p>prestigevence@gmail.com</p>
                    <p>1330 chemin de vosgelade 06140 vence</p>
                    <p>04.93.58.11.87</p>
                </div>
            </div>
            <div className="footer-social">

                <p>Suivez-nous pour plus de contenu exclusif</p>
                <div className="social-icons">
                    <a className='social-color-href' href="https://www.instagram.com/prestigemotorsvence/"> <FaInstagram size={24} className="icon" /></a>
                    {/* Adjust the size in pixels as needed */}
                    <a className='social-color-href' href="https://www.facebook.com/profile.php?id=100009761925051"> <FaFacebook size={24} className="icon" /></a>
                    {/* <FaTwitter size={24} className="icon" /> */}
                </div>
                {/* <hr className="footer-line" /> */}
            </div>
            <p className="footer-rights">© 2023 Prestige Motor's, Tous droits réservés.</p>
            <a href="/sitemap.html"></a>
        </footer>
    );
}

export default Footer;