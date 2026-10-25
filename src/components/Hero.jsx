import React, { Fragment } from 'react'
import AnimatedTitles from './utils/AnimatedTitles'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import { BsTwitter, BsWhatsapp } from 'react-icons/bs'

const Hero = () => {
    return (
        <Fragment>
            <section id="home" className='relative min-h-screen flex items-center justify-center pt-16 pb-20'>
                <div className="absolute inset-0 bg-[url('./assets/banner.jpeg')] bg-center bg-cover bg-no-repeat"></div>
                <div className='absolute inset-0'></div>

                {/* conteúdo */}
                <div className='relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center'>
                    <div className='flex-1 text-center md:text-left'>
                        <h3 className='text-lg font-light capitalize tracking-wide text-teal-500'>
                            Eu sou Filipe
                        </h3>
                        <AnimatedTitles />
                        <div className='mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400'>
                            <span className='px-4 py-2 bg-white/10 backdrop-blur-md rounded-full'>Machine Learning</span>
                            <span className='px-4 py-2 bg-white/10 backdrop-blur-md rounded-full'>Análise de Dados</span>
                            <span className='px-4 py-2 bg-white/10 backdrop-blur-md rounded-full'>UX/UI Design</span>
                        </div>                      
                        
                        <div className='mt-8 flex flex-col sm:flex-row gap-4'>
                            <button className='px-6 py-2 cursor-pointer text-sm rounded-full bg-linear-to-r from-teal-400 to-teal-700 font-light 
                            text-white hover:opacity-70 transition-opacity'>Veja meus projetos</button>

                            <button className='px-6 py-2 cursor-pointer text-sm rounded-full bg-white/10 backdrop-blur-md font-light 
                            text-white hover:opacity-70 transition-opacity'>Download CV</button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Hero