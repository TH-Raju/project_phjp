import React from 'react';

const Feature = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center my-14'>
                <div>
                    <h1 className='lg:text-6xl text-4xl font-bold'>
                        Features are more helpful
                        to create creative shapes
                        as well.
                    </h1>
                </div>
                <div>
                    <p className='text-xl font-bold'>
                        We are constantly rethinking the future by creating the
                        next generation of products, brands and services from
                        a hybrid perspective. The unthinkable today becomes
                        inevitable.
                    </p>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10 '>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={require("../assests/1.png")} alt="1" className='bg-white' /></figure>
                    <div className="card-body">
                        <h2 className="card-title lg:text-3xl font-bold">Branding</h2>
                        <p className="leading-5">Having these marketplace to your branded skilled team of designers and developers who embracement perfection.</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={require("../assests/2.png")} alt="1" className='bg-white' /></figure>
                    <div className="card-body">
                        <h2 className="card-title lg:text-3xl font-bold">Optimum</h2>
                        <p className="leading-5">Brand identity design a the key to success whether you breath rebranding an existing business or creating a business</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={require("../assests/3.png")} alt="1" className='bg-white' /></figure>
                    <div className="card-body">
                        <h2 className="card-title lg:text-3xl font-bold">Thinking</h2>
                        <p className="leading-5">Creative typography plays the big role to pull off this trending more effectively with the thinking use a thicker point</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={require("../assests/4.png")} alt="1" className='bg-white' /></figure>
                    <div className="card-body">
                        <h2 className="card-title lg:text-3xl font-bold">Execution</h2>
                        <p className="leading-5 ">Stricky with multiple shades of the colours. However, this type of alone can look awesome forever an online business</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;