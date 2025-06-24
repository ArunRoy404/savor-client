import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from "react-icons/io5";

const FooterNew = () => {

    const NewsletterForm = () => {
        const [email, setEmail] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            setEmail('');
        };

        return (
            <form onSubmit={handleSubmit} className="flex">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-gray-700 text-white focus:outline-none"
                    required
                />
                <button
                    type="submit"
                    className="bg-[#ff5e15] text-white px-6 py-2  font-medium hover:bg-[#e04e0d] transition-colors duration-300"
                >
                    <IoMailOutline />
                </button>
            </form>
        );
    };

    const NavLinks = () => (
        <div className="mt-10 flex space-x-10 max-w-max mx-auto">
            <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#222222] transition-all duration-300"
                aria-label="Facebook"
            >
                <FaFacebookF />
            </a>
            <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#222222] transition-all duration-300"
                aria-label="Twitter"
            >
                <FaTwitter />
            </a>
            <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#222222] transition-all duration-300"
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>
            <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#222222] transition-all duration-300"
                aria-label="LinkedIn"
            >
                <FaLinkedinIn />
            </a>
        </div>
    )

    return (
        <footer className="bg-slate-800 text-white font-semibold pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex flex-col items-center text-center mx-auto mb-10">
                    <div className="space-y-6 max-w-150">
                        <div className='mx-auto max-w-max -translate-x-3'>
                            <Logo />
                        </div>

                        <p className="mt-4 text-md opacity-80 leading-relaxed">
                            We are Savor Restaurant, and we're passionate about serving delicious food made with the finest ingredients.
                        </p>
                    </div>


                    {/* Newsletter Column */}
                    <div className='mt-10'>
                        <h4 className="text-xl font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 border-b-3 mx-auto max-w-max border-[#ff5e15] mb-6">
                            Newsletter
                        </h4>
                        <NewsletterForm />
                    </div>

                    <div>
                        <NavLinks />
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-gray-900 py-5">
                <div className="flex flex-col gap-2 md:flex-row justify-around px-4 sm:px-6 lg:px-8 text-center">
                    <p className=" text-sm">
                        &copy; {new Date().getFullYear()} Savor. All Rights Reserved.
                    </p>
                    <p className='text-sm'>
                        Phone: (415) 124-5678 | support@savor.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterNew;