import React from 'react'
import { portfolioItems } from '../data/data';

const Portfolio = () => {
    return (
        <section id='portfolio' className='py-20 px-6 bg-linear-to-r from-[#022c2b] to-[#01191d]'>
            <div className='container mx-auto'>
                <h2 className='text-3xl text-gray-300 font-bold text-center mb-2'>
                    Meu <span className='text-outline'>Portfólio</span>
                </h2>
                <p className='text-slate-300 text-center mx-auto mb-12 text-sm'>
                    Alguns dos meus principais projetos em desenvolvimento e tecnologia
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        portfolioItems.map((item, index) => (
                            <div key={index} className='bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 
                            hover:-translate-y-1 transition-transform'>
                                <div className='h-48 overflow-hidden bg-black/30 flex items-center justify-center'>
                                    <img src={item.image} className='w-full h-full object-contain transition-transform hover:scale-105' alt='' />
                                </div>
                                <div className='p-5'>
                                    <h3 className='font-semibold text-lg text-white'>{item.title}</h3>
                                    <p className='text-slate-400 mt-2'>{item.category}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;