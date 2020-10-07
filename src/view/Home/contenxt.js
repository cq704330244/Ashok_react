import React from 'react';

const defaultThemes = 'dark';
const ThemeContext = React.createContext({
  theme: defaultThemes,
  toggleTheme: () => {},
});
export default ThemeContext;
