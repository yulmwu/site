import PropsBase from './index';

import React from 'react';
import { Theme, ThemeContext } from '../context/theme';

interface Props extends Partial<PropsBase> {
    children: React.ReactNode;
    className?: string;
}

const Center: React.FC<Props> = (props) => {
    const { toggle } = React.useContext(ThemeContext) as Theme;

    return (
        <div
            className={`flex flex-col content-center justify-center text-center h-screen bg-transparent ${
                toggle ? 'text-white' : 'text-gray-800'
            } ${props.className ?? ''}`}
        >
            {props.children}
        </div>
    );
};

export default Center;
