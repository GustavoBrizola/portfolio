import React, {useState} from "react";

import'./Portfolio.css';

import portfolio from 'json/PortfolioInfo.json'
import avatar from '/images/photos/avatar_placeholder.png'

import { pageMap} from "components/portfolio/SectionList";

export default
function Portfolio() {
    const [activeSection, setActiveSection] = useState(pageMap.home.id);

    return (
        <main className="portfolio">
            <nav className="navigationBar">
                <div>
                    <img src={avatar} alt={`${portfolio.developer} avatar`}/>
                    <span>{portfolio.developer}</span>
                </div>
                <div className='section'>
                    {Object.entries(pageMap).map(([key, value]) => (
                        <a key={key} href={value.label} onClick={(e) => { e.preventDefault(); setActiveSection(key); }}>
                            <img src={value.icon} alt={null} style={{width: '18px'}}/>
                            {value.label}
                        </a>
                    ))}
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
                    {/* <a href='https://github.com/GustavoBrizola/Portfolio' target='_blank' rel='noopener noreferrer'>Repositório</a> */}
                    {/* <a href='https://github.com/GustavoBrizola/Portfolio/issues' target='_blank' rel='noopener noreferrer'>Report Bug</a> */}
                </div>
                <span>{portfolio.version}</span>
            </footer>
        </main>
    )
}