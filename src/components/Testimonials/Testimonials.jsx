import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <section className="relative py-10 md:py-20 bg-gradient-to-b from-[#f5ebfe] via-white to-[#f5ebfe]`">
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-12 px-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold "> What Our <span className="text-amber-500">Users</span> Say</h2>
                    <p className="mt-3 text-sm sm:text-base">Don't just take our word for it - hear from our satisfied users</p>
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