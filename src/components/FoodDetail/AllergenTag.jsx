const AllergenTag = ({children}) => {
    return (
        <span
            className="text-xs font-medium px-3 py-1 rounded-full bg-red-100 text-red-600"
        >
            Contains: {children}
        </span>
    );
};

export default AllergenTag;