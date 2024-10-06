import React, { useState } from 'react'

export default function About(props) {
    const [text, setText] = useState("");
    let a="";

    function handleonclick1() {
        a=a.toUpperCase();
        setText(a.toUpperCase());
        props.alert1("success","Converted to Upper case")
    }
    function handleonclick2() {
        setText(a.toLowerCase());
        props.alert1("success","Converted to Lower case")
    }
    function handleonclick3() {
        setText("");
        props.alert1("danger","textarea cleared")
    }
    function handleonchange1(event) {
        setText();
        a=event.target.value;
    }
    return (
        <>
            <div className="container1 m-4">
                <h1 className={`heading text-${props.textcolor1}`}>Input Your Text</h1>
                <form className="form-floating">
                    <input type="textarea" className="form-control" id="floatingInputValue" placeholder="name@example.com" onChange={handleonchange1} value={text} />
                    <label htmlFor="floatingInputValue">Input with value</label>
                </form>
                <button className="btn btn-primary mt-2 m-2" onClick={handleonclick1} >convert to upper case</button>
                <button className="btn btn-primary mt-2 m-2" onClick={handleonclick2}>convert to lower case</button>
                <button className="btn btn-danger mt-2 m-2" onClick={handleonclick3}>clear</button>
            </div>
            <div className="container2">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
                        <label className={`form-check-label text-${props.textcolor1}`} htmlFor="flexSwitchCheckDefault">{props.textofd_l}</label>
                </div>
            </div>
        </>
    )
}