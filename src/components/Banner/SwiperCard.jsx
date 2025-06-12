import SwiperImage from "./SwiperImage";
import SwiperContent from "./SwiperContent";
import SwiperTestimonial from "./SwiperTestimonial";
import {  useEffect, useState } from "react";

const SwiperCard = ({ data, activeIndex }) => {
    const [isActive, setIsActive] = useState(false)
    const { image, title, subtitle, testimonial } = data

    useEffect(() => {
        setIsActive(data.id === activeIndex)

        if (data.id === activeIndex) {
            setTimeout(() => {
                setIsActive(false)
            }, 4500);
        }
    }, [activeIndex, data.id])


    return (
        <div className=" h-full w-full relative">
            <SwiperContent isActive={isActive} title={title} subtitle={subtitle} testimonial={testimonial} />
            <SwiperTestimonial isActive={isActive} testimonial={testimonial} />
            <SwiperImage isActive={isActive} image={image} />
        </div>
    )
};

export default SwiperCard;