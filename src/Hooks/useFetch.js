import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useFetch = (func) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(func())
    },[]);
};

export default useFetch;