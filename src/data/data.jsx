import React, { useState, useEffect } from "react";
import spaceInvadersImg from "../assets/space_invaders.png";
import sisImg from "../assets/sis.png";
import plataformaIdososImg from "../assets/plataforma_idosos.png";


import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail, MdOutlineSettingsApplications } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiSpring,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  GiMaterialsScience,
  GiNorthStarShuriken,
  GiSandsOfTime,
} from "react-icons/gi";
import { DiJava, DiPython, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";
import { label } from "framer-motion/client";
export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-teal-400" />},
      { name: "Material UI", icon: <GiMaterialsScience className="text-blue-400" />},
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: <SiSpring className="text-green-600" /> },
      { name: "Node JS", icon: <FaNodeJs className="text-green-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    title: "Linguagens",
    skills: [
      { name: "Java", icon: <DiJava className="text-red-600" /> },
      { name: "Python", icon: <DiPython className="text-yellow-400" /> },
      { name: "C#", icon: <TbBrandCSharp className="text-purple-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />},
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />}
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    ],
  },
];

// Navegação
export const navItems = [
  { id: "home", label: "Início"},
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Habilidades" },
  { id: "experience", label: "Experiência" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contato" },
];

// Portfólio
export const portfolioItems = [
  {
    title: "Space Invaders",
    category: "Pygame + Python",
    image: spaceInvadersImg,
    github: "https://github.com/Filipe-glitch/space-invaders-pygame",
  },
  {
    title: "Plataforma para Idosos",
    category: "HTML + CSS + JavaScript + UX/UI",
    image: plataformaIdososImg,
    github: "https://github.com/Filipe-glitch/Plataforma-idosos-RJ",
  },
  {
    title: "SIS - Selo Infância Segura",
    category: "Lovable + TypeScript",
    image: sisImg,
    github: "https://github.com/Filipe-glitch/selo-infancia-segura",
  },
];

// Experiência
export const experiences = [
  {
    id: 1,
    company: "Faculdade de Análise e Desenvolvimento de Sistemas",
    logo: <GiSandsOfTime />,
    period: "Maio 2025 - Até o momento",
    description:
      "Graduação em Análise e Desenvolvimento de Sistemas, com aprendizado em programação, banco de dados e desenvolvimento de software. Participação em projetos acadêmicos e extensionistas, colocando em prática os conhecimentos adquiridos ao longo do curso.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "Java",
      "Python",
      "CI/CD",
      "Flutter",
    ],
  },
  {
    id: 2,
    company: "Marinha do Brasil",
    logo: <IoIosStarOutline />,
    period: "Março 2022 - Fevereiro 2025",
    description:
      "Atuação no monitoramento de áreas restritas por CFTV, elaboração de relatórios operacionais e organização de informações. Experiência com cumprimento de procedimentos, trabalho em equipe e atenção aos detalhes em uma rotina que exigia responsabilidade e disciplina.",
    skills: ["Trabalho em Equipe", "Comunicação", "Liderança", "Resolução de problemas", "Adaptabilidade"],
  },
];