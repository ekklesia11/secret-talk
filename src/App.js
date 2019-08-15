import React from 'react';
import Room from './components/Room'
import Title from './components/Title'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: [
        {
          username: '다니엘',
          roomname: '새방',
        }
      ],
    }
  }

  render() {
    return (
      <div>
        <Title />
        <Room user={this.state.user}/>
      </div>
    );
  }
}

export default App;
