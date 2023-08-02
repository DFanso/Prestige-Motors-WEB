import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Restoration.css';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const RestorationPage = () => {
    const navigate = useNavigate();

    // Declare the state variable to hold the restoration data
    const [restorations, setRestorations] = useState([]);
    console.log(restorations)

    // Fetch the restoration data from the API when the component mounts
    useEffect(() => {
        axios.get('http://localhost:3000/api/restoration')
            .then(res => {
                setRestorations(res.data);
            })
            .catch(err => {
                console.error(err);
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

                {chunk(restorations, 2).map((row, index) => (
                    <div key={index} className='all-cards all-card-row-margin'>
                        {row.map((restoration, index) => (
                            <div key={index} className="card-sec card-sec-margin">
                                <div className="image-section">
                                    <img src={restoration.pictures[1]} alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                                </div>
                                <div className="content-section">
                                    <h2>{restoration.carName}</h2>
                                    <h4>DESCRIPTION</h4>
                                    <p className='sale-card-des'>
                                        {restoration.smallDescription}
                                    </p>
                                    <div className='btn-sale-card'><button className='sale-card-btn' onClick={() => handleLearnMoreClick(restoration._id)}>Apprendre Encore Plus</button>
</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

            </div>
            <Footer />
        </div>
    );
};

export default RestorationPage;
