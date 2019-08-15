import React from 'react'
import RoomStatus from './RoomStatus'
import ChatBox from './ChatBox'

class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            talks: [],
            write: '',
        }
    }

    componentDidMount() {
        // setInterval(() => (fetch('http://localhost:3001/messages')
        //   .then(res => res.json())
        //   .then(messages => {
        //       this.setState({
        //           talks: messages,
        //       })
        //   })
        // ), 300)
    }

    newWrite = (e) => {
        this.setState({
            write: e.target.value,
        })
    }

    handleClick = () => {
        let input = this.state.write;
        if (input !== '') {
            let obj = {};
            obj.talk = input;
            obj.talker = this.props.user[0].username;
            // fetch('http://localhost:3001/messages', {
            //     method: 'POST',
            //     body: JSON.stringify(obj),
            //     headers: {
            //       "Content-Type": "application/json"
            //     }
            // })
            //   .then(res => res.json())
            // this.setState({
            //     write: '',
            // })
            this.setState({
                talks: this.state.talks.concat(obj),
                write: '',
            })
        }
        
    }

    onEnter = (e) => {
        if (e.charCode === 13) {
            this.handleClick()
        }
    }

    render() {
        return (
            <div style={room}>
                <RoomStatus user={this.props.user}/>
                <ChatBox 
                user={this.props.user[0]}
                talks={this.state.talks} 
                handleClick={this.handleClick} 
                onEnter={this.onEnter}
                newWrite={this.newWrite}
                write={this.state.write}/>
            </div>
        )
    }
}

export default Room;

const room = {
    position: 'absolute',
    width: '100%',
    fontFamily: 'Nanum Gothic Coding',
    fontSize: '0.8rem',
}