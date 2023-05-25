import React from 'react';

const Footer = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className='w-5/6 mx-auto'>
                <h1 className='lg:text-9xl md:text-6xl text-2xl font-bold'>Get started <br /> now</h1>
                <h3 className='md:text-3xl font-bold text-gray-600 lg:w-3/6 w-9/12 my-7'>If you would like to work with us or just want to get in touch, we’d love to hear from you!</h3>
            </div>
            <footer className="footer p-10  text-base-content">
                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 border-t md:border-b w-full mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14 mt-6 md:mb-9'>
                        <div className='leading-2'>
                            <span className="uppercase  text-2xl font-bold text-white">London</span>
                            <h2 className='mt-6 text-lg'>Baltia Squar, Mark Street, <br />
                                London</h2>
                        </div>
                        <div className='leading-2'>
                            <span className="uppercase  text-2xl font-bold text-white">Legal</span>
                            <h1 className='mt-6 text-lg'>Nenuya Centre, Elia Street <br />
                                New York, USA</h1>
                        </div>
                    </div>
                    <div className='md:border-l h-32' >
                        <input type="email" placeholder='Enter Your Email' className='md:ml-8 border-b bg-transparent md:text-3xl font-bold' name="" id="" />
                    </div>
                </div>

            </footer>
            <footer className="footer px-10 py-4 border-t text-base-content border-base-300">
                <div className="items-center grid-flow-col ">
                    <div className='leading-3'>
                        <p>© 2022 - 2025 | Alrights reserved</p> <br />
                        <h4>by <span className='text-white font-bold'>Wealcoder</span></h4>
                    </div>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <h2 className='md:text-lg font-bold'>ABOUT US</h2>
                        <h2 className='md:text-lg font-bold'>CONTACT</h2>
                        <h2 className='md:text-lg font-bold'>CAREER</h2>
                        <h2 className='md:text-lg font-bold'>FAQS</h2>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;