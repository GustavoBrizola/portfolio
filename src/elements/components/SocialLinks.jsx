import React from "react";

export default
function SocialLinks()
{
    return (
        <>
            <h4>Socials<hr/></h4>
            <a aria-label="Open GitHub profile" href="https://github.com/GustavoBrizola">
                <img src="public/images/ico/LogoGithub.png" alt="GitHub logo"/>
                <p>Github</p>
            </a>

            <a aria-label="Open LinkedIn profile" href="https://www.linkedin.com/in/gustavobrizola/">
                <img src="public/images/ico/LogoLinkedIn.png" alt="LinkedIn logo"/>
                <p>LinkedIn</p>
            </a>
        </>
    )
}