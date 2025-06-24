import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <section className="relative py-30 bg-fixed bg-[url('https://images.unsplash.com/photo-1505935428862-770b6f24f629?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGZvb2R8ZW58MHx8MHx8fDA%3D')]">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        What Our <span className="text-amber-500">Users</span> Say
                    </h2>
                    <p className="text-lg font-bold text-white opacity-70 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied users
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <TestimonialCard
                        quote="The food quality is consistently excellent, and the delivery is always on time. My go-to platform for office lunches!"
                        author="Sarah Johnson"
                        role="Marketing Director"
                        rating={5}
                        avatar="https://randomuser.me/api/portraits/women/44.jpg"
                    />

                    {/* Testimonial 2 */}
                    <TestimonialCard
                        quote="As a home chef, this platform has helped me grow my small business beyond expectations. Highly recommended!"
                        author="Michael Chen"
                        role="Home Chef"
                        rating={4}
                        avatar="https://randomuser.me/api/portraits/men/32.jpg"
                    />

                    {/* Testimonial 3 */}
                    <TestimonialCard
                        quote="Discovering unique home-cooked meals in my area has been a game changer. The variety is amazing!"
                        author="David Miller"
                        role="Food Enthusiast"
                        rating={5}
                        avatar="https://randomuser.me/api/portraits/men/75.jpg"
                    />
                </div>
            </div>
        </section>
    );
};


export default Testimonials;