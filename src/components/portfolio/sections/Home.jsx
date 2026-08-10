import React from "react";

import Button from "components/elements/Button";

export default
function Home() {
    return (
        <div>
            <h1><b>Hello!</b> I'm Gustavo Brizola</h1>
            <p>This is my website I share all my work I create. Select one of the tabs to explore my work.</p>
            <div>
                <h2>Your support helps a lot</h2>
                <div style={{display: 'flex', gap:'30px', flexWrap:'wrap'}}>
                    <div style={{flex:'1'}}>   
                        <p>Have a good feature idea or wanna suggest some? Check the idea section. </p>
                        <div style={{display:'flex'}}>
                            <Button aAria='Suggest' aHref={'https://github.com/GustavoBrizola/Portfolio/discussions/categories/ideas'} text={'Suggest Features'}/>
                            <Button aAria='Feedback' aHref={'https://github.com/GustavoBrizola/Portfolio/discussions/categories/ideas'} text={'Give Feedback'}/>
                        </div>
                    </div>
                    <div style={{flex:'1'}}>   
                        <p>Found a bug somewhere? Consider report to the issue section your discover.</p>
                        <div><Button aAria='ReportBug' aHref={'https://github.com/GustavoBrizola/Portfolio/issues'} text={'Report Bug'}/></div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}