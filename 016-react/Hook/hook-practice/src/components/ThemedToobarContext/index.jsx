import React from 'react';
const themeContext = React.createContext('light');
export function ThemedToolbarContext(props) {
  return (
    <div>
      <themeContext.Provider value={props.theme}>
      <ThemedButton/>
      </themeContext.Provider>
    </div>
  );
};
class ThemedButton extends React.Component {
  render() {
    return <Button />;
  }
}

class Button extends React.Component {
  // static contextType = themeContext;
  render() {
    let style = { color: 'white' };
    if (this.context === 'dark') {
      style = { color: 'blue' };
    }
    return <button style={style}>ContextBotton</button>;
  }
}
Button.contextType = themeContext;
