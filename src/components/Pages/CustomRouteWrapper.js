import React from 'react';
import Navbar from '../Navbar';

const CustomRouteWrapper = ({ children, path }) => {
    const navbarVisiblePaths = [
        '/', '/about', '/contact', '/collection', '/car-learn-more/:id',
        '/res-learn-more/:id', '/restoration'
    ];

    const isNavbarVisible = navbarVisiblePaths.includes(path);

    return (
        <>
            {isNavbarVisible && <Navbar />}
            {children}
        </>
    );
};

export default CustomRouteWrapper;
