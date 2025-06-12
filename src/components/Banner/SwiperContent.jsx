import { MdOutlineStar } from "react-icons/md";

const SwiperContent = ({isActive, title, subtitle, testimonial}) => {
    return (
        <div className={`
            ${isActive ?'delay-700':'-translate-x-[70%] opacity-0'}
        transition absolute duration-500 text-left left-5 md:top-20 xl:left-20`
        }>
            <h1 className="font-bold md:text-4xl">{title}</h1>
            <p className="font-semibold text-sm text-gray400">{subtitle}</p>
            <div className="bg-black h-1 w-20 mt-3 md:mt-5"></div>

            <div className="flex items-center text-sm md:text-lg space-x-1 mt-1 font-medium">
                <p>5k+ Rating</p>
                <div className="bg-black h-[2px] w-20"></div>
                <p className="flex items-center"><MdOutlineStar color="orange" size={24} />{testimonial.rating}</p>
            </div>
        </div>
    );
};

export default SwiperContent;