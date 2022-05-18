import React from 'react';
export function ThemedToolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
};
class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}

class Button extends React.Component {
  render() {
    let style = { color: 'white' };
    if (this.props.theme === 'dark') {
      style = { color: 'blue' };
    }
    return <button style={style}>Botton</button>;
  }
}
