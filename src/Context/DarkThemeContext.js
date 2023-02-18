import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(false);

    const themeInfo = {
        mode,
        setMode,
    };
    return <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>;
};
