import AuthProvider from "../context_providers/AuthProvider";
import ThemesProvider from "../context_providers/ThemesProvider";

const ProviderContainer = ({ children }) => {
    return (
        <ThemesProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ThemesProvider>
    )
};

export default ProviderContainer;