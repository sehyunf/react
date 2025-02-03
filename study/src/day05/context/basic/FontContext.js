import { createContext, useState } from "react";

// const FontContext = createContext({
//   fontSize : "2rem",
//   fontMeight : 500,
//   color : "blue"
// })

const FontContext = createContext({
  state : { fontSize : "", fontColor : "" },
  action : { setFontSize : () => {}, setFontColor : () => {}}
})

const FontSizeProvider = ({children}) => {
  const [fontSize, setFontSize] = useState("2rem");
  const [fontColor, setFontColor] = useState("black");
  const value = {
    state : { fontSize , fontColor},
    action : { setFontSize, setFontColor }
  }

  return (
    <FontContext.Provider value={value}>
      {children}
    </FontContext.Provider>
  )
}

const FontSizeConsumer = FontContext.Consumer;

export {FontContext, FontSizeProvider, FontSizeConsumer};