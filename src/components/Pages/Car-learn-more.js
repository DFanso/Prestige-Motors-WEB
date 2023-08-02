import React, { useState, useEffect } from 'react';
import './Car-learn-more.css';
import Footer from '../Footer';
import { useParams, useNavigate, } from 'react-router-dom';
import axios from 'axios';


const CarLearnMore = () => {

    const { id } = useParams();
 console.log(id)
 const [car, setCar] = useState(null);
 const [bigImage, setBigImage] = useState();

useEffect(() => {
    axios.get(`http://localhost:3000/api/carForSale/${id}`)
        .then(res => {
            setCar(res.data);
            if (res.data.pictures && res.data.pictures.length > 0) {
                setBigImage(res.data.pictures[1]); // set first image from the API as the bigImage
            }
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
    );
};

export default CarLearnMore;
