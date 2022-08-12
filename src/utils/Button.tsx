import PropsBase from './index';

import React from 'react';

interface Props extends Partial<PropsBase> {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    fontSize?: number | string;
}

const Button: React.FC<Props> = (props) => (
    <button
        className={`pr-2 pl-2 ${props.fontSize} focus:outline-none ${
            props.className ?? ''
        }`}
        onClick={props.onClick}
    >
        {props.children}
    </button>
);

export default Button;
