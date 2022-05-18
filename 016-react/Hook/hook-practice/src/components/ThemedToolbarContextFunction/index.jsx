import React from 'react';
import { ThemeContext, themes } from './ThemeContext';
import ThemedButton from './ThemedButton';

// 一个使用 ThemedButton 的中间组件
// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemedButton>
//   );
// }

export class ThemedToolbarContextFunction extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <ThemedButton />
        </ThemeContext.Provider>
        <div>
          {/* <ThemedButton /> */}
        </div>
      </div>
    );
  }
}
