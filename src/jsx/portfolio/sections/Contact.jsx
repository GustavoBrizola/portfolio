import React from "react";

import Button from "jsx/elements/Button";
import ContactList from "jsx/portfolio/ContactList";

export default
function Contact() {
    return (
        <div>
            <h1>Contact me</h1>
            <div>
                <iframe id="googleMaps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220895.41032212423!2d-51.34229297067879!3d-30.10876675973471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1781618958196!5m2!1spt-BR!2sbr" 
                    width="100%" height="500px" 
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', margin: '20px 0' }}
                /> 
            </div>
            <div>
                <ContactList/>
            </div>
        </div>
    )
}