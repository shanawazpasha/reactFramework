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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '300px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <button aria-label="Increment value" onClick={incrementCount}>
                    +
                </button>
                <span style={{ fontSize: '24px', minWidth: '40px', textAlign: 'center' }}>{count}</span>
                <button aria-label="Decrement value" onClick={decrementCount}>
                    -
                </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <input
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                    style={{ padding: '8px', fontSize: '16px', textAlign: 'center' }}
                />
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={addAmount}>Add Amount</button>
                    <button onClick={addAsync}>Add Async</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
