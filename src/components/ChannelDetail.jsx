import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
	const [videos, setVideos] = useState([]);
	const [channelDetail, setChannelDetail] = useState('null');

	const { id } = useParams();

	useEffect(() => {
		const fetchResults = async () => {
			const channelVideos = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date&maxResults=40`);
			setVideos(channelVideos?.items);

			const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
			setChannelDetail(channelData.items[0]);
		}

		fetchResults();
	}, [id]);
	
	if(!channelDetail) return 'Loading channel';

	return (
		<Stack flexDirection="column">
			<Box>
				<Box>
					<div style={{
						background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 45%, rgba(0,212,255,1) 100%)',
						zIndex: 10,
						height: '300px'
					}} />
					<ChannelCard channelDetail={channelDetail}/>
				</Box>	
				<Box sx={{ justifyContent:'center', alignItems:'center', marginLeft:'2%' }}>
					<Box>
						<Videos videos={videos} />
					</Box>
				</Box>	
			</Box>
		</Stack>
	)
}

export default ChannelDetail;