import { styled } from "styled-components";
import { flexCenter, h1Bold } from "../../styles/common";
import { fadeIn } from "../../keyframes/keyframes";

const S = {};

S.StyledP = styled.p`
  font-size : 20px;
`

S.StyledStrong = styled.strong`
  font-size : 20px;
  border-bottom : solid 1px black;
  text-decoration : underline;
  letter-spacing : 20px;
`

S.Style04 = styled.div`
  width : 100px;
  height : 100px;
  border : solid 1px black;
  background-color : ${({backgroundColor}) => backgroundColor};
`

S.Input = styled.input`
  width : ${({width}) => width};
  height :${({height}) => height};
`
// S.Styled = styled.div`
//   width: 100px;
//   height: 100px;
//   border: solid 1px #333;
// `
S.Container = styled.div`
  width : 500px;
  height : 500px;
  border : solid 1px black;
  ${flexCenter}
` 

S.Box = styled.div`
  width : 100px;
  height : 100px;
  background-color: orange;
` 

S.TextBox = styled.div`
  width : 200px;
  height : 200px;
  border:solid 1px #333;
  ${flexCenter}
`
S.P = styled.p`
  font-size : 16px;
  animation: ${fadeIn} 3s forwards;      
  /* @media screen and (min-width: 0) and (max-width: 1920px){ } */
`
S.H1 = styled.h1`
  ${h1Bold}
`
export default S;