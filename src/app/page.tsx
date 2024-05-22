// pages/index.tsx
'use client'
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Partition from '../components/Partition';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
	const [partitions, setPartitions] = useState([
		{ id: uuidv4(), color: '#f0f0f0' },
	]);

	const handleRemove = (id: string) => {
		setPartitions(partitions.filter(partition => partition.id !== id));
	};

	return (
		<Box p={4}>
			{partitions.map(partition => (
				<Partition
					key={partition.id}
					id={partition.id}
					color={partition.color}
					onRemove={handleRemove}
				/>
			))}
		</Box>
	);
};

export default Home;
