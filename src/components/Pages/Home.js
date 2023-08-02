import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import Footer from '../Footer';
import './Home.css';
import axios from 'axios';



const Home = () => {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);

    

    useEffect(() => {
        axios.get('http://localhost:3000/api/carForSale') // Replace with your API URL
            .then(response => {
                setCars(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const handleLearnMoreClick = (id) => {
        navigate(`/car-learn-more/${id}`);
    };


    return (
        <div>
            <ImageSlider />
            <div className='sale-container'>
                <div className='sale-topic-container'>
                    <div className='h1-sale'><h1 className='sale-topic'>À VENDRE</h1></div>
                </div>

                <div className='all-cards all-card-row-margin'>
                {
                        cars.slice(0, 2).map(car => (
                            <div className="card-sec card-sec-margin" key={car.id}>
                                <div className="image-section">
                                    <img src={car.pictures[0]} alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                                </div>
                                <div className="content-section">
                                    <h2>{car.carName}</h2>
                                    <h4>DESCRIPTION</h4>
                                    <p className='sale-card-des'>{car.smallDescription}</p>
                                    <div className='btn-sale-card'><button className='sale-card-btn' onClick={() => handleLearnMoreClick(car._id)}>Apprendre Encore Plus</button></div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className='all-cards all-card-row-margin'>
                {
                        cars.slice(2, 4).map(car => (
                            <div className="card-sec card-sec-margin" key={car.id}>
                                <div className="image-section">
                                    <img src={car.pictures[0]} alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                                </div>
                                <div className="content-section">
                                    <h2>{car.carName}</h2>
                                    <h4>DESCRIPTION</h4>
                                    <p className='sale-card-des'>{car.smallDescription}</p>
                                    <div className='btn-sale-card'><button className='sale-card-btn' onClick={() => handleLearnMoreClick(car._id)}>Apprendre Encore Plus</button></div>
                                </div>
                            </div>
                        ))
                    }
                    
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
