import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as Components from './components'
import { ThemeProvider } from './context/theme'

import '../global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <Components.Background.default />
            <div className='absolute top-0 left-0 w-full bg-transparent select-none'>
                <Components.Center.default>
                    <Components.Text.default className='text-4xl sm:text-6xl' stroke>
                        다람쥐 헌 쳇바퀴에 타고파
                    </Components.Text.default>
                </Components.Center.default>

                <App inc={1} toggleButton />
                <App inc={5} />
                <App inc={10} />

                <Components.Center.default>
                    <Components.Text.default className='text-2xl sm:text-3xl'>
                        <a href='https://github.com/ky0422/ky0422.github.io'>GITHUB</a>
                    </Components.Text.default>

                    <Components.Text.default className='text-2xl sm:text-3xl'>
                        <a href='https://ky0422.tistory.com'>TISTORY</a>
                    </Components.Text.default>
                </Components.Center.default>
            </div>
        </ThemeProvider>
    </React.StrictMode>
)
