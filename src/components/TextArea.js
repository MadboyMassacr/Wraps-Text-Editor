import React, {useState} from 'react'
import procType from 'prop-types'




export default function TextArea(props) {


    const [text, setText] = useState('');

    const handleUpper = () => {
        setText(text.toUpperCase())
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleLower = () => {
        setText(text.toLowerCase())
    }

    const handleAllFirstCap = () => {
        let newText = text.split(" ").map((currentValue) => {
            return currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
        }).join(" ");
        setText(newText)
    }

    const handleClear = () => {
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
                <p style={{color : 'green'}} className='my-0'>{text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} words and {text.length - count} characters</p>
                <p style={{color : 'green'}}>{0.008 * (text.split(/\s+/).filter((element) =>{return element.length !== 0}).length)} Minutes read time</p>
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