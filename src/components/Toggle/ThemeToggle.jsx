import { useEffect } from "react";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";
import useThemeContext from "../../custom_contexts/useThemeContext";

const ThemeToggle = () => {

    const { isDark, handleToggle } = useThemeContext()

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])


    return (
        <div className="mx-3">
            <label className="swap swap-rotate">
                <input type="checkbox" onChange={handleToggle} checked={isDark} />
                <SunIcon />
                <MoonIcon />
            </label>
        </div>
    );
};

export default ThemeToggle;