import React from 'react'

export default function MyContents(props) {
    return (
        <div className='content' style={talkContent}>
            <div style={myTalks}>
                <span className='talk' style={talk}>{props.talk.talk}</span>
                {/* <span className='talker' style={talker}>{props.talk.talker}</span> */}
            </div>
        </div>
    )
}

// const talker = {
//     margin: '10px',
// }
const talk = {
    margin: '10px',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '12px',
    padding: '8px',
    fontSize: '0.7rem',
    fontWeight: '600',
}
const myTalks = {
    position: 'relative',
    textAlign: 'right',
}
const talkContent = {
    position: 'relative',
    margin: '23px',
}