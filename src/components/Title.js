import React from 'react'

export default function Title() {
    return (
        <div className='title-div' style={titleDiv}>
            <h1 style={title}>Secret Talk</h1>
        </div>
    )
}

const titleDiv = {
    backgroundColor: '#333',
    position: 'relative',
    margin: '0',
    height: '100px',
    textAlign: 'center',
}
const title = {
    position: 'relative',
    top: '30%',
    margin: 'auto',
    color: '#ffffff',
    fontFamily: 'La Belle Aurore'
}