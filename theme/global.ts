import { createGlobalStyle } from "styled-components"
import { color } from "./colors"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px for tablet screens
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px for mobile screens
    }
  }

  body {
    font: 400 1rem "proxima-nova", sans-serif;
    background-color: ${color.gray[100]};
    color: ${color.gray[400]};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
