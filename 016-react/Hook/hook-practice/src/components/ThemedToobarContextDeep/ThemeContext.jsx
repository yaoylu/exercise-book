import React from 'react';
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
// 从一个在组件树中嵌套很深的组件中更新 context 是很有必要的。在这种场景下，
// 你可以通过 context 传递一个函数，使得 consumers 组件更新 context：
// 确保传递给 createContext 的默认值数据结构是调用的组件（consumers）所能匹配的！
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
