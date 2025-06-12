import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

const SwiperTestimonial = ({ isActive, testimonial }) => {
    return (
        <div className={`
            ${isActive ?'delay-700':'translate-x-[70%] opacity-0'}
         transition absolute duration-500 text-left right-5 top-[360px] md:top-[600px] xl:top-[300px] xl:right-20 w-60 md:w-90`
        }>
            <div className="bg-black h-1 w-20"></div>
            <p className="font-semibold text-sm md:text-md">{testimonial.review}</p>
 
            <div className="flex items-center mt-4 space-x-2 font-medium">
                <FaRegUserCircle size={24}/>
                <p className="flex items-center">{testimonial.reviewer}</p>
                <div className="flex">
                    {
                        [...Array(5)].map((_,index)=><MdOutlineStar color="orange" key={index}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SwiperTestimonial;