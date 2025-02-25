import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'SUIT-Regular';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Bold.otf) format('opentype');
    font-weight: normal;
    font-style: 100;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/Pretendard-Regular.otf) format('opentype');
    font-weight: 400;
    font-style: normal;
  }
p {
  font-family: 'SUIT-Regular';
  font-weight: 700;
}

body {
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
  
}
`



export default GlobalStyle;