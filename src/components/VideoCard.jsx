import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoCard = ({ video }) => {
	// const [videoDetail, setVideoDetail] = useState(null)

	// useEffect(() => {
	// 	fetchFromAPI(`videos?part=snippet,statistics&id=${video.id.videoId}`)
	// 	.then((data) => setVideoDetail(data?.items[0]));
	// }, [video.id.videoId]);
	return (
		<Card sx={{ width: { xs: '100%', sm:'358px', md: '320px' }, boxShadow: 'none', borderRadius: '0' }}>
			<Link to={`/video/${video?.id?.videoId}`}>
				<CardMedia 
					image={video?.snippet?.thumbnails?.high?.url} 
					alt={video?.snippet?.title}
					sx={{ width: { xs: '100%', sm:'358px', md: '320px' }, height: 180 }}
					/>
			</Link>
			<CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
				<Link to={`/video/${video?.id?.videoId}`}>
					<Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
						{video?.snippet?.title.slice(0, 30)}
					</Typography>
				</Link>	
				<Link to={`/channel/${video?.snippet?.channelId}`}>
					<Typography variant="subtitle2" fontWeight="bold" color="gray" >
						{video?.snippet?.channelTitle}
						<CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
					</Typography>
				</Link>
				{/* {videoDetail?.statistics?.viewCount && (			
					<Typography fontSize={12} color="white">
						{videoDetail?.statistics?.viewCount} views
					</Typography>
				)} */}
			</CardContent>
		</Card>
	)
}

export default VideoCard