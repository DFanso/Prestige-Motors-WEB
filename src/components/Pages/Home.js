import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import Footer from '../Footer';
import './Home.css';



const Home = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/car-learn-more');
    };


    return (
        <div>
            <ImageSlider />
            <div className='sale-container'>
                <div className='sale-topic-container'>
                    <div className='h1-sale'><h1 className='sale-topic'>À VENDRE</h1></div>
                </div>

                <div className='all-cards all-card-row-margin'>
                    <div className="card-sec card-sec-margin">
                        <div className="image-section">
                            {/* Replace 'image-url.jpg' with the URL of the car image */}
                            <img src="/images/sale-card-4.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div className="content-section">
                            <h2>1987 MGB Roadster</h2>
                            <p>Price: $50,000</p>
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
                            <p>Price: $150,000</p>
                            <h4>DESCRIPTION</h4>
                            <p className='sale-card-des'>
                                L'Aston Martin DB5 est une voiture de grand tourisme de luxe légendaire produite par le constructeur
                                automobile britannique Aston Martin.
                            </p>
                            <div className='btn-sale-card'><button className='sale-card-btn' onClick={handleLearnMoreClick}>Apprendre Encore Plus</button></div>
                        </div>
                    </div>
                </div>

                <div className='all-cards all-card-row-margin-2'>
                    <div className="card-sec card-sec-margin">
                        <div className="image-section">
                            {/* Replace 'image-url.jpg' with the URL of the car image */}
                            <img src="/images/sale-card-5.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div className="content-section">
                            <h2>1987 MGB Roadster</h2>
                            <p>Price: $50,000</p>
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
                            <img src="/images/sale-card-6.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div className="content-section">
                            <h2>Aston Martin DB5</h2>
                            <p>Price: $150,000</p>
                            <h4>DESCRIPTION</h4>
                            <p className='sale-card-des'>
                                L'Aston Martin DB5 est une voiture de grand tourisme de luxe légendaire produite par le constructeur
                                automobile britannique Aston Martin.
                            </p>
                            <div className='btn-sale-card'><button className='sale-card-btn' onClick={handleLearnMoreClick}>Apprendre Encore Plus</button></div>
                        </div>
                    </div>
                </div>









                <div className='home-view-more-button'>
                    <button className="view-more view-more-card-end">VOIR PLUS</button>
                </div>
                <div className="container-bar">
                    <div className="background-image">
                        <div className="content-wrapper">
                            <div className="column">
                                <h2 class="h2-sans-text">Achetez votre classique</h2>
                                <button className="learn-more">APPRENDRE ENCORE PLUS</button>
                            </div>
                            <div className="column">
                                <img src="/images/classic-car-2.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog-container">
                    <div className="blog-box">
                        <img src="/images/blog-1.jpg" alt="Box 1" />
                        <h3>Préserver le patrimoine automobile classique : l'importance de la restauration</h3>
                        <div className='blog-des'><p>Découvrez l'importance de la restauration de voitures classiques dans la préservation du patrimoine automobile. Découvrez le savoir-faire, l'attention portée aux détails et la valeur historique que les projets de restauration apportent aux automobiles d'époque.</p></div>
                    </div>
                    <div className="blog-box">
                        <img src="/images/blog-2.jpg" alt="Box 2" />
                        <h3>Investir dans les voitures classiques : une passion intemporelle</h3>
                        <div className='blog-des'><p>Plongez dans le monde des investissements dans les voitures classiques et découvrez pourquoi ces trésors vintage continuent d'être un atout recherché. Découvrez les facteurs qui font des voitures classiques une opportunité d'investissement unique et potentiellement lucrative</p></div>
                    </div>
                    <div className="blog-box">
                        <img src="/images/blog-3.jpg" alt="Box 3" />
                        <h3>Dévoilement des ventes aux enchères de voitures classiques </h3>
                        <div className='blog-des'><p>Entrez dans le monde exaltant des ventes aux enchères de voitures classiques et soyez témoin de l'excitation des passionnés qui enchérissent pour leurs véhicules de rêve. En savoir plus sur le processus d'enchères, les enchères notables à travers le monde</p></div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
