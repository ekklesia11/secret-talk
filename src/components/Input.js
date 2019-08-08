import React from 'react'

export default function Input(props) {
    return (
        <div className='input' style={input}>
            <input type='text' style={inputArea} className='inputArea' onKeyPress={props.onEnter}/>
            <button style={enterBtn} onClick={props.handleClick}>Talk</button>
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
    backgroundColor: 'blue',
}
const inputArea = {
    position: 'relative',
    top: '7px',
    left: '5px',
    width: '85%',
    height: '20px',
    borderRadius: '6px',
}
const enterBtn = {
    fontWeight: 'bold',
    position: 'relative',
    width: '10%',
    height: '21px',
    top: '7px',
    left: '13px',
    borderRadius: '10px'
}