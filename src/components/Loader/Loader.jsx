import Lottie from "lottie-react";
import loadingAnimation from '../../lottieFiles/loader.json'

const Loader = () => {
    return (
        <div className="h-[100vh] w-full flex items-center justify-center">
            <Lottie className='w-30 md:w-50' animationData={loadingAnimation} />
        </div>
    );
};

export default Loader;