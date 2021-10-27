import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Fab } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		floatBtn: {
			position: 'fixed',
			right: '3rem',
			bottom: '3rem',
		},
	})
);

const ToggleThemeBtn = () => {
	const classes = useStyles();
	const { toggleTheme } = useTheme();

	return (
		<div className={classes.floatBtn}>
			<Fab color="primary" variant="extended" onClick={() => toggleTheme()}>
				Toggle theme
			</Fab>
		</div>
	);
};

export default ToggleThemeBtn;
