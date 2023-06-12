import React from 'react';
import img1 from './../../../../public/arts/art1971.jpg'
import img2 from './../../../../public/arts/nature2.jpg'
import img3 from './../../../../public/arts/sunset-silhouette-african-elephant-amidst-savannah-plain-generative-ai.jpg'
import img4 from './../../../../public/arts/watercolor.jpg'

const ExtraSection = () => {
    return (
        <div className='md:grid grid-cols-2 md:py-20 bg-[#f9f9e3] gap-10 md:px-64 p-5 text-center text-xl font-semibold text-[#F13C20]'>
            <div>
            <img className='rounded-xl' src={img2} alt="" />
            <p className='py-3 '>A Beautiful picture of nature using acrylic paint.</p>
            </div>
            <div>
            <img className='rounded-xl'  src={img1} alt="" />
            <p className='py-3 '>A heart touching picture of 1971</p>    
            </div>            
                        
            <div>
            <img className='rounded-xl'  src={img3} alt="" />
            <p className='py-3 '>An amazing work on graphics designing</p>
            </div>
            <div>
            <img className='rounded-xl'  src={img4} alt="" />
            <p className='py-3 '>Water color painting of nature</p>
            </div>

        </div>
    );
};

export default ExtraSection;