import React, {useState, useEffect} from "react"

export default
function BurguerMenu(props) {
    const {
        menu
    } = props

    return (
        <div>
            <div style={{height:'100%', width:'100%', left:'0', top:'0', position:'fixed', display:'flex', backgroundColor:'black', zIndex:'999', opacity:'0.7'}}/>
            <nav style={{display:'flex', position:"fixed", height: '50%', width:'100%', zIndex:'999', left:'0', backgroundColor: '#363245', borderBottom: '3px solid #5B5576', opacity:'1'}}>
            </nav>
        </div>
    )
}