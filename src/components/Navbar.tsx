import React, { useEffect, useState } from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	FormControl,
	Select,
	MenuItem,
	SelectChangeEvent,
	Button,
	Chip,
} from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import WelcomeMessage from './WelcomeMessage';
import { useProgress } from '../contexts/ProgressContext';
import { useTheme } from '../contexts/ThemeContext';
import Login from './Login';
import { useAuth } from '../contexts/AuthContext';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		positionSelect: {
			color: 'white',
			borderBottom: '1px solid black',
		},
	})
);

const Navbar = () => {
	const classes = useStyles();
	const [position, setPosition] = useState<string>('Full-stack Developer');
	const [time, setTime] = useState<Date>(() => new Date(Date.now()));
	const [isOpen, setIsOpen] = useState(false);
	const { lastTime, status } = useProgress();
	const { theme } = useTheme();
	const {
		authInfo: { isAuthenticated, username },
		toggleAuth,
	} = useAuth();

	useEffect(() => {
		const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
		return () => clearInterval(timer);
	}, []);

	const onPositionChange = (event: SelectChangeEvent<string>) => {
		setPosition(event.target.value);
	};

	return (
		<AppBar position="static" color={theme ? 'primary' : 'secondary'}>
			<Toolbar>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					width={1}
					py={2}
				>
					<Typography variant="h6">My movies</Typography>
					<Box textAlign="center">
						<WelcomeMessage position={position} />
						<Chip
							label={`Last time working on this project: ${lastTime} - Status: ${status}`}
							color="info"
						/>
						<Box mt={1}>
							<FormControl>
								<Select
									value={position}
									onChange={onPositionChange}
									className={classes.positionSelect}
								>
									<MenuItem value="Full-stack Developer">
										Full-stack Developer
									</MenuItem>
									<MenuItem value="Front-end Developer">
										Front-end Developer
									</MenuItem>
									<MenuItem value="Back-end Developer">
										Back-end Developer
									</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</Box>
					<Box textAlign="center">
						<Box my={1}>
							<Typography variant="h6">{time.toUTCString()}</Typography>
						</Box>
						<Button
							variant="contained"
							color="info"
							onClick={() => {
								isAuthenticated ? toggleAuth('') : setIsOpen(true);
							}}
						>
							{isAuthenticated ? 'Logout' : 'Login'}
						</Button>
					</Box>
					<Login isOpen={isOpen} handleClose={setIsOpen} />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
