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
          username: 'unknown',
          roomname: 'unknown',
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
