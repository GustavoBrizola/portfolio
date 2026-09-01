import React from "react";

import Button from "jsx/elements/Button";
import profile from 'json/personal/Profile.json'

import githubLogo from      '/svg/services/github_white.svg'
import linkedinLogo from    '/svg/services/linkedin_white.svg'
import whatsappLogo from    '/svg/services/whatsapp_white.svg'
import mailLogo from        '/svg/services/gmail_white.svg'

export default
function ContactList(props) {
    const {
        whatsapp,
        linkedin,
        mail,
        phone,
    } = props;

    return (
        <>
            <h3>Contacts</h3>
            <Button aAria='Start chatting'          aHref={`https://wa.me/${profile.GustavoBrizola.contacts.whatsapp}`} imgSrc={whatsappLogo}   imgLeft={true} imgAlt='WhatsApp'    text='WhatsApp' textOnHover={profile.GustavoBrizola.contacts.whatsapp}/>
            <Button aAria='Send an Email'           aHref={`mailto:${profile.GustavoBrizola.contacts.mail}`}            imgSrc={mailLogo}       imgLeft={true} imgAlt='Email'       text='Email'/>
            <Button aAria='Open Github profile'     aHref={profile.GustavoBrizola.contacts.github}                      imgSrc={githubLogo}     imgLeft={true} imgAlt='Github'      text='Github'/>
            <Button aAria='Open LinkedIn profile'   aHref={profile.GustavoBrizola.contacts.linkedin}                    imgSrc={linkedinLogo}   imgLeft={true} imgAlt='Linkedin'    text='LinkedIn'/>
        </>
    )
}