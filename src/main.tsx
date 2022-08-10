import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Background from './components/background';
import '../global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <div className="fixed">
            <Background />
        </div>
        <div className="absolute top-0 left-0 w-full bg-transparent select-none">
            <App inc={1} />
            <App inc={5} />
            <App inc={10} />
        </div>
    </React.StrictMode>
);
