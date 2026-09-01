import React, {useState, useEffect} from "react"

export default
function BurguerMenu(props) {
    const {
        menu
    } = props

    return (
        <nav style={{display:'flex', position:"fixed", height: '500px', width:'100%', zIndex:'1001', left:'0', top:'0', backgroundColor: '#272433', borderBottom: '3px solid #5B5576'}}>
            {/* <a onClick={() => setBurguerMenu(!BurguerMenu)}> */}
                {/* <img src={burguerIcon} alt={null} style={{width: '18px'}}/> */}
            {/* </a> */}
        </nav>
    )
}