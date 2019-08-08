import React from 'react'
import Input from './Input'
import Content from './Content'

export default function ChatBox(props) {
    return (
        <div className='chatBox' style={chatBox}>
            <div className='talkContents'>
                {props.talks.map((talk, i) => <Content key={i} talk={talk} />)}
            </div>
            <Input handleClick={props.handleClick} onEnter={props.onEnter}/>
        </div>
    )
}

const chatBox = {
    border: '1px solid red',
    position: 'relative',
    height: '500px',
}