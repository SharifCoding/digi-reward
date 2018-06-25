import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TokenManager from '../utils/token-manager';

class GithubLogin extends React.Component {
  componentDidMount() {
    const code = this.props.location.search.match(/code=([^&]+)/)[1];
    console.log({ search: this.props.location.search });
    console.log({ code });
    axios.post('http://127.0.0.1:3000/auth/github', { code })
      .then((response) => {
        console.log(response);
        TokenManager.setToken(response.data.token);
        this.props.onLogin();
        this.props.history.push('/');
      })
      .catch((error) => {
        this.props.history.push('/');
      });
  }
  render() {
    return <p>Monzo API app</p>;
  }
}

GithubLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default GithubLogin;
