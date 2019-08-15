import React from 'react'
import Input from './Input'
import Contents from './Contents'
import MyContents from './MyContents'

export default function ChatBox(props) {
    return (
        <div className='chatBox' style={chatBox}>
            <div className='talkContents' style={allTalks}>
                {props.talks.map((talk, i) => {
                    if (talk.talker === props.user.username) {
                        return <MyContents key={i} talk={talk} />
                    } else {
                        return <Contents key={i} talk={talk} />
                    }
                    })
                }
            </div>
            <Input 
            handleClick={props.handleClick} 
            onEnter={props.onEnter}
            newWrite={props.newWrite}
            write={props.write}/>
        </div>
    )
}

const chatBox = {
    // border: '1px solid red',
    position: 'relative',
    height: 'calc(100vh - 165px)',
}
const allTalks = {
    position: 'relative',
    height: '100%',
    overflowY: 'scroll',
}