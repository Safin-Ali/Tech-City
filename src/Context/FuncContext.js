import { createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const CommonFunction = createContext();

const FuncContext = ({children}) => {

    // // get current location;
    // const location = useLocation();

    // // navigate callback function
    // const navigate = useNavigate();

    // navigate path
    const handleNavigate = path => {};

    // object of function list
    const functionObj = {
        handleNavigate
    };
    
    return (
        <CommonFunction.Provider value={functionObj}>
            {children}
        </CommonFunction.Provider>
    );
};

export default FuncContext;