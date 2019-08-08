import React from 'react'

export default function RoomStatus(props) {
    return (
        <div className='statusBar' style={statusBar}>
            <span style={status}>Open at :</span>
            <span style={statusDetails}>{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</span>
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
    backgroundColor: 'powderblue',
    padding: '5px 0'
}
const statusDetails = {
    fontSize: '0.8rem'
}