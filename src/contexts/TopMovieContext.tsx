import React, { createContext, useContext, useReducer } from 'react';
import topMoviesInfo from '../api/getTopMovies';
import { topMovieReducer, TopMovieState } from '../reducers/TopMovieReducer';
import { TopMovieActionType } from '../reducers/types';

// có Promise
interface TopMovie {
	topMovies: TopMovieState;
	getTopMovies: () => Promise<void>;
	toggleWatched: (imdbID: string) => void;
}

const topMoviesDefault: TopMovieState = {
	movies1: [],
};

// phải trùng với cái value trong Provider
const TopMovieContext = createContext<TopMovie>({
	topMovies: topMoviesDefault,
	getTopMovies: () => Promise.resolve(void 0),
	toggleWatched: (imdbID: string) => {},
});

const TopMovieContextProvider: React.FC = ({ children }) => {
	const [topMovies, dispatch] = useReducer(topMovieReducer, topMoviesDefault);

	const getTopMovies = async () => {
		const topMovies = await Promise.all(topMoviesInfo);
		dispatch({
			type: TopMovieActionType.GET_TOP_MOVIES,
			payload: topMovies.map((topmovie) => ({
				...topmovie.data,
				Watched: false,
			})),
		});
	};

	const toggleWatched = (imdbID: string) =>
		dispatch({ type: TopMovieActionType.TOGGLE_WATCHED, payload: imdbID });

	return (
		<TopMovieContext.Provider
			value={{ topMovies, getTopMovies, toggleWatched }}
		>
			{children}
		</TopMovieContext.Provider>
	);
};

export const useTopMovie = () => {
	return useContext(TopMovieContext);
};

export default TopMovieContextProvider;
