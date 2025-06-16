import AuthProvider from "../context_providers/AuthProvider";
import DatabaseProvider from "../context_providers/DatabaseProvider";
import ThemesProvider from "../context_providers/ThemesProvider";
import QueryProvider from "../query_provider/QueryProvider";

const ProviderContainer = ({ children }) => {
    return (
        <ThemesProvider>
            <AuthProvider>
                <DatabaseProvider>
                    <QueryProvider>
                        {children}
                    </QueryProvider>
                </DatabaseProvider>
            </AuthProvider>
        </ThemesProvider>
    )
};

export default ProviderContainer;