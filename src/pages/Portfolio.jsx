import React, {useState, useEffect} from "react";

import'./Portfolio.css';

import burguerIcon from '/svg/ui/lines_white.svg';
import BurguerMenu from "jsx/elements/BurguerMenu";

import { pageMap } from "jsx/portfolio/SectionList";
import { DevCredits, BuildVersion, FooterLinks } from "jsx/portfolio/Footer";
import { ProfileDisplay } from "jsx/portfolio/NavigationBar";

export default
function Portfolio() {
    const [activeSection, setActiveSection] = useState(pageMap.home.id);
    const [isBurguerMenu, setBurguerMenu] = useState(false);
    let SectionNumber = Math.floor(window.innerWidth/200);

    return (
        <main className="portfolio">
            {isBurguerMenu && <BurguerMenu/>}

            <nav className="navigationBar">
                <ProfileDisplay/>
                <div className='section'>
                    {Object.entries(pageMap).slice(0, SectionNumber).map(([key, value]) => (
                        <a className = 'nav-link'key={key} href={value.label} onClick={(e) => { e.preventDefault(); setActiveSection(key);}}>
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
                <DevCredits/>
                <FooterLinks/>
                <BuildVersion/>
            </footer>
        </main>
    )
}
