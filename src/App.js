import React, { Component } from 'react';
import UserTile from './Components/UserTile';
import socketIOClient from 'socket.io-client';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://127.0.0.1:4000',
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('tick', (data) => {
      this.setState({ response: data });
    });
  }

  render() {
    const { response } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Space Game</h1>
        </header>
        {response ? response.users.map((user, index) => { return <UserTile key={index} user={user} economy={response.config.economy} />; }) : ''}

      </div>
    );
  }
}

export default App;
