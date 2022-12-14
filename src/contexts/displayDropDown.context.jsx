import { createContext, useState } from "react";

export const DisplayDropdownContext = createContext({
     displayDrowpdown: false,
     setDisplayDrowpdown: () => null,
})

export const DisplayDropdownProvider = ({ children }) => {
     const [displayDrowpdown, setDisplayDrowpdown] = useState(true)
     const value = {displayDrowpdown, setDisplayDrowpdown}
     return <DisplayDropdownContext.Provider value={value}>{children}</DisplayDropdownContext.Provider>
}