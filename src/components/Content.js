import React from 'react'

export default function Contents(props) {
    return (
        <div className='content' style={talkContent}>
            <span className='talker' style={talker}>{props.talk.talker}</span>
            <span className='talk' style={talk}>{props.talk.talk}</span>
        </div>
    )
}

const talker = {
    margin: '10px',
}
const talk = {
    margin: '10px',
}
const talkContent = {
    margin: '10px',
}