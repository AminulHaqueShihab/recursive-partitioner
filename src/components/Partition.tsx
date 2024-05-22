// components/Partition.tsx
import { Box, Button } from '@chakra-ui/react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const getRandomColor = () => {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

interface PartitionProps {
	id: string;
	color: string;
	onRemove: (id: string) => void;
}

const Partition: React.FC<PartitionProps> = ({ id, color, onRemove }) => {
	const [partitions, setPartitions] = useState<{ id: string; color: string }[]>(
		[]
	);
	const [isVertical, setIsVertical] = useState<boolean | null>(null);

	const handleSplit = (direction: 'V' | 'H') => {
		const newColor = getRandomColor();
		setPartitions([...partitions, { id: uuidv4(), color: newColor }]);
		setIsVertical(direction === 'V');
	};

	const handleRemove = (partitionId: string) => {
		setPartitions(partitions.filter(p => p.id !== partitionId));
	};

	return (
		<ResizableBox
			width={200}
			height={200}
			minConstraints={[100, 100]}
			maxConstraints={[600, 600]}
			resizeHandles={isVertical ? ['e', 'w'] : ['n', 's']}
			className='box'
			style={{
				display: 'flex',
				flexDirection: isVertical ? 'row' : 'column',
				backgroundColor: color,
				position: 'relative',
				padding: '10px',
				border: '1px solid #ccc',
			}}
		>
			<Box position='absolute' top='2' right='2'>
				<Button size='xs' onClick={() => handleSplit('V')}>
					V
				</Button>
				<Button size='xs' ml={2} onClick={() => handleSplit('H')}>
					H
				</Button>
				<Button size='xs' ml={2} onClick={() => onRemove(id)}>
					-
				</Button>
			</Box>
			{partitions.length === 0 ? (
				<Box flexGrow={1} />
			) : (
				partitions.map(partition => (
					<Partition
						key={partition.id}
						id={partition.id}
						color={partition.color}
						onRemove={handleRemove}
					/>
				))
			)}
		</ResizableBox>
	);
};

export default Partition;
