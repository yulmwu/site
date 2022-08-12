import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Background from './components/Background';

import * as Utilitiy from './utils';

import { ThemeProvider } from '../context/theme';

import '../global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <Background />
            <div className="absolute top-0 left-0 w-full bg-transparent select-none">
                <App inc={1} toggleButton />
                <App inc={5} />
                <App inc={10} />
                <Utilitiy.Center>
                    <Utilitiy.Text className="text-2xl sm:text-3xl">
                        <a href="https://github.com/tsukiroku/tsukiroku.github.io">
                            GITHUB
                        </a>
                    </Utilitiy.Text>
                </Utilitiy.Center>
            </div>
        </ThemeProvider>
    </React.StrictMode>
);
