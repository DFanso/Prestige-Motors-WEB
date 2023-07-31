import React from 'react';
import './Contact.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Footer from '../Footer';

const ContactUs = () => {
    return (
        <div>

            <div className="about-container">
                <div className="about-content">
                    <img
                        src="/images/contact-cover.jpg"
                        alt="Sample Image"
                        className="about-image"
                    />
                    <div className="about-text-container">
                        <h1>CONTACTEZ-NOUS</h1>
                        <div className='about-oncover-p'><p>CONTACTEZ-NOUS POUR TOUS VOS BESOINS EN VOITURES ANCIENNES. NOUS SOMMES LÀ POUR VOUS AIDER</p></div>
                    </div>
                </div>
            </div>

            <div className="contact-us-container">
                {/* Left Section */}
                <div className="contact-us-left-section">
                    <img src="/images/contact-form.jpg" alt="Contact Image" />
                    <div className="left-content">
                        <h1>Contactez-nous</h1>
                        <p>Connectez-vous avec notre équipe en remplissant le formulaire ou en nous envoyant un email à prestigevence@gmail.com</p>
                        <p className='social-follow-p'>Suivez-nous sur les réseaux sociaux</p>
                        <div className="social-icons social-contact-form">
                            <FaInstagram size={24} className="icon" />
                            <FaFacebook size={24} className="icon" />
                            <FaTwitter size={24} className="icon" />
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="contact-us-right-section">
                    <div>
                        <h1>Envoyez votre message</h1>
                        <p>Contactez-nous</p>
                    </div>
                    <form>
                        <div>
                            <label htmlFor="name">Nom</label>
                            <input type="text" id="name" />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="telephone">Téléphone</label>
                            <input type="tel" id="telephone" />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="4" />
                        </div>
                        <div className='contact-form-btn'><button type="submit">Envoyer le message</button></div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>

    );
};

export default ContactUs;
