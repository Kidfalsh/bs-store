import React, { Component } from 'react';
import { Button } from 'antd';
import { Router } from 'react-router';
import router from 'umi/router';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.counter = 100;
    this.state = {
      cardList: [
        {
          id: 1,
          setup: 'Did you hear about the two silk worms in a race?',
          punchline: 'It ended in a tie',
        },
        {
          id: 2,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
      ],
    }
  }
  login = () => {
    console.log(123)
    console.log(router)
    router.push('/app')
  }
  render() {
    return (
      <div>
        <div>
          <Button onClick={this.login}> 登录 </Button>
        </div>
      </div>
    );
  }
}