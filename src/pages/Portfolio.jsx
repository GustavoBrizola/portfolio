import React, {useState, useEffect} from "react";

import'./Portfolio.css';

import portfolio from 'json/PortfolioInfo.json'
import avatar from '/images/photos/avatar_placeholder.png'
import burguerIcon from '/svg/ui/lines_white.svg';

import { pageMap } from "jsx/portfolio/SectionList";

export default
function Portfolio() {
    const [activeSection, setActiveSection] = useState(pageMap.home.id);
    const [BurguerMenu, setBurguerMenu] = useState(false);

    return (
        <main className="portfolio">

            {/* Place int its propper file */}
            {BurguerMenu &&
                <div>
                    <nav style={{display:'flex', position:"fixed", height: '500px', width:'100%', zIndex:'1001', left:'0', top:'0', backgroundColor: '#272433', borderBottom: '3px solid #5B5576'}}>
                        <a onClick={() => setBurguerMenu(!BurguerMenu)}>
                            <img src={burguerIcon} alt={null} style={{width: '18px'}}/>
                        </a>

                        {Object.entries(pageMap).slice(0, 5).map(([key, value]) => (
                        <a className = 'nav-link'key={key} href={value.label} onClick={(e) => { e.preventDefault(); setActiveSection(key); setBurguerMenu(!BurguerMenu)}}>
                            {value.icon && <img src={value.icon} alt={null} style={{width: '18px'}}/>}
                            {value.label && <span>{value.label}</span>}
                        </a>
                    ))}
                    </nav>
                </div>
            }

            <nav className="navigationBar">
                <div>
                    <img src={avatar} alt={`${portfolio.developer} avatar`}/>
                    <span>{portfolio.developer}</span>
                </div>
                <div className='section'>
                    {Object.entries(pageMap).slice(0, 5).map(([key, value]) => (
                        <a className = 'nav-link'key={key} href={value.label} onClick={(e) => { e.preventDefault(); setActiveSection(key); }}>
                            {value.icon && <img src={value.icon} alt={null} style={{width: '18px'}}/>}
                            {value.label && <span>{value.label}</span>}
                        </a>
                    ))}
                    <a onClick={() => setBurguerMenu(!BurguerMenu)}>
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
