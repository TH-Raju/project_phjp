import React from 'react';
import ban from '../assests/lines.png';

const Banner = () => {
    return (
        <div className="hero h-screen  bg-black" style={{ backgroundImage: `url("${ban}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content">
                <div className="lg:-mt-24">
                    <div>
                        <h1 className="  font-bold lg:text-9xl md:text-7xl text-4xl lg:-ml-56">We Design <br /> Unique</h1>
                    </div>
                    <div>
                        <img src={require("../assests/arrow-long.png")} className='h-14 lg:w-3/5 md:w-2/5 md:ml-72 lg:ml-56 lg:-mt-14' alt="" />
                    </div>

                    <h1 className="mb-5 md:text-7xl text-4xl font-bold lg:text-9xl text-right lg:-mr-56  lg:-mt-28 md:mt-7 sm:mt-14">Digital <br /> Experience</h1>
                    <div className='md:w-2/6 w-52 md:ml-24 lg:ml-56 md:-mt-16  lg:-mt-32 lg:w-3/12'>
                        <p className="mb-5 font-bold">Thinking, writing and planning with brand are just a of what we do. For more than 10 years, It’s more competitive space for agency.</p>
                    </div>

                    <div className='text-center'>
                        <p className='border md:mt-36 md:h-48 md:w-48 w-36 h-36 pt-16 rounded-full p-7 bottom-0 text-center hover:bg-purple-400 hover:text-black duration-200 hover:ml-3'><span>Explore <br /> Our  Service</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;