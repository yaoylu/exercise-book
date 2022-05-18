import React from 'react';
import { ThemeContext, themes } from './ThemeContext';
import { ThemeTogglerButton } from './ThemeTogglerButton';

export class ThemedToolbarContextDeep extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      const { themeObj } = this.state;
      themeObj.theme =  this.state.themeObj.theme === themes.dark
        ? themes.light
        : themes.dark;
      this.setState({
        themeObj,
      });
    };

    // State 也包含了更新函数，因此它会被传递进 context provider。
    this.state = {
      themeObj: {
        theme: themes.light,
        toggleTheme: this.toggleTheme,
      },

    };
  }

  render() {
    // 整个 state 都被传递进 provider
    // const { theme, toggleTheme } = this.state;
    return (
      <ThemeContext.Provider value={this.state.themeObj}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}
