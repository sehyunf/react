import { createContext, useState } from "react";

const ColorContext = createContext({
  state : { fontSize : "", color : "" },
  action : { setFontSize : () => {}, setColor : () => {}}
})

const ColorProvider = ({children}) => {
  const [fontSize, setFontSize] = useState("2rem");
  const [color, setColor] = useState("black");
  const value = {
    state : { fontSize, color },
    action : { setFontSize, setColor }
  }

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  )
}

const ColorConsumer = ColorContext.Consumer;

export {ColorContext, ColorProvider, ColorConsumer};