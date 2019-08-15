import React from 'react'

export default function Contents(props) {
    return (
        <div className='content' style={talkContent}>
            <div>
                <span className='talker' style={talker}>{props.talk.talker}</span>
                <span className='talk' style={talk}>{props.talk.talk}</span>
            </div>
        </div>
    )
}

const talker = {
    margin: '10px',
}
const talk = {
    margin: '10px',
    backgroundColor: '#595959',
    color: 'white',
    borderRadius: '12px',
    padding: '8px',
    fontSize: '0.7rem',
    fontWeight: '600',
}
const talkContent = {
    margin: '23px',
}