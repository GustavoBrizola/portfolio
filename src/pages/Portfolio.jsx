import React, {useState, useEffect} from "react";

import'./Portfolio.css';

import portfolio from 'json/PortfolioInfo.json'
import avatar from '/images/photos/avatar_placeholder.png'
import burguerIcon from '/svg/ui/lines_white.svg';

import { pageMap } from "jsx/portfolio/SectionList";
import BurguerMenu from "jsx/elements/BurguerMenu";

export default
function Portfolio() {
    const [activeSection, setActiveSection] = useState(pageMap.home.id);
    const [isBurguerMenu, setBurguerMenu] = useState(false);
    let SectionNumber = Math.floor(window.innerWidth/200);

    return (
        <main className="portfolio">
            {isBurguerMenu && <BurguerMenu className='burguer-menu'/>}
            <nav className="navigationBar">
                <div>
                    <img src={avatar} alt={`${portfolio.developer} avatar`}/>
                    <span>{portfolio.developer}</span>
                </div>
                <div className='section'>
                    {Object.entries(pageMap).slice(0, SectionNumber).map(([key, value]) => (
                        <a className = 'nav-link'key={key} href={value.label} onClick={(e) => { e.preventDefault(); setActiveSection(key); setBurguerMenu(false)}}>
                            {value.icon && <img src={value.icon} alt={null} style={{width: '18px'}}/>}
                            {value.label && <span>{value.label}</span>}
                        </a>
                    ))}
                    <a onClick={() => setBurguerMenu(!isBurguerMenu)}>
                        <img src={burguerIcon} alt={null} style={{width: '18px'}}/>
                    </a>
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
