import React, { useState } from 'react';
import './Car-learn-more.css';
import Footer from '../Footer';


const CarLearnMore = () => {

    const [bigImage, setBigImage] = useState('/images/jaguar-learn-more-big.jpg'); // Replace with the path to your big image
    const smallImages = ['/images/jaguar-learn-more-big.jpg', '/images/jaguar-learn-more-interior.jpg', '/images/jaguar-learn-more-side.jpg', '/images/jaguar-learn-more-back.jpg']; // Replace with the paths to your small images

    const handleSmallImageClick = (image) => {
        setBigImage(image);
    };

    return (
        <div>
            <div className="about-container">
                <div className="about-content">
                    <img
                        src="/images/jaguar-learn-more.jpg"
                        alt="Sample Image"
                        className="about-image"
                    />
                    <div className="about-text-container car-learn-more-mobile-p">
                        <h1>1961 JAGUAR E-TYPE </h1>
                        <div className='about-oncover-p'><p>LA JAGUAR E-TYPE DE 1961 EST UNE VOITURE DE SPORT BRITANNIQUE CLASSIQUE CONNUE POUR SON DESIGN ÉPOUSTOUFLANT, SES PERFORMANCES PUISSANTES ET SON ATTRAIT INTEMPOREL</p></div>
                    </div>
                </div>
            </div>


            <div className='car-learn-more-bg-con'>

                <div className="car-learn-more">
                    <div className="car-left-column">
                        <h1>1961 JAGUAR</h1>
                        <h1 className='car-learn-more-brand-h'>E TYPE</h1>
                        <div className='car-learn-more-call-box'><p className='car-learn-more-call-p'>CALL FOR PRICE</p></div>
                        <div className='car-learn-more-call-num-box'><p>04-93-58-11-87</p></div>
                        <div className="rectangle-box">
                            <div className='rec-box-row-one'>
                                <div className='rec-box-set-one'><p className="car-learn-more-bold-text">TRANSMISSION</p>
                                    <p className='car-learn-more-text'>Manual</p>
                                </div>
                                <div className='rec-box-set-one'><p className="car-learn-more-bold-text">MILEAGE</p>
                                    <p className='car-learn-more-text'>56087</p>
                                </div>
                            </div>

                            <div className='rec-box-row-two'>
                                <div className='rec-box-set-one'><p className="car-learn-more-bold-text">EXTERIOR COLOR</p>
                                    <p className='car-learn-more-text'>Grey</p>
                                </div>
                                <div className='rec-box-set-one'><p className="car-learn-more-bold-text">INTERIOR COLOR</p>
                                    <p className='car-learn-more-text'>Black</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="car-right-column">
                        <img className="big-image" src={bigImage} alt="Big Car Image" />
                        <div className="small-images">
                            {smallImages.map((image, index) => (
                                <img
                                    key={index}
                                    className="small-image"
                                    src={image}
                                    alt={`Small Car Image ${index + 1}`}
                                    onClick={() => handleSmallImageClick(image)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='car-learn-more-car-des-container'>
                    <div className='car-learn-more-car-des'>
                        <p className='car-learn-more-car-des-p'>La Jaguar E-Type, une automobile souvent vénérée comme un chef-d'œuvre emblématique, est un symbole intemporel de
                            sophistication, de puissance et de design impeccable. Originaire des années 1960, cette voiture de sport britannique captive les spectateurs avec ses contours
                            gracieux, son capot allongé et son aura incomparable qui dégage une allure inégalée sur la route.Incarnant une fusion parfaite d'élégance et de performance, la
                            Jaguar E-Type s'est imposée comme une légende dans le monde automobile. Ses lignes épurées et son profil aérodynamique allient sans effort forme et fonction,
                            reflétant une ère d'excellence automobile. Sous le capot, la Jaguar E-Type dissimule une gamme d'options de moteurs puissants qui alimentent ses remarquables
                            capacités de performance. De l'accélération exaltante à la maniabilité agile, ce chef-d'œuvre redéfinit l'expérience de conduite, laissant les passionnés captivés et
                            aspirant à plus. Au-delà de ses prouesses mécaniques, la Jaguar E-Type occupe une place unique dans l'histoire de l'automobile pour son attrait durable. À chaque
                            coup d'œil, on est entraîné dans un monde d'art automobile, où l'ingénierie de précision rencontre l'esthétique intemporelle.</p>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default CarLearnMore;
