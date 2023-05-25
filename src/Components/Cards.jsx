import React from 'react';

const Cards = () => {
    return (
        <div className=' max-w-screen-xl mx-auto my-24'>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center w-5/6 mx-auto  my-16'>
                <div>
                    <h1 className='lg:text-5xl md:text-3xl font-bold'>Updated <br /> Journal</h1>
                </div>
                <div>
                    <p className='w-60 text-xl'>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                </div>
                <div className='text-center  '>
                    <p className='inline-block pt-4 text-center border h-24 w-24  rounded-full  hover:bg-purple-400 hover:text-black duration-200 hover:ml-3'><span>Read <br /> All Journal</span></p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={require("../assests/c.jpg")} alt="Shoes" className="rounded-xl hover:blur-sm duration-150" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 >UI Design . 02 May 2019</h2>
                        <h1 className="card-title text-2xl font-bold">Ways of lying to yourself about your new relationship.</h1>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={require("../assests/h.jpg")} alt="Shoes" className="rounded-xl hover:blur-sm duration-150" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 >UI Design . 02 May 2019</h2>
                        <h1 className="card-title text-2xl font-bold">Ways of lying to yourself about your new relationship.</h1>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={require("../assests/m.jpg")} alt="Shoes" className="rounded-xl hover:blur-sm duration-150" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 >UI Design . 02 May 2019</h2>
                        <h1 className="card-title text-2xl font-bold">Ways of lying to yourself about your new relationship.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;