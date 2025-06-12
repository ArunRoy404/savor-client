const SwiperImage = ({isActive, image}) => {
    return (
        <div
            className={`${isActive ? 'delay-500 rotate-90 ' : 'translate-y-[80%] opacity-0'} 
            md:w-80 xl:w-[400px] top-25 md:top-50 xl:top-8 transition duration-500  absolute left-[50%] -translate-x-[50%] `}>
            <img src={image} alt="" />
        </div>
    );
};

export default SwiperImage;