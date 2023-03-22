import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {RecoilRoot} from "recoil";
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<BrowserRouter>*/}
          <RecoilRoot>
            <App />
          </RecoilRoot>
      {/*</BrowserRouter>*/}
  </React.StrictMode>,
)
serviceWorkerRegistration.register();