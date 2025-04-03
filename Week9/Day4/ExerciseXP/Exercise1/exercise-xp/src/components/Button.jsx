import { useContext } from "react";
import { ThemeContext } from "./ThemeSwitcher";

const Button = () => {
    const {changeTheme} = useContext(ThemeContext);

    return (
        <>
            <button type="button" onClick={changeTheme}>Press!</button>
        </>
    );
};

export default Button;