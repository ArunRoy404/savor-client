import ThemesProvider from "../context_providers/ThemesProvider";

const ProviderContainer = ({ children }) => {
    return (
        <ThemesProvider>
            {children}
        </ThemesProvider>
    )
};

export default ProviderContainer;