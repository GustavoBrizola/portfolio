import React from "react";

import ProjectDisplay from "jsx/elements/ProjectDisplay";
import projectsData from 'json/personal/Projects.json'

export default
function Projects() {
    return (
        <div>
            <div>
                <h1>Personal Projects</h1>
                <p>Here's all my personal projects I've been working on.</p>
            </div>
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'20px', margin:'20px 0'}}>
                {/* Will display all projects from .json */}
                {Object.values(projectsData).map((project, index) => (
                    <ProjectDisplay
                        // @ts-ignore
                        key={index}
                        // @ts-ignore
                        title={project?.name}
                        // @ts-ignore
                        description={project?.description}
                        // @ts-ignore
                        imgSrc={project?.image?.icon}
                        // @ts-ignore
                        imgAlt={project?.name}
                        // @ts-ignore
                        link={project?.link}
                    />
                ))}
            </div>
        </div>
    )
}