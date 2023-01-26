import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CardMedia, Stack } from '@mui/material';

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
	document.title = channelDetail?.snippet?.title;

	return (
		<Stack flexDirection="column">
			<Box>
				<CardMedia
					image={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
					sx={{ maxHeight: "300px" }}
					component="img"
				/>
				<ChannelCard channelDetail={channelDetail}/>
				<Box sx={{ justifyContent:"center", alignItems:"center", marginLeft:"2%" }}>
					<Videos videos={videos} />
				</Box>	
			</Box>
		</Stack>
	)
}

export default ChannelDetail;