// pages/index.tsx
'use client';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import NewPartition from '@/components/NewPartition';

const Home = () => {
	const [partitions, setPartitions] = useState([
		{ id: uuidv4(), color: '#FFF8F6' },
	]);

	const handleRemove = (id: string) => {
		// if (partitions.length !== 1) {
			setPartitions(partitions.filter(partition => partition.id !== id));
		// }
	};

	return (
		<Box>
			{partitions.map(partition => (
				<NewPartition
					key={partition.id}
					id={partition.id}
					height={100}
					width={100}
					color={partition.color}
					onRemove={handleRemove}
				/>
			))}
		</Box>
	);
};

export default Home;
