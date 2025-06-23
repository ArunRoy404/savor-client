import Lottie from "lottie-react";
import forbiddenAnimation from '../../../public/lottieFiles/forbidden_access.json'


const Error = ({ error }) => {
    console.log(error.response.status);
    return (
        <div className="h-[100vh] w-full flex flex-col gap-10 items-center justify-center">
            <Lottie animationData={forbiddenAnimation} />
            {
                error?.response?.status
                    ? error?.response?.status === 403
                        ? <p className="text-3xl font-black">Forbidden Access!</p>
                        : <p className="text-3xl font-black">Unauthorized Access!</p>
                    : <p className="text-3xl font-black">Something went wrong...</p>
            }
        </div>
    );
};

export default Error;