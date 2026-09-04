import React, {useState} from "react";

export
const SectionDisplay = ({PageMap, SetActiveSection}) => (
    <>
        {Object.entries(PageMap).slice(0, 6).map(([key, value]) => (
            <a className = 'nav-link'key={key} href={value.label} onClick={(e) => { e.preventDefault(); SetActiveSection(key); }}>
                {value.icon && <img src={value.icon} alt={null} style={{width: '18px'}}/>}
                {value.label && <span>{value.label}</span>}
            </a>
        ))}
    </>
)

export
const ContentDisplay = ({PageMap, ActiveSection }) => {
    return (<>{PageMap[ActiveSection]?.component || <></>}</>)
}

