import React, { useState } from 'react'
import { ImGithub } from 'react-icons/im'
import { IoLocationSharp } from 'react-icons/io5'
import { LiaLinkedin } from 'react-icons/lia'
import { MdEmail } from 'react-icons/md'
import { PiPhone } from 'react-icons/pi'

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Enviando...");

        const formData = new FormData(event.target);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Mensagem enviada com sucesso!");
                event.target.reset(); 
                setTimeout(() => setResult(""), 5000);
            } 
            else {
                setResult(data.message || "Ocorreu um erro ao enviar.");
            }
        } 
        catch (error) {
            setResult("Erro de conexão. Tente novamente.");
        } 
        finally {
            setIsSubmitting(false);
        }
    }
    return (
        <section id='contact' className="py-20 px-6 bg-linear-to-r from-[#01191d] to-[#022c2b]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
                    Entre em <span className="text-outline">Contato</span>
                </h2>

                <p className="text-gray-500 text-center mb-12">
                    Vamos conversar sobre tecnologia, ideias ou novos projetos?
                </p>

                <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20'>
                    <div>
                        <h3 className='text-xl font-semibold mb-6 text-white'>Contatos</h3>
                        <div className='space-y-6'>
                            <div className='flex items-start'>
                                <div className='p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20'>
                                    <IoLocationSharp className='text-white' />
                                </div>
                                <div>
                                    <h4 className='text-white font-semibold'>Local</h4>
                                    <p className='text-slate-300'>Rio de Janeiro, Brasil</p>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20'>
                                    <MdEmail className='text-white' />
                                </div>
                                <div>
                                    <h4 className='text-white font-semibold'>E-mail</h4>
                                    <p className='text-slate-300'>filipe.devrocha@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20'>
                                    <PiPhone className='text-white' />
                                </div>
                                <div>
                                    <h4 className='text-white font-semibold'>Celular</h4>
                                    <p className='text-slate-300'>+55 21 968757740</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h4 className='font-semibold mb-4 text-white'>Acompanhe meus projetos</h4>
                            <div className='flex gap-4'>
                                <a href='https://github.com/Filipe-glitch' target='_black' rel='noopener noreferrer'
                                className='p-3.5 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-teal-500 text-white border border-white/20 transition-all duration-300 hover:scale-110 cursor-pointer 
                                shadow-lg shadow-teal-500/10 flex items-center justify-center'
                                aria-label='GitHub'>
                                    <ImGithub size={40} />
                                </a>

                                <a href='https://www.linkedin.com/in/filipe-rocha-tech/' target='_black' rel='noopener noreferrer' 
                                className='p-3.5 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-teal-500 text-white border border-white/20 transition-all duration-300 hover:scale-110 cursor-pointer 
                                shadow-lg shadow-teal-500/10 flex items-center justify-center'
                                aria-label='LinkedIn'>
                                    <LiaLinkedin size={40} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold mb-6 text-white'>Me envie uma mensagem</h3>
                        {/* Formulário integrado com o Web3Forms */}
                        <form onSubmit={onSubmit} className='space-y-6'>
                            <input type="hidden" name="access_key" value="ccde4cb5-5977-4f4e-b0a3-262ba22702e7" />
                            <div>
                                <label className='block mb-2 text-sm text-slate-300'>Seu nome</label>
                                <input type='text' name="name" required className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-white focus:ring-3 focus:ring-teal-400' />
                            </div>

                            <div>
                                <label className='block mb-2 text-sm text-slate-300'>Seu Email</label>
                                <input type='email' name="email" required className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-white focus:ring-3 focus:ring-teal-400' />
                            </div>

                            <div>
                                <label className='block mb-2 text-sm text-slate-300'>Assunto</label>
                                <input type='text' name="subject" required className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-white focus:ring-3 focus:ring-teal-400' />
                            </div>

                            <div>
                                <label className='block mb-2 text-sm text-slate-300'>Mensagem</label>
                                <textarea name="message" rows="4" required className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-white focus:ring-3 focus:ring-teal-400' />
                            </div>

                            <button type="submit" disabled={isSubmitting} className='px-6 py-2.5 cursor-pointer rounded-full bg-linear-to-r from-teal-400 to-teal-700 text-white font-medium transition-all 
                            duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-teal-500/20 disabled:opacity-50 disabled:hover:scale-100'>{isSubmitting ? 'Enviando...' : 'Enviar email'}</button>

                            {/* Mensagem de feedback na tela */}
                            {result && (
                                <p className={`text-sm mt-2 font-medium ${result.includes('sucesso') ? 'text-teal-400' : 'text-red-400'}`}>
                                    {result}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact