import AuthProvider from "../context_providers/AuthProvider";
import ThemesProvider from "../context_providers/ThemesProvider";
import QueryProvider from "../query_provider/QueryProvider";

const ProviderContainer = ({ children }) => {
    return (
        <ThemesProvider>
            <AuthProvider>
                    <QueryProvider>
                        {children}
                    </QueryProvider>
            </AuthProvider>
        </ThemesProvider>
    )
};

export default ProviderContainer;