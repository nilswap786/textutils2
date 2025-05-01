import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("clear text successfully","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("remove extra space successfully","success");
    }

    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copy to clipboard successfully","success");
    }

    return (
        <>
            <div className="container"  style={{color:props.mode ==='dark'?'white':'black'}} >
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode ==='dark'?'gray':'white'}} onChange={handleOnChange} rows="8" value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace} >Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
            </div>
            <div className="container" style={{color:props.mode ==='dark'?'white':'black'}} >
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters </p>    
                <p>{0.008 * text.split(" ").length} Minutes to read </p>    
                <h2>Preview</h2>    
                <p>{text.length > 1 ? text:"Enter text for preview"} </p>    
            </div>
        </>
    )
}
