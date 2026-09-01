import React, { useState } from "react";

import profile from 'json/personal/Profile.json'
import avatar from '/images/photos/avatar_placeholder.png'

// Figure out a way to work
export
const PresentSection = (section) => (
    <>
        {Object.entries(section).map(([key, value]) => (
            <a className = 'nav-link'key={key} href={value.label} style={{backgroundColor:'#5B5576'}}>
                {value.icon && <img src={value.icon} alt={null} style={{width: '18px'}}/>}
                {value.label && <span>{value.label}</span>}
            </a>
        ))}
    </>
)

export
const ProfileDisplay = () => (
    <div style={{margin: 'auto 30px'}}>
        <img src={avatar} alt={`${profile.GustavoBrizola.name} avatar`}/>
        <span>{profile.GustavoBrizola.name}</span>
    </div>
)