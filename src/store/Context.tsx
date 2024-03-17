import {createContext, useContext, useState, ReactNode} from 'react';

interface ThemeContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext();

export const useThemeContext = () => useContext(AppContext);

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState('light');
  return (
    <AppContext.Provider value={{theme, setTheme}}>
      {children}
    </AppContext.Provider>
  );
};
