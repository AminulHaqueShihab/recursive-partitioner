'use client';

import { store } from '@/store/store';
import theme from '@/theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</Provider>
	);
};

export default Providers;
