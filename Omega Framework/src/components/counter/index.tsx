import useCounter from '../../hooks/useCounter';

const Counter = () => {
    const {
        count,
        incrementCount,
        decrementCount,
        incrementAmount,
        setIncrementAmount,
        addAmount,
        addAsync
    } = useCounter();

    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={incrementCount}>
                    +
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={decrementCount}>
                    -
                </button>
            </div>
            <div>
                <input
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button onClick={addAmount}>Add Amount</button>
                <button onClick={addAsync}>Add Async</button>
            </div>
        </div>
    );
};

export default Counter;
