import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount
} from '../store/jobListSlice';

const useCounter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementCount = () => {
        dispatch(increment());
    };

    const decrementCount = () => {
        dispatch(decrement());
    };

    const addAmount = () => {
        dispatch(incrementByAmount(Number(incrementAmount) || 0));
    };

    const addAsync = () => {
        dispatch(incrementAsync(Number(incrementAmount) || 0));
    };

    return {
        count,
        incrementCount,
        decrementCount,
        incrementAmount,
        setIncrementAmount,
        addAmount,
        addAsync
    };
};

export default useCounter;