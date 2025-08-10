import { useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ThemesProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
            ? true
            : false;
    })

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark"
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.theme = "light"
        }
    }, [isDark])


    const handleToggle = () => {
        setIsDark(!isDark)
    }


    const themeData = {
        isDark,
        setIsDark,
        handleToggle
    }

    return (
        <ThemeContext value={themeData}>
            {children}
        </ThemeContext>
    );
};
export default ThemesProvider;
