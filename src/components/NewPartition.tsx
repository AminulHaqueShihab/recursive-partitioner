import { getRandomColor } from '@/functions/getRandomColor';
import { Box, Button, Flex } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import Buttons from './Buttons';

type NewPartitionProps = {
	id: string;
	color: string;
	height: number;
	width: number;
	onRemove: (id: string) => void;
};

const NewPartition: FC<NewPartitionProps> = ({
	id,
	color,
	height,
	width,
	onRemove,
}) => {
	// HOOKS
	// STATE
	const [partitions, setPartitions] = useState<{ id: string; color: string }[]>(
		[]
	);
	const [clicked, setClicked] = useState(false);
	const [isVertical, setIsVertical] = useState<boolean | null>(null);
	// VARIABLES

	// STYLES

	// FUNCTIONS

	const handleSplit = (direction: 'V' | 'H') => {
		if (direction === 'V') {
			setPartitions([
				...partitions,
				{ id: uuidv4(), color: getRandomColor() },
				{ id: uuidv4(), color: getRandomColor() },
			]);
			setIsVertical(true);
		}
		if (direction === 'H') {
			setPartitions([
				...partitions,
				{ id: uuidv4(), color: getRandomColor() },
				{ id: uuidv4(), color: getRandomColor() },
			]);
			setIsVertical(false);
		}
		setClicked(true);
	};
	const handleRemove = (partitionId: string) => {
		setPartitions(partitions.filter(p => p.id !== partitionId));
	};
	// EFFECTS

	// COMPONENTS

	return (
		<Flex
			justify={'center'}
			flexDir={isVertical ? 'row' : 'column'}
			align='center'
			// flex={1}
			position='relative'
			h={`${height}vh`}
			w='full'
			// p={4}
			bg={color}
		>
		
			<Buttons id={id} handleSplit={handleSplit} onRemove={onRemove} />
			{/* <Flex flex={1} h='full' w='full' flexDir={isVertical ? 'row' : 'column'}> */}
				{partitions.map(partition => (
					<NewPartition
						key={partition.id}
						id={partition.id}
						height={isVertical ? height : height / 2}
						width={isVertical ? width / 2 : width}
						color={partition.color}
						onRemove={id => {
							handleRemove(id);
						}}
					/>
				))}
			{/* </Flex> */}
		</Flex>
	);
};

export default NewPartition;
