import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos } from './';

import { useParams } from 'react-router-dom';

const SearchFeed = () => {
	const [videos, setVideos] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('Home');
	const { searchTerm } = useParams()

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=20`).then((data) => setVideos(data.items));
	}, [searchTerm]);

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}&maxResults=20`).then((data) => setVideos(data.items));
	}, [selectedCategory]);

	return (
		<Stack sx={{ flexDirection: { sx: "column", md: "row"} }}>
			<Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
				<Sidebar 
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				<Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff'}}>
					Copyright 2023 PT Entertainment
				</Typography>
			</Box>
			<Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
				<Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }} >
						Search results for  <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
				</Typography>
				<Box display="flex">
					<Videos videos={videos} />
				</Box>
			</Box>
		</Stack>
	)
}

export default SearchFeed;