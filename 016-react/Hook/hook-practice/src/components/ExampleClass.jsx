import React from 'react';

export class ExampleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log('mount');
    document.title = `You click ${this.state.count} times`;
  }
  componentDidUpdate() {
    console.log('update');
    document.title = `You click ${this.state.count} times`;
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}>Click Me</button>
      </div>
    );
  }
}

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.state.num);
    }, 3000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      console.log(this.state.num);
    }, 3000);
  }

  render() {
    return (
          <div onClick={ this.setNum }>
              这是一个类组件————{ this.state.num }
          </div>
    );
  }

  setNum = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };
}
