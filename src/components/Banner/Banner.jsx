import Button from '../UI/Button';
import BannerSwiper from './BannerSwiper';

const Banner = () => {
    return (
        <div className='container mt-10 md:mt-10 mb-32 mx-auto'>
            <div className='text-center'>
                <h1 className='text-4xl md:text-6xl 2xl:text-7xl font-semibold xl:font-normal mb-3 md:mb-6'>Savor the Flavor</h1>
                <p className='text-sm md:text-lg mb-3 font-semibold'>Where Every Bite Tells a Story – Experience Culinary Excellence</p>

                {/* Explore Button -> all foods  */}
                <Button
                    to={'/all-foods'}
                >
                    Explore
                </Button>
            </div>
            <BannerSwiper />
        </div>
    );
};

export default Banner;