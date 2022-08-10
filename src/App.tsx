import React from 'react';
import create from 'zustand';

const useStore = create<Record<string, any>>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

const Button: React.FC = () => {
    const { increment, decrement } = useStore();

    const memoizedIncrement = React.useCallback(() => increment(), [increment]);
    const memoizedDecrement = React.useCallback(() => decrement(), [decrement]);

    return (
        <div className="inline-block bg-transparent">
            <button className="pr-2" onClick={memoizedIncrement}>+</button>
            <button className="pl-2" onClick={memoizedDecrement}>-</button>
        </div>
    );
};

const App: React.FC = () => (
    <div className="flex flex-col content-center justify-center text-center h-screen bg-transparent text-white">
        <p className="text-9xl bg-transparent text-transparent text-stroke">{useStore().count}</p>

        <Button />
    </div>
);

export default App;
