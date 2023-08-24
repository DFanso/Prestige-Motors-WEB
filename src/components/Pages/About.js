import React from 'react';
import './About.css';
import Footer from '../Footer';

const About = () => {
    return (
        <div>

            <div className="about-container">
                <div className="about-content">
                    <img
                        src="/images/about-cover.jpg"
                        alt="Sample Image"
                        className="about-image"
                    />
                    <div className="about-text-container">
                        <h1>PRESTIGE MOTORS</h1>
                        <div className='about-oncover-p'><p>QUAND LE VINTAGE RENCONTRE LE PRESTIGE</p></div>
                    </div>
                </div>
            </div>
            <div className='about-mission-container'>
                <div className="about-mission-content">
                    <h1>NOTRE MISSION</h1>
                    <p>" Pour élever l'art des transactions de voitures classiques, nous nous engageons à révolutionner le marché automobile. Grâce à notre écosystème innovant, nous améliorons le processus pour les passionnés, les collectionneurs et les professionnels de l'industrie, redéfinissant la façon dont les voitures classiques sont achetées et vendues "</p>
                </div>
            </div>

            <div className="about-features-container">
                <div className="about-features-box">
                    {/* <img src="/images//about-features-1.png" alt="Sample Image 3" /> */}
                    <img src="/images//new-small-about-box-three.png" alt="Sample Image 3" />
                    <h3>Passion pour les classiques</h3>
                    <p>Nous sommes animés par une profonde passion pour les voitures classiques et leur allure intemporelle. Notre amour pour le patrimoine automobile nous pousse à créer une plateforme exceptionnelle qui honore l'héritage et le savoir-faire de ces automobiles d'époque.</p>
                </div>
                <div className="about-features-box">
                    <img src="/images//new-small-about-box-one.png" alt="Sample Image 2" />
                    <h3>Expertise de confiance</h3>
                    <p>Avec des années d'expérience dans l'industrie et une connaissance approfondie des voitures classiques, notre équipe d'experts se consacre à vous guider à chaque étape du processus d'achat et de vente. Faites-nous confiance pour fournir des évaluations précises.</p>
                </div>
                <div className="about-features-box">
                    <img src="/images//new-small-about-box-two.png" alt="Sample Image 3" />
                    <h3>Preserving Heritage</h3>
                    <p>Nous nous engageons à préserver le patrimoine des voitures classiques. Notre engagement consiste à préserver l'héritage de ces automobiles emblématiques, en veillant à ce que leur beauté intemporelle perdure pour les générations futures.</p>
                </div>
            </div>

            <div className="about-services-row">
                <div className="about-services-column">
                    <img src="/images//service-1.png" alt="Sample Image 1" />
                    <h3>Juste valeur marchande</h3>
                    <p>Nous veillons à ce que nos prix soient compétitifs et reflètent la juste valeur marchande des voitures classiques. Notre équipe recherche et analyse avec diligence les données de tarification, afin que vous puissiez être sûr que vous obtenez une offre équitable.</p>
                </div>
                <div className="about-services-column">
                    <img src="/images//service-2.png" alt="Sample Image 2" />
                    <h3>Service client exceptionnel</h3>
                    <p>Chez Prestige Motors, nous sommes fiers d'offrir un service client exceptionnel. Notre équipe dédiée d'experts automobiles est là pour vous fournir une assistance personnalisée. Faites confiance à notre savoir-faire et à notre expérience</p>
                </div>
                <div className="about-services-column">
                    <img src="/images//service-3.png" alt="Sample Image 3" />
                    <h3>Entreprise digne de confiance</h3>
                    <p>Chez Prestige Motors, nous privilégions la confiance et la fiabilité dans chaque transaction. Nous avons mis en place des processus de vérification robustes pour nous assurer que tous les vendeurs et toutes les annonces respectent nos normes strictes.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
