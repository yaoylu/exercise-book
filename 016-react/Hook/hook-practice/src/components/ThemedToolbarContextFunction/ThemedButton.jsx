import React from 'react';
import { ThemeContext } from './ThemeContext';

class ThemedButton extends React.Component {
  render() {
    const { theme, toggleTheme } = this.context;
    return (
      <div>
        <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
        }}
      >class button</button>
        <Botton/>
      </div>


    );
  }
}
ThemedButton.contextType = ThemeContext;


class Botton extends React.Component {
  render() {
    const { theme, toggleTheme } = this.context;
    return (
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
        }}
      >class button child</button>

    );
  }
}
Botton.contextType = ThemeContext;
export default ThemedButton;
