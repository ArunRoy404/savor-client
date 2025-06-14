import { useEffect, useState } from "react";
import { getTheme, setTheme } from "../utilities/themeLocalStorage";
import ThemeContext from "../contexts/ThemeContext";

const ThemesProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false)


    useEffect(() => {
        const theme = getTheme()
        if (theme === 'dark') {
            setIsDark(true)
        }
    }, [])

    useEffect(() => {
        if (isDark) {
            setTheme('dark')
        } else {
            setTheme('light')
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
