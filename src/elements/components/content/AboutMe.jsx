import React from "react";

import SocialLinks from "../SocialLinks";
import ContactLinks from "../ContactLinks";

export default
function AboutMe()
{
    return (
        <>
            <div>
                <img src="public/images/photos/PhotosProfilepic.png"/>
            </div>
            <h3>Gustavo Silva Brizola</h3>
            <h5>Software Developer</h5>
            <p>
                Placeholder
            </p>

            <ContactLinks/>
            <SocialLinks/>
        </>
    )
}