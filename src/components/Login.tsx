import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	TextField,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

interface LoginProps {
	isOpen: boolean;
	handleClose: Dispatch<SetStateAction<boolean>>;
}

// destructure thì phải khai báo interface
const Login = ({ isOpen, handleClose }: LoginProps) => {
	const [username, setUsername] = useState('');
	const { toggleAuth } = useAuth();

	const onLoginSubmit = () => {
		toggleAuth(username);
		setUsername('');
		handleClose(false);
	};

	return (
		<Dialog open={isOpen} onClose={() => handleClose(false)}>
			<DialogContent>
				<TextField
					label="Username"
					value={username}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setUsername(e.target.value)
					}
					required
				/>
			</DialogContent>
			<DialogActions>
				<Button
					color="primary"
					variant="contained"
					onClick={onLoginSubmit}
					disabled={username === ''}
				>
					Login
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Login;
