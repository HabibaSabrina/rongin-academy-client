import React from 'react';

const Title = ({ heading, subHeading }) => {
    return (
        <div>
            <div className="mx-auto text-center md:w-4/12 my-8">
                
                <h3 className="text-3xl font-semibold text-[#4056A1] py-4">{heading}</h3>
                <p className="text-yellow-600 mb-2">{subHeading}</p>
            </div>
        </div>
    );
};

export default Title;