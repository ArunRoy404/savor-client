import Lottie from "lottie-react";
import loadingAnimation from '../../../public/lottieFiles/loader.json'

const Loader = () => {
    return (
        <div className="py-40 w-full flex items-center justify-center">
            <Lottie className='w-30 md:w-50' animationData={loadingAnimation} />
        </div>
    );
};

export default Loader;