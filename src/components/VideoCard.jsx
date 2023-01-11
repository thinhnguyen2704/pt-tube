import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoCard = ({ video }) => {
	const [videoDetail, setVideoDetail] = useState(null)

	useEffect(() => {
		fetchFromAPI(`videos?part=snippet,statistics&id=${video.id.videoId}&maxResults=5`)
		.then((data) => setVideoDetail(data?.items[0]))
	}, [video.id.videoId])

	return (
		<Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: '0' }}>
			<Link to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl}>
				<CardMedia 
					image={video?.snippet?.thumbnails?.high?.url} 
					alt={video?.snippet?.title}
					sx={{ width: 358, height: 180 }}
					/>
			</Link>
			<CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
				<Link to={video?.id?.videoId ? `/channel/${video?.id?.videoId}` : demoVideoTitle}>
					<Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
						{video?.snippet?.title.slice(0, 30) || demoVideoTitle.slice(0, 30)}
					</Typography>
				</Link>	
				<Link to={video?.snippet?.channelId ? `/channel/${video?.snippet?.channelId}` : demoChannelUrl}>
					<Typography variant="subtitle2" fontWeight="bold" color="gray" >
						{video?.snippet?.channelTitle || demoChannelTitle}
						<CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
					</Typography>
				</Link>
				{videoDetail?.statistics?.viewCount && (			
					<Typography fontSize={12} color="white">
						{videoDetail?.statistics?.viewCount} views
					</Typography>
				)}
				<Typography>
					
				</Typography>
			</CardContent>
		</Card>
	)
}

export default VideoCard