import React from 'react';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer';
import ExtraSection from '../ExtraSection/ExtraSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;