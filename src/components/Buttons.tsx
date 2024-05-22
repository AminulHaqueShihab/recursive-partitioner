import { Button, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

type ButtonsProps = {
	id: string;
	handleSplit: (direction: 'V' | 'H') => void;
	onRemove: (id: string) => void;
};

const Buttons: FC<ButtonsProps> = ({ id, handleSplit, onRemove }) => {
	return (
		<Flex position='absolute' gap={2} wrap='wrap'>
			<Button size='xs' onClick={() => handleSplit('V')}>
				V
			</Button>
			<Button size='xs' onClick={() => handleSplit('H')}>
				H
			</Button>
			<Button size='xs' onClick={() => onRemove(id)}>
				-
			</Button>
		</Flex>
	);
};

export default Buttons;
