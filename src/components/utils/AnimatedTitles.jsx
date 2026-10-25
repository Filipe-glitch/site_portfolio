import { useState, useEffect } from 'react';

const AnimatedTitles = () => {
    const roles = [
        { title: "Desenvolvedor Web" },
        { title: "Desenvolvedor de Software" },
        { title: "Suporte Técnico" },
    ];

    const [currentRoleIndex, setCurrIndex] = useState(0);
    const [currentText, setCurText] = useState('');
    const [isDeleting, setonIsDeleting] = useState(false);
    const [typingSpeed, setOnTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const current = roles[currentRoleIndex].title;
            if(!isDeleting){
                if(currentText === current){
                    setTimeout(()=>setonIsDeleting(true), 2000);
                    setOnTypingSpeed(500);
                }
                else{
                    setCurText(current.substring(0, currentText.length+1));
                    setOnTypingSpeed(150);
                }
            }
            else{
                if(currentText === ''){
                    setonIsDeleting(false);
                    setCurrIndex((prev)=>(prev+1)%roles.length);
                    setOnTypingSpeed(500);
                }
                else{
                    setCurText(current.substring(0, currentText.length-1));
                    setOnTypingSpeed(150);
                }
            }
        }
        const timmer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timmer);
    }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

    return (<div className='text-center md:text-start'>
        <h1 className='text-3xl md:text-5xl font-bold text-white md-6'>
            <span className='text-outline pb-1'>{currentText}</span>
            <span className='inline-block h-7 md:h-14 w-0.5 bg-cyan-300 ml-1 animate-pulse'></span>
        </h1>
    </div>)
};

export default AnimatedTitles;