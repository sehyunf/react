import styled, { css } from "styled-components";
import { h1Bold } from '../../styles/common'

const variantCSS = {
  main : css`
    background-color: ${({theme}) => theme.PALLETE.primary["main"]};
  `,
  sub : css`
    background-color: ${({theme}) => theme.PALLETE.primary["sub"]};
  `,
  white : css`
    background-color: ${({theme}) => theme.PALLETE.primary["white"]};
  `,
}

const fontCSS = {
  h1 : h1Bold
}

const colorCSS = {
  primary : css`
    color : ${({theme}) => theme.PALLETE.primary["main"]};
  `,
  white : css`
    color : ${({theme}) => theme.PALLETE.white};
  `,
}

const sizeCSS = {
  small : css`
    width: 64px;
    height: 48px;
    padding: 16px 0;
  `,
  miduim : css`
    width: 80px;
    height: 50px;
    padding: 16px 0;
  `,
  large : css`
    width: 100px;
    height: 100px;
    padding: 16px 0;
  `,
  full : css`
    width: 100%;
    aspect-ratio: 8 / 1;
    padding: 16px 0;
  `,
}
const Button = styled.button`
  ${({variant}) => variantCSS[variant]}
  ${({font}) => fontCSS[font]}
  ${({color}) => colorCSS[color]}
  ${({size}) => sizeCSS[size]}
  

`

export default Button