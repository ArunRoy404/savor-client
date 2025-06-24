import Lottie from "lottie-react";
import noResultAnimation from '../../lottieFiles/no_result.json'

const NoResultFound = () => {
    return (
        <div className='p-5 mt-10 col-span-3 flex flex-col items-center justify-center'>
            <Lottie className='w-50 md:w-100' animationData={noResultAnimation} />
            <p className='text-xl mt-5 font-medium'>No results found!</p>
        </div>
    );
};

export default NoResultFound;