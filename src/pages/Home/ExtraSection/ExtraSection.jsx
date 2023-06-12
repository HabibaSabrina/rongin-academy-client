import React from 'react';
import img1 from '/arts/art1971.jpg'
import img2 from '/arts/nature2.jpg'
import img3 from '/arts/sunset-silhouette-african-elephant-amidst-savannah-plain-generative-ai.jpg'
import img4 from '/arts/watercolor.jpg'
import { Fade } from 'react-awesome-reveal';

const ExtraSection = () => {
    return (
        <div className='md:grid grid-cols-2 md:py-20 gap-10 md:px-64 p-5 text-center text-xl font-semibold text-[#F13C20]'>
            <div>
            <img className='rounded-xl' src={img2} alt="" />
            <Fade><p className='py-3 '>A Beautiful picture of nature using acrylic paint.</p></Fade>
            </div>
            <div>
            <img className='rounded-xl'  src={img1} alt="" />
            <Fade><p className='py-3 '>A heart touching picture of 1971</p></Fade>    
            </div>            
                        
            <div>
            <img className='rounded-xl'  src={img3} alt="" />
            <Fade><p className='py-3 '>An amazing work on graphics designing</p></Fade>
            </div>
            <div>
            <img className='rounded-xl'  src={img4} alt="" />
            <Fade><p className='py-3 '>Water color painting of nature</p></Fade>
            </div>

        </div>
    );
};

export default ExtraSection;