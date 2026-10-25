import React, { Fragment, useEffect, useState } from 'react';
import { navItems } from '../data/data';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = 'home';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.id;
                }
            });
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Fragment>
            <nav className='fixed bg-black/30 top-0 w-full py-3 z-50 backdrop-blur-md border-b border-white/20 px-3 transition-all'>
                <div className='container mx-auto flex items-center justify-between px-6'>
                    <div
                        onClick={() => scrollToSection('home')}
                        className='text-2xl text-outline font-bold cursor-pointer hover:opacity-80 transition-opacity'>Filipe.dev
                    </div>

                    <ul className='hidden md:flex space-x-8 text-white text-sm font-light uppercase'>
                        {
                            navItems.map((item) => (
                                <li key={item.id} onClick={() => scrollToSection(item.id)}
                                    className={`hover:text-teal-400 cursor-pointer transition-colors ${activeSection === item.id ? "text-teal-400 font-normal border-b-2 border-teal-400 pb-0.5" : ""}`}>
                                    {item.label}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;