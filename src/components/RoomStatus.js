import React from 'react'

export default function RoomStatus(props) {
    return (
        <div className='statusBar' style={statusBar}>
            <span style={status}>Open at :</span>
            <span style={statusDetails}>{`${time.getHours() > 9 ? time.getHours() : '0' + time.getHours()}:${time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()}:${time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds()}`}</span>
            <span style={status}>Room :</span>
            <span style={statusDetails}>
            {props.user[0].roomname}
            </span>
            <span style={status}>Number of talkers :</span>
            <span style={statusDetails}>
            {props.user.length}
            </span>
        </div>
    )
}

const time = new Date();
const status = {
    margin: '0px 10px',
    fontWeight: 'bold',
    fontSize: '0.8rem',
}
const statusBar = {
    textAlign: 'center',
    backgroundColor: '#fffff2',
    padding: '5px 0',
    borderBottom: '1px dotted #333'
}
const statusDetails = {
    fontSize: '0.8rem'
}