import React from "react"

import resume from '/pdf/Resume.pdf'
import icoDonwload from '/svg/ui/download_white.svg';

import Button from "jsx/elements/Button"
import PdfViewer from "jsx/elements/PdfViewer"


export default
function Resume()
{
    const buttonDownload = (<Button aHref={resume} imgSrc={icoDonwload} imgLeft={true} imgRight={true} text={"Donwload CV"}/>)

    return (    
        <div>
            <div>
                <h1>Download Resume</h1>
                <p>Here you can download my latest Curriculum Vitae.</p>
            </div>
            <div>
                {buttonDownload}
                <PdfViewer file={resume}/>
                {buttonDownload}
            </div>
        </div>
    )
}