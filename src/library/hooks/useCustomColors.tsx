import { useColorModeValue } from '@chakra-ui/react';

type ColorType = {
	// textGray: string;
};

const useCustomColors: any = (): ColorType => {
	// const textGray = useColorModeValue('grey-text.light', 'grey-text.dark');

	const colors: ColorType = {
		// textGray,
	};

	return colors;
};

export default useCustomColors;
