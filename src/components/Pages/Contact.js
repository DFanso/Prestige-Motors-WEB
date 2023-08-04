import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Footer from '../Footer';
import ReactLoading from 'react-loading';

const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.id]: event.target.value});
    };

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();

        try {
            
            const response = await axios.post('https://api.prestigemotorsvence.com/api/emailSend', formData);
            setLoading(false);
            console.log(response.data);
            alert(response.data.message)
            // TODO: handle success (e.g., clear the form, show a success message, etc.)
        } catch (error) {
            console.error(error);
            setLoading(false);
            alert(response.data.message)
            // TODO: handle error (e.g., show an error message, etc.)
        }
    };

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

            {loading ? (
                <div className="loading-container">
                    <ReactLoading type={"spin"} color={"#000"} />
                </div>
            ) : (
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
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nom</label>
                            <input type="text" id="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="telephone">Téléphone</label>
                            <input type="tel" id="telephone" value={formData.telephone} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="4" value={formData.message} onChange={handleChange} />
                        </div>
                        <div className='contact-form-btn'><button type="submit">Envoyer le message</button></div>
                    </form>
                </div>
            </div>
            )}

            <Footer />
        </div>

    );
};

export default ContactUs;
