import React from 'react'
import RoomStatus from './RoomStatus'
import ChatBox from './ChatBox'

class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            talks: [],
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let input = document.getElementsByClassName('inputArea');
        if (input[0].value !== '') {
            let obj = {};
            obj.talk = input[0].value;
            obj.talker = this.props.user[0].username;
            this.setState({
                talks: this.state.talks.concat(obj)
            })
        }
        input[0].value = '';
    }

    onEnter = (e) => {
        let input = document.getElementsByClassName('inputArea');
        if (e.charCode === 13 && input[0].value !== '') {
            let obj = {};
            obj.talk = input[0].value;
            obj.talker = this.props.user[0].username;
            this.setState({
                talks: this.state.talks.concat(obj)
            })
        input[0].value = '';
        }
    }

    render() {
        return (
            <div>
                <RoomStatus user={this.props.user}/>
                <ChatBox talks={this.state.talks} handleClick={this.handleClick} onEnter={this.onEnter}/>
            </div>
        )
    }
}

export default Room;