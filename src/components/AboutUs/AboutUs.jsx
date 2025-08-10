import { FaUtensils, FaUsers, FaHeart, FaChartLine } from "react-icons/fa";
import CountUp from 'react-countup';
import useThemeContext from "../../custom_contexts/useThemeContext";

const AboutUs = () => {

    const { isDark } = useThemeContext()

    const StatCard = ({ icon, value, suffix, label }) => (
        <div className={`${isDark ? 'bg-gray-600' : 'bg-white'} p-6 rounded-lg text-center`}>
            <div className="text-3xl mb-2 flex justify-center">{icon}</div>
            <p className="text-2xl font-bold">
                <CountUp duration={3} enableScrollSpy={true} end={value} />{suffix}
            </p>
            <p className="opacity-70">{label}</p>
        </div>
    );

    return (
        <section className={`relative py-20 ${isDark ? 'bg-accent' : 'bg-gradient-to-b from-white to-[#f5ebfe]'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-12 px-4">
                    <h2 className={`text-3xl sm:text-4xl font-extrabold ${isDark ? 'text-gray-300' : ' text-gray-800'}`}>About <span className="text-orange-400">Savor</span></h2>
                    <p className={`mt-3 ${isDark ? 'text-gray-300' : 'text-gray-600' }  text-sm sm:text-base`}>The platform where food lovers and creators connect</p>
                </div>


                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <StatCard
                        icon={<FaUtensils className="text-blue-500" />}
                        value={10000}
                        suffix={'+'}
                        label="Food Items"
                    />
                    <StatCard
                        icon={<FaUsers className="text-green-500" />}
                        value={5000}
                        suffix={'+'}
                        label="Active Users"
                    />
                    <StatCard
                        icon={<FaHeart className="text-red-500" />}
                        value={98}
                        suffix={'%'}
                        label="Satisfaction Rate"
                    />
                    <StatCard
                        icon={<FaChartLine className="text-yellow-500" />}
                        value={2000}
                        suffix={'K+'}
                        label="Orders Served"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;