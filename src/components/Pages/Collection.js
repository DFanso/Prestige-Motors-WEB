import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Collection.css';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Collection = () => {

    const navigate = useNavigate();

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(cars)

    useEffect(() => {
        axios.get('https://api.prestigemotorsvence.com/api/carForSale')
            .then(res => {
                setCars(res.data);
                setLoading(false);  // Set loading to false when data is fetched
            })
            .catch(err => {
                console.error(err);
                setLoading(false);  // Also set loading to false if there is an error
            });
    }, []);

    const handleLearnMoreClick = (id) => {
        navigate(`/car-learn-more/${id}`);
    };

    const chunk = (arr, size) => 
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );

        return (
            <div>
                {loading ? (
                    <div><LoadingScreen
                    loading={true}
                    bgColor='#f1f1f1'
                    spinnerColor='#9ee5f8'
                    textColor='#676767'
                    logoSrc='/images/logo.png'
                    
                  > 
                    // ...
                    // here loadable content
                    // for example, async data
                    //<div>Loadable content</div>
                  </LoadingScreen></div>  // Loading screen
                ) : (
                    <div>
            <div className="about-container">
                <div className="about-content">
                    <img
                        src="/images/collection-cover.jpg"
                        alt="Sample Image"
                        className="about-image"
                    />
                    <div className="about-text-container">
                        <h1>PRESTIGE MOTORS</h1>
                        <div className='about-oncover-p'><p>DÉCOUVREZ NOTRE SÉLECTION TRIÉE SUR LE VOLET DE TRÉSORS AUTOMOBILES INTEMPORELS</p></div>
                    </div>
                </div>
            </div>

            <div className='sale-container collection-container'>
                <div className='sale-topic-container'>
                    <div className='h1-sale'><h1 className='sale-topic'>À VENDRE</h1></div>
                </div>

                {chunk(cars, 2).map((row, index) => (
                    <div key={index} className='all-cards all-card-row-margin'>
                        {row.map((car, index) => (
                            <div key={index} className="card-sec card-sec-margin">
                                <div className="image-section">
                                  
                                    <LazyLoadImage src={car.pictures[0]}
        style={{ height: '100%', width: '100%' }}
        alt="Car for sale"
      />

                                </div>
                                <div className="content-section">
                                    <h2>{car.carName}</h2>
                                    <h4>DESCRIPTION</h4>
                                    <p className='sale-card-des'>
                                        {car.smallDescription}
                                    </p>
                                    <div className='btn-sale-card'><button className='sale-card-btn' onClick={() => handleLearnMoreClick(car._id)}>Apprendre Encore Plus</button>
</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                <Footer />
            </div>
        </div>
                )}
            </div>
        );
    };

export default Collection;
