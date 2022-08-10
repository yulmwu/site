import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Background from './components/background';
import '../global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <div className="relative">
            <Background />
        </div>
        <div className="absolute top-0 left-0 w-full bg-transparent">
            <App />
        </div>
    </React.StrictMode>
);
