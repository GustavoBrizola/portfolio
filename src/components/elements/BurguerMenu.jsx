import React, {useState, useEffect} from "react"

export default
function BurguerMenu(props) {
    const {
        ...menu
    } = props;

    return (
        <nav>
            {Object.entries(menu).map(([key, value]) => (
                <a className = 'nav-link'key={key} href={value.label} onClick={(e) => { e.preventDefault(); setActiveSection(key); }}>
                    <img src={value.icon} alt={null} style={{width: '18px'}}/>
                    <span>{value.label}</span>
                </a>
            ))}
        </nav>
    )
}