import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyClass = () => {
    const updateClass = useLoaderData();
    console.log(updateClass)
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default UpdateMyClass;