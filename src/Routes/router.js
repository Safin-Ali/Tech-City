import {createBrowserRouter} from 'react-router-dom';
import ProductAddition from '../Components/Form/ProductAddition';
import Development from '../Page/Development/Development';
import Home from '../Page/Home/Home';
import Main from '../Page/Main/Main';
import ProductItems from '../Page/Product-Items/ProductItems';
import SingleProduct from '../Page/Product-Items/SingleProduct';

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/development', element: <Development></Development>
            },
            {
                path: `/development/:device`, loader: async ({params}) => fetch (`https://tech-city.vercel.app/caregorySchema/${params.device}`) , element: <ProductAddition></ProductAddition> , errorElement: <p>Network Error</p>
            },
            {
                path: `/products/:device`, element: <ProductItems></ProductItems> , errorElement: <p>Network Error</p>
            },
            {
                path: `/products/:brand/:device`, element: <ProductItems></ProductItems> , errorElement: <p>Network Error</p>
            },
            {
                path: `/product/:brand/:device/:id`, loader:async ({params})=> fetch(`https://tech-city.vercel.app/product/${params.id}`), element: <SingleProduct></SingleProduct> , errorElement: <p>Network Error</p>
            },
        ]
    },
]);