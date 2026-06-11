import React from "react";

export default
function ContactLinks()
{

    return (
        <>  
            <h4>Contacts<hr/></h4>
            <a href={`https://wa.me/5551985283336`} target={'_blank'} rel={'noopener noreferrer'}>
                <img src="public/images/ico/LogoWhatsApp.png"/>
                <p>WhatsApp</p>
            </a>

            <a href={`mailto:gustavo.brizola@icloud.com`} target={'_blank'} rel={'noopener noreferrer'}>
                <img src="public/images/ico/LogoGmail.png"/>
                <p>Mail</p>
            </a>           
        </>
    )
}