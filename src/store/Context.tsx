import { View, Text } from 'react-native'
import {createContext,useContext,useState} from 'react'

const AppContext = createContext();

export const useThemeContext = () => useContext(AppContext)

export const ThemeContextProvider = ({children}) => {

    const [theme,setTheme] = useState('light');
    return (
        <AppContext.Provider value={{theme,setTheme}}>
            {children}
        </AppContext.Provider>
    )
}