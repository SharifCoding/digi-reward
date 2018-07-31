import React, { Component } from 'react';
import axios from 'axios';

import Account from '../Account';
import Reward from '../Reward';
import './style.scss';

class Rewards extends Component {
  constructor() {
    super();
    this.state = {
      rewards: [],
      test: [],
    };
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:3000/transaction')
    .then((response) => {
      this.setState({ rewards: response.data });
    })
    .catch(error => console.log(error))
    this.timer = setInterval(() =>  this.setState(prevState => ({ test: !prevState.test })), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  // renderDiv() {
  //   if(this.state.test) {
  //     return (<div>test is true</div>)
  //   }
  //   else {
  //     return (<div>test is false</div>)
  //   }
  // }
  render() {
    const {
        rewards,
      } = this.state;
    return (
      <div className="App">
        <Account />
        <div className="rewards__container">
          {/* refreshes rewards container every 1 second */}
          { this.state.test }
          {/* { this.renderDiv() } */}
        <ul className="rewards rewards__list">
        {
          rewards.map(reward => (
            <Reward
              key={reward._id}
              description={reward.description}
              logo={reward.merchant_logo}
              count={reward.count}
            />
          ))
        }
          </ul>
        </div>
      </div>
    );
  }
}

export default Rewards;
