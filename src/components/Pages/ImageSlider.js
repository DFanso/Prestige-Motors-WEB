// ImageSlider.js

import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Create a CSS file for styling the image slider

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        {
            url: '/images/slide-8.jpg',
            heading: 'TOUJOURS À VOS CÔTÉS',
            text: 'RESTAURATION ACHAT ET VENTE DE VEHICULE ANCIEN',
        },
        {
            url: '/images/slide-6.jpg',
            heading: 'LE PARADIS DES ANCIENS',
            text: 'RESTAURATION ACHAT ET VENTE DE VEHICULE ANCIEN',
        },
        {
            url: '/images/slide-4.jpg',
            heading: 'RESTAURATION ET ENTRETIEN',
            text: 'RESTAURATION ACHAT ET VENTE DE VEHICULE ANCIEN',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds (adjust this value as needed)

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <div className="image-slider">
            <div className="slider-wrapper">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentImage ? 'active' : ''}`}
                        style={{
                            backgroundImage: `url(${image.url})`,
                            opacity: index === currentImage ? 1 : 0,
                            zIndex: index === currentImage ? 1 : 0,
                        }}
                    >
                        <div className="slider-content">
                            <h1>{image.heading}</h1>
                            <p>{image.text}</p>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    );
};

export default ImageSlider;
