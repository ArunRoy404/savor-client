
const PageTitle = ({title, subtitle}) => {
    return (
        <div
            className='mt-10 p-5 relative w-full h-50 md:h-70 mx-auto bg-no-repeat bg-center bg-cover rounded-2xl overflow-hidden'
            style={{ backgroundImage: "url('/food_bg.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative w-full h-full flex items-center text-center justify-center text-white">
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold opacity-90">{title}</h1>
                    <p className="font-semibold text-sm mt-4 opacity-60">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;