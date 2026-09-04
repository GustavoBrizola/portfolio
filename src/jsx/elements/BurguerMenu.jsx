import React, {useState, useEffect} from "react"

export default
function BurguerMenu(props) {
    const {
        menuOptions,
        SetActiveSection
    } = props

    return (
        <>
            {Object.entries(menuOptions).map(([key, value]) => (
                <a className = 'nav-link' key={key} href={value.label} onClick={(e) => { e.preventDefault(); SetActiveSection(key);}}>
                    {value.label && <span>{value.label}</span>}
                </a>
            ))}
        </>
    )
}