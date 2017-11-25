import React from 'react';

const divContainer = {
  borderWidth: 1,
  borderColor: 'black',
  margin: 20,
};

const divFlex = {
  display: 'flex',
  justifyContent: 'space-between',
};

const tableStyle = {
  borderWidth: 1,
  borderColor: 'black',
};

export default class UserTile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { user } = this.props;

    const mining = {
      planet: this.props.economy.baseIncome[user.technology.mining],
      platinumAsteroid: this.props.economy.asteroidIncome*user.assets.asteroids.platinum,
      crystalAsteroid: this.props.economy.asteroidIncome*user.assets.asteroids.crystal
    };

    return (
      <div style={divContainer}>
        <h1>{user.username}</h1>
        <div style={divFlex}>
          <div>
            <h3>Units:</h3>
            <ul>
              {Object.keys(user.units).map(function(key, index) {
                return <li key={index}>{key}: {user.units[key]}</li>;
              })}
            </ul>
          </div>
          <div>
            <h3>Asteroids:</h3>
            <ul>
              {Object.keys(user.assets.asteroids).map(function(key, index) {
                return <li key={index}>{key}: {user.assets.asteroids[key]}</li>;
              })}
            </ul>
          </div>
          <div>
            <h3>Resources:</h3>
            <ul>
              {Object.keys(user.assets.resources).map(function(key, index) {
                return <li key={index}>{key}: {user.assets.resources[key]}</li>;
              })}
            </ul>
          </div>
        </div>
        <div style={divFlex}>
          <div>
            <h3>Income:</h3>
            <table style={tableStyle}>
              <tr>
                <th>
                  Resource:
                </th>
                <th>
                  Planet Mining:
                </th>
                <th>
                  Asteroid Mining:
                </th>
                <th>
                  Total:
                </th>
              </tr>
              <tr>
                <td>
                  Platinum:
                </td>
                <td>
                  {mining.planet}
                </td>
                <td>
                  {mining.platinumAsteroid}
                </td>
                <td>
                  {mining.planet + mining.platinumAsteroid}
                </td>
              </tr>
              <tr>
                <td>
                  Crystal:
                </td>
                <td>
                  {mining.planet}
                </td>
                <td>
                  {mining.crystalAsteroid}
                </td>
                <td>
                  {mining.planet + mining.crystalAsteroid}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
