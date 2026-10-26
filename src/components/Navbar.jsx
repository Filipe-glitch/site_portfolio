import React, { Fragment, useEffect, useState } from 'react';
import { navItems } from '../data/data';
import menuIcon from '../assets/menu.png';
import closeIcon from '../assets/close.png';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen])

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <Fragment>
            <nav className='fixed bg-black/30 top-0 w-full py-3 z-50 backdrop-blur-md border-b border-white/20 px-3 transition-all'>
                <div className='container mx-auto flex items-center justify-between px-6'>
                    <div
                        onClick={() => scrollToSection('home')}
                        className='text-2xl text-outline font-bold cursor-pointer hover:opacity-80 transition-opacity'>Filipe.dev
                    </div>

                    <ul className='hidden md:flex space-x-8 text-white text-sm font-light uppercase tracking-wider'>
                        {
                            navItems.map((item) => (
                                <li key={item.id} onClick={() => scrollToSection(item.id)}
                                    className={`hover:text-teal-400 cursor-pointer transition-colors ${activeSection === item.id ? "text-teal-400 font-normal border-b-2 border-teal-400 pb-0.5" : "text-slate-300 hover:text-teal-400"}`}>
                                    {item.label}
                                </li>
                            ))
                        }
                    </ul>

                    {/* Botão do Menu Mobile */}
                    <div className='md:hidden flex items-center'>
                        <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none p-1 cursor-pointer' aria-label='Menu'>
                            <img src={isOpen ? closeIcon : menuIcon} alt='Menu Toggle' className='w-7 h-7 object-contain filter invert' />
                        </button>
                    </div>
                </div>

                {/* Dropdown do menu mobile */ }
                {isOpen && (
                    <div className='absolute top-full left-0 w-full bg-[#01191d]/95 backdrop-blur-lg border-b border-white/10 py-6 px-6 md:hidden shadow-xl transition-all'>
                        <ul className='flex flex-col space-y-4 text-white text-base font-medium uppercase tracking-wider text-center'>
                            {
                                navItems.map((item) => (
                                    <li key={item.id} onClick={() => scrollToSection(item.id)} className={`cursor-pointer py-2 transition-colors ${activeSection === item.id ? "text-teal-400 font-bold" : "text-slate-300 hover:text-teal-400"}`}>
                                        {item.label}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </nav>
        </Fragment>
    );
};

export default Navbar;