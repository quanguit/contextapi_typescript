import React, { createContext, useContext } from 'react';
// hardcode

interface Progress {
	lastTime: string;
	status: string;
}

const progressDefault = {
	lastTime: '30/5/2021',
	status: 'In Progress',
};

export const ProgressContext = createContext<Progress>(progressDefault);

const ProgressContextProvider: React.FC = ({ children }) => {
	return (
		<ProgressContext.Provider value={progressDefault}>
			{children}
		</ProgressContext.Provider>
	);
};

export const useProgress = () => {
	return useContext(ProgressContext);
};

export default ProgressContextProvider;
