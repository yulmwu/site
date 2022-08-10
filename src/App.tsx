import React from 'react';
import create from 'zustand';

const useStore = create<Record<string, any>>((set) => ({
    count: 0,
    increment: (inc: number) => set((state) => ({ count: state.count + inc })),
    decrement: (dec: number) => set((state) => ({ count: state.count - dec })),
}));

const Button: React.FC<{ inc: number }> = (props: { inc: number }) => {
    const { increment: inc, decrement: dec } = useStore();

    const memoizedIncrement = React.useCallback(() => inc(props.inc), [inc]);
    const memoizedDecrement = React.useCallback(() => dec(props.inc), [dec]);

    return (
        <div className="inline-block bg-transparent">
            <button className="pr-2 text-5xl" onClick={memoizedIncrement}>
                +
            </button>
            <button className="pl-2 text-5xl" onClick={memoizedDecrement}>
                -
            </button>
        </div>
    );
};

const App: React.FC<{ inc: number }> = (props: { inc: number }) => (
    <div className="flex flex-col content-center justify-center text-center h-screen bg-transparent text-white">
        <p className="text-9xl bg-transparent text-transparent text-stroke">
            {useStore().count}
        </p>

        <Button inc={props.inc} />
    </div>
);

export default App;
