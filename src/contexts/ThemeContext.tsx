import React, { createContext, useContext, useState } from 'react';

interface Theme {
	theme: boolean;
	toggleTheme: () => void;
}

const themeDefault = {
	theme: true,
	toggleTheme: () => {},
};

export const ThemeContext = createContext<Theme>(themeDefault);

const ThemeContextProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = useState<boolean>(themeDefault.theme);

	const toggleTheme = () => setTheme(!theme);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	return useContext(ThemeContext);
};

export default ThemeContextProvider;
