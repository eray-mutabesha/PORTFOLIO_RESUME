import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ParticleBackground from './components/ParticleBackground.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sz:380,
      sv: 460,
      ss: 550,
      sm: 760,
      md: 910,  // Personnalisation du breakpoint md
      lg: 1200,
      xl: 1536,
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
     <ThemeProvider theme={theme}>
     <App />
     {/* </ThemeProvider> */}
    <ParticleBackground />
    
  </React.StrictMode>,
)
