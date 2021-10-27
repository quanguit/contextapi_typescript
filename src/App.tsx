import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import MovieContextProvider from './contexts/MovieContext';
import Movies from './components/Movies';
import AuthContextProvider from './contexts/AuthContext';
import { Grid } from '@mui/material';
import TopMovies from './components/TopMovies';
import TopMovieContextProvider from './contexts/TopMovieContext';

const theme = createTheme({
	palette: {
		primary: {
			main: '#113CFC',
		},
		secondary: {
			main: '#A9333A',
		},
		info: {
			main: '#bdbdbd',
		},
	},
});

function App() {
	return (
		<TopMovieContextProvider>
			<AuthContextProvider>
				<MovieContextProvider>
					<ThemeContextProvider>
						<ProgressContextProvider>
							<ThemeProvider theme={theme}>
								<Navbar />
								<Grid container>
									<Grid item xs={4}>
										<TopMovies />
									</Grid>
									<Grid item xs={8}>
										<Movies />
									</Grid>
								</Grid>
								<ToggleThemeBtn />
							</ThemeProvider>
						</ProgressContextProvider>
					</ThemeContextProvider>
				</MovieContextProvider>
			</AuthContextProvider>
		</TopMovieContextProvider>
	);
}

export default App;
