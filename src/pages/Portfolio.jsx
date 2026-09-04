import React, {useState, useEffect} from "react";

import'./Portfolio.css';

import { pageMap } from "jsx/portfolio/SectionList";

import burguerIcon from '/svg/ui/lines_white.svg';

import { DevCredits, BuildVersion, FooterLinks } from "jsx/portfolio/Footer";
import { ProfileDisplay } from "jsx/portfolio/NavigationBar";
import { SectionDisplay, ContentDisplay } from "jsx/portfolio/ContentDisplay";

export default
function Portfolio() {
    const [activeSection, setActiveSection] = useState(pageMap.home.id);
    const [isBurguerMenu, setBurguerMenu] = useState(false);

    useEffect(() => {
        const previousOverflowY = document.body.style.overflowY;
        if (isBurguerMenu) {
            document.body.style.overflowY = 'hidden';
        }
        return () => {
            document.body.style.overflowY = previousOverflowY;
        };
    }, [isBurguerMenu]);

    return (
        <main className="portfolio" style={{}}>

            {isBurguerMenu &&
                <menu className="ContainerMenu">
                    <div style={{backgroundColor:'black', opacity:'0.7'}} onClick={() => setBurguerMenu(!isBurguerMenu)}/>
                    <nav>

                    </nav>
                </menu>
            }
            <nav className="navigationBar">

                <ProfileDisplay/>
                <div className='section'>
                    {/* Temporary */}
                    <SectionDisplay SetActiveSection={setActiveSection} PageMap={pageMap}/>
                    <a onClick={() => setBurguerMenu(!isBurguerMenu)}>
                        <img src={burguerIcon} alt={null} style={{width: '18px'}}/>
                    </a>
                </div>
            </nav>

            <section className="contentDisplay">
                <div className='content'>

                    {/* Temporary */}
                    <ContentDisplay ActiveSection={activeSection} PageMap={pageMap}/>

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
