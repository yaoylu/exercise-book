import React from 'react';
import { ThemeContext } from './ThemeContext';

class ThemedButton extends React.Component {
  render() {
    const { props } = this;
    const theme = this.context;
    return (
      <button
        {...props}
        style={{ backgroundColor: theme.background }}
      >complexButton</button>

    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
