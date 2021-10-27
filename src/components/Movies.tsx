import React, { ChangeEvent, useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Box, Button, TextField, Chip } from '@mui/material';
import { useMovie } from '../contexts/MovieContext';
import { useTheme } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		movieInput: {
			marginRight: '5px',
		},
		movieChip: {
			fontSize: '2rem',
			padding: '30px 10px',
			margin: '5px',
		},
	})
);

const Movies = () => {
	const classes = useStyles();
	const [movie, setMovie] = useState('');
	const { movies, addMovie, deleteMovie } = useMovie();
	const { theme } = useTheme();

	return (
		<>
			<Box display="flex" justifyContent="center" my={5}>
				<div className={classes.movieInput}>
					<TextField
						label="Your favorite movie..."
						variant="outlined"
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setMovie(e.target.value)
						}
						value={movie}
					/>
				</div>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						addMovie(movie);
						setMovie('');
					}}
				>
					Add
				</Button>
			</Box>

			<Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
				{movies.map((movie) => (
					<div className={classes.movieChip}>
						<Chip
							key={movie.id}
							label={movie.title}
							clickable
							color={theme ? 'primary' : 'secondary'}
							onDelete={() => deleteMovie(movie.id)}
							// onDelete={deleteMovie.bind(this, movie.id)}
						/>
					</div>
				))}
			</Box>
		</>
	);
};

export default Movies;
