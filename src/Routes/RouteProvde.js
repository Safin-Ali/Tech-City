import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const RouteProvde = () => {
    return (
        <RouterProvider router={router}>           
        </RouterProvider>
    );
};

export default RouteProvde;