import { TopMovieActionType } from './types';

export interface TopMovie {
	imdbID: string;
	Title: string;
	Watched: boolean;
}

// export type TopMovieState = TopMovie[];
export interface TopMovieState {
	movies1: TopMovie[];
}

type TopMoviesAction =
	| {
			type: TopMovieActionType.GET_TOP_MOVIES;
			payload: TopMovie[];
	  }
	| {
			type: TopMovieActionType.TOGGLE_WATCHED;
			payload: string;
	  };

	  
export const topMovieReducer = ( state: TopMovieState, action: TopMoviesAction ) => {
	switch (action.type) {
		case TopMovieActionType.GET_TOP_MOVIES:
			return {
				...state,
				movies1: action.payload,
			};
		case TopMovieActionType.TOGGLE_WATCHED:
			return {
				...state,
				movies1: state.movies1.map((topMovie) =>
					topMovie.imdbID === action.payload
						? { ...topMovie, Watched: !topMovie.Watched }
						: topMovie
				),
			};
		default:
			return state;
	}
};
