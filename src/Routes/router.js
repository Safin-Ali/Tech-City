import {createBrowserRouter} from 'react-router-dom';
import Development from '../Page/Development/Development';
import Home from '../Page/Home/Home';
import Main from '../Page/Main/Main';

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/development', element: <Development></Development>
            },
        ]
    },
]);