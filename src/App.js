import React, { Component } from 'react';
import UserTile from './Components/UserTile';
import socketIOClient from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
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
      <div className="container App">
        <header className="App-header">
          <h1 className="App-title">Space Game</h1>
          <h2>Tick #{response ? response.tick.position : '1'}</h2>
        </header>
        <table>
          <thead>
            <tr>
              <th colspan="2">Rankings</th>
            </tr>
          </thead>
          <tbody>
            {response ? response.tick.rankings.map((user, index) => {
              return <tr><td>{user.user}:</td><td>{user.score}</td></tr>
            }) : ''}
          </tbody>
        </table>
        {response ? response.users.map((user, index) => { return <UserTile key={index} user={user} economy={response.config.economy} />; }) : ''}
      </div>
    );
  }
}


export default App;
