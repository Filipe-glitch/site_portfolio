import React from "react";

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-linear-to-r from-[#01191d] to-[#022c2b]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
                    Sobre <span className="text-outline">Mim</span>
                </h2>

                <p className="text-gray-500 text-center mb-12">
                    Minha história, competências e paixão por tecnologia.
                </p>

                <div className="bg-[#022c2b] backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Quem sou eu?</h3>
                        <p className="text-slate-300 mb-4">
                            Sou estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento web, 
                            acessibilidade e criação de soluções de impacto real. Tenho experiência prática no 
                            desenvolvimento de aplicações com React, Tailwind CSS, Python e Java, atuando 
                            com disciplina, trabalho em equipe e boa resolução de problemas.
                        </p>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                            <div>
                                <p>Nome:</p>
                                <p className="font-medium text-white">Filipe</p>
                            </div>
                            <div>
                                <p>Email:</p>
                                <p className="font-medium text-white wrap-break-word">filipe.devrocha@gmail.com</p>
                            </div>
                            <div>
                                <p>Celular:</p>
                                <p className="font-medium text-white">+55 21 968757740</p>
                            </div>
                            <div>
                                <p>Disponibilidade:</p>
                                <p className="font-medium text-white">Disponível para Estágio</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;