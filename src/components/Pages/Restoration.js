import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Restoration.css';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import { LazyLoadImage } from "react-lazy-load-image-component";
import ResImageSlider from './res-sliderr';

const RestorationPage = () => {
    const navigate = useNavigate();

    // Declare the state variable to hold the restoration data
    const [restorations, setRestorations] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(restorations)

    // Fetch the restoration data from the API when the component mounts
    useEffect(() => {
        axios.get('https://api.prestigemotorsvence.com/api/restoration')
            .then(res => {
                setRestorations(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const handleLearnMoreClick = (id) => {
        navigate(`/res-learn-more/${id}`);
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
                        <ResImageSlider />
                        <div className="about-content">
                            {/* <img
                        src="/images/res-cover.jpg"
                        alt="Sample Image"
                        className="about-image"
                    /> */}

                            {/* <div className="about-text-container">
                                <h1>RESTAURATION</h1>
                                <div className='about-oncover-p'><p>FAIRE REVIVRE AUX AUTOMOBILES D'ÉPOQUE LEUR SPLENDEUR D'ORIGINE.</p></div>
                            </div> */}
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
                                            <LazyLoadImage src={restoration.pictures[0]}
                                                style={{ height: '100%', width: '100%' }}
                                                alt="Car for sale"
                                            />
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

            )}
        </div>
    );
};

export default RestorationPage;
