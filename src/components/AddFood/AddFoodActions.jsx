
const AddFoodActions = ({ activeSection, setActiveSection, isLoading }) => {
    return (
        <div className="flex justify-between border-t border-gray-200 pt-6">
            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault()
                    if (activeSection === "basic") return;
                    const sections = ["basic", "nutrition", "ingredients", "preview"];
                    const currentIndex = sections.indexOf(activeSection);
                    setActiveSection(sections[currentIndex - 1]);
                }}
                disabled={activeSection === "basic"}
                className={`px-6 py-2 rounded-lg cursor-pointer font-medium ${activeSection === "basic" ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'border border-gray-300 hover:bg-gray-700 hover:text-white transition duration-300'}`}
            >
                Previous
            </button>

            <button
                type="submit"
                className="cursor-pointer px-6 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
            >
                {
                    activeSection === "preview"
                        ? isLoading
                            ? <span className="loading loading-spinner loading-md"></span>
                            : "Add"
                        : "Next"
                }
            </button>
        </div>
    );
};

export default AddFoodActions;