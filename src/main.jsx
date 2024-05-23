import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components/styles/page.css'
import './components/styles/cards.css'
import './components/styles/mobile.css'
import'./components/styles/responsive.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
