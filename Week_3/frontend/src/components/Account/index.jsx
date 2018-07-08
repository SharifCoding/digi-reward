import React from 'react';
import axios from 'axios';
import TokenManager from '../../utils/token-manager';
import './style.scss';

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      account: [{
        id: '',
        description: '',
        created: '',
      }],
    };
  }

  componentDidMount() {
    const code = TokenManager.getToken(code);
    axios.get('http://127.0.0.1:3000/Users', {
      getToken: { code },
    })
      .then((response) => {
        this.setState({ account: response.data[1].account });
        // adjust data[n] depending on your mongoDB setup
      });
  }

  render() {
    return (
      <div>
        <div className="monzo-accounts">
          <h1>
            My Rewards
          </h1>
        </div>
        <h2>Hello {this.state.account.description}, here are your rewards...</h2>
      </div>
    );
  }
}

export default Account;
