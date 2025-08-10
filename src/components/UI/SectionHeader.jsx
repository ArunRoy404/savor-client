const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="max-w-4xl mx-auto text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">{title}</h2>
            {subtitle && (
                <p className="mt-3 text-gray-600 text-sm sm:text-base">{subtitle}</p>
            )}
        </div>
    );
};

export default SectionHeader;
