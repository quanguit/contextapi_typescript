import React, { useEffect } from 'react';
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	List,
	ListItemText,
	ListItemIcon,
	Checkbox,
	ListItem,
} from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { useTopMovie } from '../contexts/TopMovieContext';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		topMoviesHeader: {
			paddingBottom: 0,
		},
		topMoviesList: {
			paddingTop: 0,
		},
		topMovieItem: {
			paddingTop: '2px',
			paddingBottom: '2px',
		},
	})
);

const TopMovies = () => {
	const classes = useStyles();
	const {
		topMovies: { movies1 },
		getTopMovies,
		toggleWatched,
	} = useTopMovie();

	useEffect(() => {
		getTopMovies();
	}, []);

	return (
		<Box mt={1} ml={2}>
			<Card raised>
				<div className={classes.topMoviesHeader}>
					<CardHeader
						title="Top 10 movies of all time"
						titleTypographyProps={{
							variant: 'h4',
							align: 'center',
							color: 'primary',
						}}
					/>
				</div>
				<div className={classes.topMoviesList}>
					<CardContent>
						<List>
							<div className={classes.topMovieItem}>
								{movies1.map((movie) => (
									<ListItem
										button
										key={movie.imdbID}
										onClick={() => toggleWatched(movie.imdbID)}
									>
										<ListItemIcon>
											<Checkbox checked={movie.Watched} />
										</ListItemIcon>
										<ListItemText primary={movie.Title} />
									</ListItem>
								))}
							</div>
						</List>
					</CardContent>
				</div>
			</Card>
		</Box>
	);
};

export default TopMovies;
