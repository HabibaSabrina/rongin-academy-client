import React from 'react';

const Banner = () => {
    return (
        <div className='flex bg-[#f9f9e3] p-20 justify-center items-center gap-10'>
            <div>
                <div className="carousel w-96 rounded-xl">
                    <div id="item1" className="carousel-item w-96">
                        <img src="../../../../public/slider4.jpg" className="w-96" />
                    </div>
                    <div id="item2" className="carousel-item w-96">
                        <img src="../../../../public/slider1.jpg" className="w-96" />
                    </div>
                    <div id="item3" className="carousel-item w-96">
                        <img src="../../../../public/slider2.jpg" className="w-96" />
                    </div>
                    <div id="item4" className="carousel-item w-96">
                        <img src="../../../../public/slider3.jpg" className="w-96" />
                    </div>
                </div>
                <div className="flex justify-center w-96 py-2 gap-2">
                    <a href="#item1" className="btn rounded-full text-white bg-[#4056A1] btn-xs">1</a>
                    <a href="#item2" className="btn rounded-full text-white bg-[#4056A1] btn-xs">2</a>
                    <a href="#item3" className="btn rounded-full text-white bg-[#4056A1] btn-xs">3</a>
                    <a href="#item4" className="btn rounded-full text-white bg-[#4056A1] btn-xs">4</a>
                </div>
            </div>
            <div className='w-1/2'>
                <h1 className='text-3xl font-bold text-[#F13C20]'>Welcome to Rongin Academy</h1>
                <p className='my-2'>Welcome to our Rongin Academy website, where artistic expression knows no bounds! Immerse yourself in a vibrant community of aspiring artists, seasoned professionals, and passionate instructors. Unleash your creativity with our diverse range of online courses, step-by-step tutorials, and interactive resources, all designed to nurture your artistic talent and help you master the art of drawing. Join us today and embark on an inspiring journey of self-discovery and artistic growth.</p>
            </div>
        </div>
    );
};

export default Banner;