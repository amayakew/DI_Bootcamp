import { useContext } from "react";
import { ThemeContext } from "./ThemeSwitcher";
import Button from "./Button";
import './ThemeSwitcher.css'

const DisplayThemeSwitcher = () => {
    const {title, theme} = useContext(ThemeContext);

    return (
        <div className={theme}>
            <h1>{title}</h1>
            <Button/>
            <h4>Now theme is {theme}</h4>
        </div>
    );
};

export default DisplayThemeSwitcher;