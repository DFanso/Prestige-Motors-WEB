import React from 'react';
import './Restoration.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

const RestorationPage = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/car-learn-more');
    };
    return (
        <div>
            <div className="about-container">
                <div className="about-content">
                    <img
                        src="/images/res-cover.jpg"
                        alt="Sample Image"
                        className="about-image"
                    />
                    <div className="about-text-container">
                        <h1>RESTAURATION</h1>
                        <div className='about-oncover-p'><p>FAIRE REVIVRE AUX AUTOMOBILES D'ÉPOQUE LEUR SPLENDEUR D'ORIGINE.</p></div>
                    </div>
                </div>
            </div>

            <div className='sale-container collection-container'>
                <div className='sale-topic-container'>
                    <div className='h1-sale'><h1 className='sale-topic'>RESTAURATION</h1></div>
                </div>

                <div className='all-cards all-card-row-margin'>
                    <div className="card-sec card-sec-margin">
                        <div className="image-section">
                            {/* Replace 'image-url.jpg' with the URL of the car image */}
                            <img src="/images/sale-card-4.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div className="content-section">
                            <h2>1961 JAGUAR E TYPE</h2>
                            {/* <p>Price: $50,000</p> */}
                            <h4>DESCRIPTION</h4>
                            <p className='sale-card-des'>
                                Avec des années d'expérience dans l'industrie et une connaissance approfondie des voitures classiques,
                                notre équipe d'experts se consacre à vous guider à chaque étape du processus d'achat et de vente.
                            </p>
                            <div className='btn-sale-card'><button className='sale-card-btn' onClick={handleLearnMoreClick}>Apprendre Encore Plus</button></div>
                        </div>
                    </div>
                    <div className="card-sec card-sec-margin">
                        <div className="image-section">
                            {/* Replace 'image-url.jpg' with the URL of the car image */}
                            <img src="/images/sale-card-3.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div className="content-section">
                            <h2>Aston Martin DB5</h2>
                            {/* <p>Price: $150,000</p> */}
                            <h4>DESCRIPTION</h4>
                            <p className='sale-card-des'>
                                L'Aston Martin DB5 est une voiture de grand tourisme de luxe légendaire produite par le constructeur
                                automobile britannique Aston Martin.
                            </p>
                            <div className='btn-sale-card'><button className='sale-card-btn'>Apprendre Encore Plus</button></div>
                        </div>
                    </div>
                </div>

                <div className='all-cards all-card-row-margin-2 restoration-row-margin'>
                    <div className="card-sec card-sec-margin">
                        <div className="image-section">
                            {/* Replace 'image-url.jpg' with the URL of the car image */}
                            <img src="/images/sale-card-5.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div className="content-section">
                            <h2>1987 MGB Roadster</h2>
                            {/* <p>Price: $50,000</p> */}
                            <h4>DESCRIPTION</h4>
                            <p className='sale-card-des'>
                                Avec des années d'expérience dans l'industrie et une connaissance approfondie des voitures classiques,
                                notre équipe d'experts se consacre à vous guider à chaque étape du processus d'achat et de vente.
                            </p>
                            <div className='btn-sale-card'><button className='sale-card-btn'>Apprendre Encore Plus</button></div>
                        </div>
                    </div>
                    <div className="card-sec card-sec-margin">
                        <div className="image-section">
                            {/* Replace 'image-url.jpg' with the URL of the car image */}
                            <img src="/images/sale-card-6.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div className="content-section">
                            <h2>Aston Martin DB5</h2>
                            {/* <p>Price: $150,000</p> */}
                            <h4>DESCRIPTION</h4>
                            <p className='sale-card-des'>
                                L'Aston Martin DB5 est une voiture de grand tourisme de luxe légendaire produite par le constructeur
                                automobile britannique Aston Martin.
                            </p>
                            <div className='btn-sale-card'><button className='sale-card-btn'>Apprendre Encore Plus</button></div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default RestorationPage;
