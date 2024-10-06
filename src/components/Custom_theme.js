import React from 'react'


export default function Custom_theme(props){
    function handleonchange1(event){
        // console.log(event.target.value)
        props.bgmode(event.target.value)
    }
    return(
        <>
        <select name="theme_drop down" onChange={handleonchange1} id="theme_dropdown">
            <option value="" disabled selected hidden>Choose a Theme</option>
            <option value="primary"  className="opt1">Primary Theme</option>
            <option value="success"  className="opt2">Success Theme</option>
            <option value="warning" className="opt3">Warning Theme</option>
            <option value="danger" className="opt4">Danger Theme</option>
            <option value="info" className="opt5">Info Theme</option>
        </select>
        </>
    )
}