import React, {useState} from 'react'

// Icons
// Find online repository for that
import homeIcon from       '/svg/ui/home_white.svg'
import aboutIcon from      '/svg/ui/info_white.svg'
import resumeIcon from     '/svg/ui/resume_white.svg'
import contactIcon from    '/svg/ui/contact_white.svg'
import projectsIcon from   '/svg/ui/projects_white.svg'

// JSX elements
import Home from        "jsx/portfolio/sections/Home";
import Projects from    "jsx/portfolio/sections/Projects";
import Resume from      "jsx/portfolio/sections/Resume";
import About from       "jsx/portfolio/sections/About";
import Contact from     "jsx/portfolio/sections/Contact";

export
const pageMap = {
    home:       {id: 'home',        label: 'Início',       icon: homeIcon,     component: <Home/>},
    projects:   {id: 'projects',    label: 'Projetos',     icon: projectsIcon, component: <Projects/>},
    resume:     {id: 'resume',      label: 'Currículo',    icon: resumeIcon,   component: <Resume/>},
    about:      {id: 'about',       label: 'Sobre',        icon: aboutIcon,    component: <About/>},
    contact:    {id: 'contact',     label: 'Contatos',     icon: contactIcon,  component: <Contact/>},
};