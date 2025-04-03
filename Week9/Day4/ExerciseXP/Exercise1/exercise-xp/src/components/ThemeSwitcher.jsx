import { createContext, useState } from 'react';
import DisplayThemeSwitcher from './DisplayThemeSwitcher';

export const ThemeContext = createContext();

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("light");

    const changeTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }
  
    return (
      <>
        <ThemeContext.Provider value={{theme, changeTheme, title: "Switch the theme ;)"}}>
          <DisplayThemeSwitcher/>
        </ThemeContext.Provider>
      </>
    )
};

export default ThemeSwitcher;