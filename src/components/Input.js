import React from 'react'

export default function Input(props) {
    return (
        <div className='input' style={input}>
            <input type='text' 
            style={inputArea} 
            className='inputArea' 
            value={props.write}
            onKeyPress={props.onEnter}
            onChange={props.newWrite}/>
            <button style={enterBtn} 
            onClick={props.handleClick}>Talk</button>
        </div>
    )
}

const input = {
    display: 'block',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    height: '40px',
    backgroundColor: '#333',
}
const inputArea = {
    position: 'relative',
    top: '7px',
    left: '5px',
    width: '85%',
    height: '20px',
    borderRadius: '6px',
    outline: 'none'
}
const enterBtn = {
    fontWeight: 'bolder',
    position: 'relative',
    width: '10%',
    height: '21px',
    top: '7px',
    left: '13px',
    borderRadius: '10px',
    outline: 'none',
}