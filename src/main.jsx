import React from 'react'
import ReactDOM from 'react-dom/client'
import { MenuProvider } from "./context/menuContext"
import App from './App.jsx'
import './index.css'
import './styles/style.css'
import './styles/company_name.css'
import './styles/home.css'
import './styles/footer.css'
import './styles/menu.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/menu-boxed.css' rel='stylesheet'/>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/close-r.css' rel='stylesheet'/>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/facebook.css' rel='stylesheet'/>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/youtube.css' rel='stylesheet'/>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/mail.css' rel='stylesheet'/>
    <MenuProvider>
      <App  />
    </MenuProvider>
  </React.StrictMode>,
)
