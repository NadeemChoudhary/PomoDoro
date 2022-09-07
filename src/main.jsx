import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import StateProvider from './component/Tags/StateProvider'

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
   html,body{
      background-color: ${(props) => props.theme.colors.bg} ;
      font-size: 64.5%;
    }
    body{
      font-size: 1.5rem;
    }
  `
const theme = {
  colors: {
    primary: '#f85e04',
    secondary: '#180030',
    bg: '#220045',
  }
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
)
