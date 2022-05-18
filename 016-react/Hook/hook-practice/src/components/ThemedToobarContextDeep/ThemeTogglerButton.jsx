import React from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeTogglerButton() {
  // Theme Toggler 按钮不仅仅只获取 theme 值，
  // 它也从 context 中获取到一个 toggleTheme 函数
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme.background,
            color: theme.foreground,
          }}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

