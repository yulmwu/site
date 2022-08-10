import React from 'react';

const useStore = (await import('zustand')).default<Record<string, any>>(
    (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
    })
);

const Button: React.FC = () => {
    const { increment, decrement } = useStore();

    const memoizedIncrement = React.useCallback(() => increment(), [increment]);
    const memoizedDecrement = React.useCallback(() => decrement(), [decrement]);

    return (
        <div className="inline-block">
            <button onClick={memoizedIncrement}>+</button>
            <button onClick={memoizedDecrement}>-</button>
        </div>
    );
};

const App: React.FC = () => (
    <div className="flex flex-col content-center justify-center text-center h-screen">
        <p className="text-5xl">{useStore().count}</p>
        <Button />
    </div>
);

export default App;
