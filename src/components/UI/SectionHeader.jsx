import useThemeContext from "../../custom_contexts/useThemeContext";

const SectionHeader = ({ title, subtitle }) => {
    const { isDark } = useThemeContext()
    return (
        <div className="max-w-4xl mx-auto text-center mb-12 px-4">
            <h2 className={`text-3xl sm:text-4xl font-extrabold  ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{title}</h2>
            {subtitle && (
                <p className={`mt-3 ${isDark ? 'text-gray-300' : 'text-gray-600' }  text-sm sm:text-base`}>{subtitle}</p>
            )}
        </div>
    );
};

export default SectionHeader;
