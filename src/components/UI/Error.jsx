import Lottie from "lottie-react";
import forbiddenAnimation from '../../../public/lottieFiles/forbidden_access.json'
import noResultAnimation from '../../../public/lottieFiles/no_result.json'


const Error = ({ error }) => {
    return (
        <div className="h-[100vh] w-full flex flex-col gap-5 items-center justify-center">
            {
                error?.response?.status === 404 || error?.response?.status === 500
                    ? <Lottie className="w-40 md:w-70" animationData={noResultAnimation} />
                    : <Lottie className="w-40 md:w-70" animationData={forbiddenAnimation} />
            }
            {
                error?.response?.status
                    ? error?.response?.status === 403
                        ? <p className="text-3xl font-black">Forbidden Access!</p>
                        : error?.response?.status === 401
                            ? <p className="text-3xl font-black">Unauthorized Access!</p>
                            : error?.response?.status === 404
                                ? <p className="text-3xl font-black">Data not Found!</p>
                                : <p className="text-3xl font-black">Invalid Request!</p>
                    : <p className="text-3xl font-black">Something went wrong...</p>
            }
        </div>
    );
};

export default Error;