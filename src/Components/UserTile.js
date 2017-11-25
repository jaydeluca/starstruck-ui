import React from 'react';

export default class UserTile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { user } = this.props;

    const mining = {
      planet: this.props.economy.baseIncome[user.technology.mining],
      platinumAsteroid: this.props.economy.asteroidIncome*user.assets.asteroids.platinum,
      crystalAsteroid: this.props.economy.asteroidIncome*user.assets.asteroids.crystal
    };

    return (
      <div className="user-tile">
        <h1>{user.username}</h1>
        <div className="u-row u-space-between">
          <div className="user-tile--box">
            <h3>Units:</h3>
            <ul>
              {Object.keys(user.units).map(function(key, index) {
                return <li key={index}><span>{key}:</span> <span>{user.units[key]}</span></li>;
              })}
            </ul>
          </div>
          <div className="user-tile--box">
            <h3>Asteroids:</h3>
            <ul>
              {Object.keys(user.assets.asteroids).map(function(key, index) {
                return <li key={index}><span>{key}:</span> <span>{user.assets.asteroids[key]}</span></li>;
              })}
            </ul>
          </div>
          <div className="user-tile--box">
            <h3>Resources:</h3>
            <ul>
              {Object.keys(user.assets.resources).map(function(key, index) {
                return <li key={index}><span>{key}:</span> <span>{user.assets.resources[key]}</span></li>;
              })}
            </ul>
          </div>
        </div>
        <div className="row">
          <h3>Income:</h3>
          <div class="u-flex u-center">
            <table className="income-table">
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
