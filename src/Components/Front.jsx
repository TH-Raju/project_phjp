import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Cards from './Cards';
import Contact from './Contact';

const Front = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Feature></Feature>
            <Contact></Contact>
            <Cards></Cards>
        </div>
    );
};

export default Front;