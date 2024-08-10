/* eslint-disable no-unused-vars */

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <AuthProvider>
     <div className="dark:bg-slate-900 dark:text-white bg-white text-gray-900">
        <App />
      </div>
     </AuthProvider>
  </BrowserRouter>
    
 
)
