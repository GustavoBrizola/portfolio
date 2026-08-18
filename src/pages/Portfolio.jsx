import React, {useState, useEffect} from "react";

import'./Portfolio.css';

import portfolio from 'json/PortfolioInfo.json'
import avatar from '/images/photos/avatar_placeholder.png'
import burguerIcon from '/svg/ui/lines_white.svg';

import { pageMap } from "components/portfolio/SectionList";
import BurguerMenu from "components/elements/BurguerMenu";


export default
function Portfolio() {
    const [activeSection, setActiveSection] = useState(pageMap.home.id);
    const sectionDisplay = (
        <>
            {Object.entries(pageMap).slice(0, 6).map(([key, value]) => (
                <a className = 'nav-link'key={key} href={value.label} onClick={(e) => { e.preventDefault(); setActiveSection(key); }}>
                    <img src={value.icon} alt={null} style={{width: '18px'}}/>
                    <span>{value.label}</span>
                </a>
            ))}
        </>
    )

    const [burguerMenu, setBurguerMenu] = useState(false);
    const burguerSection = (
        <a className="burguerMenu" onClick={() => {setBurguerMenu(true)}}>
            <img src={burguerIcon} alt={null} style={{width: '18px'}}/>
            <span>Menu</span>
        </a>
    )

    return (
        <main className="portfolio">
            <BurguerMenu/>
            <nav className="navigationBar">
                <div>
                    <img src={avatar} alt={`${portfolio.developer} avatar`}/>
                    <span>{portfolio.developer}</span>
                </div>
                <div className='section'>
                    {sectionDisplay}
                    {burguerSection}
                </div>
            </nav>
            <section className="contentDisplay">
                <div className='content'>
                    {pageMap[activeSection]?.component || <></>}
                </div>
            </section>
            <footer className="footer">
                <span>© 2026 Desenvolvido por {portfolio.developer}</span>
                <div>
                    <a href='https://github.com/GustavoBrizola/Portfolio' target='_blank' rel='noopener noreferrer'>Repositório</a>
                    <a href='https://github.com/GustavoBrizola/Portfolio/issues' target='_blank' rel='noopener noreferrer'>Report Bug</a>
                </div>
                <span>{portfolio.version}</span>
            </footer>
        </main>
    )
}