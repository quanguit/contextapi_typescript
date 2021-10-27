import React from 'react';
import { Box } from '@mui/system';
import { useAuth } from '../contexts/AuthContext';

interface WelcomeMessageProps {
	position: string;
	country?: string;
}

const WelcomeMessage = ({
	position,
	country = 'Vietnam',
}: WelcomeMessageProps) => {
	const {
		authInfo: { username },
	} = useAuth();

	return (
		<Box mb={1}>
			Welcome {username} - {position} from {country}
		</Box>
	);
};

export default WelcomeMessage;
