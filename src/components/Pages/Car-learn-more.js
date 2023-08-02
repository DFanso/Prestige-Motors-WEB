import React, { useState, useEffect } from 'react';
import './Car-learn-more.css';
import Footer from '../Footer';
import { useParams, useNavigate, } from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';


const CarLearnMore = () => {

    const { id } = useParams();

 console.log(id)
 const [car, setCar] = useState(null);
 const [bigImage, setBigImage] = useState();
 const [loading, setLoading] = useState(true);

useEffect(() => {
    axios.get(`http://localhost:3000/api/carForSale/${id}`)
        .then(res => {
            setCar(res.data);
            if (res.data.pictures && res.data.pictures.length > 0) {
                setBigImage(res.data.pictures[1]); // set first image from the API as the bigImage
            }
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
        });
}, [id]);


    // Replace with the path to your big image

    const handleSmallImageClick = (image) => {
        setBigImage(image);
    };

    // If car data is not yet loaded, return null or some kind of loading indicator
    if (!car) return null;
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
                        src={car.pictures[0]}
                        alt="Sample Image"
                        className="about-image"
                    />
                    <div className="about-text-container car-learn-more-mobile-p">
                        <h1>{car.carName}</h1>
                        <div className='about-oncover-p'><p>{car.smallDescription}</p></div>
                    </div>
                </div>
            </div>


            <div className='car-learn-more-bg-con'>
                <div className="car-learn-more">
                    <div className="car-left-column">
                        <h1>{car.carName}</h1>
                        <div className='car-learn-more-call-box'><p className='car-learn-more-call-p'>CALL FOR PRICE</p></div>
                        <div className='car-learn-more-call-num-box'><p>04-93-58-11-87</p></div>
                        <div className="rectangle-box">
                            <div className='rec-box-row-one'>
                                <div className='rec-box-set-one'><p className="car-learn-more-bold-text">TRANSMISSION</p>
                                    <p className='car-learn-more-text'>{car.transmission}</p>
                                </div>
                                <div className='rec-box-set-one'><p className="car-learn-more-bold-text">MILEAGE</p>
                                    <p className='car-learn-more-text'>{car.mileage}</p>
                                </div>
                            </div>

                            <div className='rec-box-row-two'>
                                <div className='rec-box-set-one'><p className="car-learn-more-bold-text">EXTERIOR COLOR</p>
                                    <p className='car-learn-more-text'>{car.exteriorColor}</p>
                                </div>
                                <div className='rec-box-set-one'><p className="car-learn-more-bold-text">INTERIOR COLOR</p>
                                    <p className='car-learn-more-text'>{car.interiorColor}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="car-right-column">
                        <img className="big-image" src={bigImage} alt="Big Car Image" />
                        <div className="small-images">
                            {car.pictures.map((image, index) => (
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
                        <p className='car-learn-more-car-des-p'>{car.largeDescription}</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

                )
}
</div>
        
    );
};

export default CarLearnMore;
