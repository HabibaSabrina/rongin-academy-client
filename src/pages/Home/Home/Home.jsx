import React, { useEffect, useState } from 'react';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import { Helmet } from 'react-helmet';


const Home = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "retro")
    const handleToggle = event => {
        if (event.target.checked) {
            setTheme("dark");

        }
        else {
            setTheme("retro")
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])
    return (
        <div>
            <Helmet><title>Rongin Academy | Home</title></Helmet>
           <div className='m-10'>
           <label className="swap">
                <input className=' bg-[#4056A1] rounded-xl' type="checkbox" onChange={handleToggle} />
                <div className="p-3 text-white font-semibold swap-off">Dark Theme ON</div>
                <div className="p-3 text-white font-semibold swap-on">Dark Theme OFF</div>
            </label>
           </div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
           
        </div>
    );
};

export default Home;