import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Movie {
	id: string;
	title: string;
}

interface Movies {
	movies: Movie[];
	addMovie: (title: string) => void;
	deleteMovie: (id: string) => void;
}

const movieDefault = {
	movies: [],
	addMovie: () => {},
	deleteMovie: () => {},
};

export const MovieContext = createContext<Movies>(movieDefault);

const MovieContextProvider: React.FC = ({ children }) => {
	const [movies, setMovies] = useState<Movie[]>(movieDefault.movies);

	const addMovie = (title: string) =>
		setMovies([...movies, { id: uuidv4(), title: title }]);

	const deleteMovie = (id: string) =>
		setMovies(movies.filter((movie) => movie.id !== id));

	return (
		<MovieContext.Provider value={{ movies, addMovie, deleteMovie }}>
			{children}
		</MovieContext.Provider>
	);
};

export const useMovie = () => {
	return useContext(MovieContext);
};

export default MovieContextProvider;
