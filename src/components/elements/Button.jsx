import React, {useState} from "react";

export default
function Button(props) {
    const {
        aAria=null, 
        aHref=null,
        imgLeft=null,
        imgRight=null,
        imgSrc=null, 
        imgAlt=null, 
        text=null,
        textOnHover = text,
        clipboard = false
    } = props

    const [isHover, setIsHover] = useState(false);

    return (
        <a 
            aria-label={aAria} href={aHref} target="_blank" rel="noopener noreferrer" 
            onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
            // onClick={() => navigator.clipboard.writeText(textOnHover)}
        >
            {imgSrc && imgLeft && <img src={imgSrc} alt={imgAlt} style={{width: '18px', margin: '0 10px 0 0px'}}/>}
            <span>{isHover? textOnHover : text}</span>
            {imgSrc && imgRight && <img src={imgSrc} alt={imgAlt} style={{width: '18px', margin: '0 0px 0 10px'}}/>}
            {clipboard}
        </a>
    )
}