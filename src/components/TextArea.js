import React, {useState} from 'react'
import procType from 'prop-types'




export default function TextArea(props) {


    const [text, setText] = useState('');

    const handleUpper = () => {
        console.log("Upper case was clicked");
        setText(text.toUpperCase())
    }

    const handleChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }

    const handleLower = () => {
        console.log("Lower case was clicked");
        setText(text.toLowerCase())
    }

    const handleAllFirstCap = () => {
        console.log("All first letter capitalise was clicked");
        let newText = text.split(" ").map((currentValue) => {
            return currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
        }).join(" ");
        setText(newText)
    }

    const handleClear = () => {
        console.log("Clear was clicked");
        setText('')
    }

    const handleRead = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const mode = props.set;

    const myMode = {
        // if mode is dark then color is white else color is black
        color: mode === 'dark' ? 'white' : 'black',
    }

    const textBoxCol = {
        backgroundColor: mode === 'dark' ? '#282c39' : 'white',
        color: mode === 'dark' ? 'white' : 'black',
    }

    let count = 0;

    for(let i = 0; i < text.length; i++){
        if(text[i] === " "){
            count++;
        }
    }

  return (
    <div>
        <>
            <div className="container my-3">
                <div className="mb-3">
                    <h1 className='my-2' style={myMode}>{props.heading}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={textBoxCol} value={text} onChange={handleChange} rows="10"></textarea>
                </div>
                <button type="button" className="btn btn-success mx-2 my-1" onClick={handleUpper}>Upper Case</button>
                <button type="button" className="btn btn-success mx-2 my-1" onClick={handleLower}>Lower Case</button>
                <button type="button" className="btn btn-success mx-2 my-1" onClick={handleAllFirstCap}>All First Letters Capitalise</button>
                <button type="button" className="btn btn-success mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>

                <button type="button" className="btn btn-success mx-2 my-1" onClick={handleClear}>Clear</button>
                <button type="button" className="btn btn-success mx-2 my-1" onClick={handleRead}>Read</button>

            </div>

            <div className="container my-3">
                <h2 style={myMode}>Your text summary</h2>
                <p style={{color : 'green'}} className='my-0'>{text.length > 0 ?(text[text.length -1] === " " ? text.split(" ").length - 1 :text.split(" ").length) : "0"} words and {text.length - count} characters</p>
                <p style={{color : 'green'}}>{text.length > 0 ? 0.008 * (text[text.length -1] === " " ? text.split(" ").length - 1 :text.split(" ").length) : "0"} Minutes read time</p>
                <h2 className='my-2' style={myMode}>Preview</h2>
                <p  style={myMode}>{text.length > 0 ? text : "Enter something in the above box to preview."}</p>
            </div>
        </>
        

    </div>
  )
}

TextArea.propTypes = {
    heading: procType.string.isRequired
}

TextArea.defaultProps = {
    heading: 'Enter Text'
}