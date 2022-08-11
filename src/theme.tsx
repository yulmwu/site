import React from 'react';

export interface Theme {
    toggle: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = React.createContext<Theme | null>(null);

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
    const [toggle, setToggle] = React.useState(
        window.localStorage.getItem('theme') === 'true'
    );

    const toggleTheme = () => {
        window.localStorage.setItem('theme', `${!toggle}`);

        setToggle(!toggle);
    };

    return (
        <ThemeContext.Provider value={{ toggle, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
