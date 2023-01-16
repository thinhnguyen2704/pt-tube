// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video }) => {
	return (
		<Card sx={{ width: { xs: '100%', sm:'175px', md: '250px' }, boxShadow: 'none', borderRadius: '0', margin:'auto' }}>
			<Link to={`/video/${video?.id?.videoId}`}>
				<CardMedia className="video-img"
					image={video?.snippet?.thumbnails?.medium?.url}
					alt={video?.snippet?.title}
					sx={{ width: { xs: '100%', sm:'175px', md: '250px' }, height:'160px' }}
					component="img"
					/>
			</Link>
			<CardContent sx={{ backgroundColor: '#1e1e1e', height: '60px' }}>
				<Link to={`/video/${video?.id?.videoId}`}>
					<Typography variant="subtitle1" fontWeight="bold" color="#FFF">
						{video?.snippet?.title.slice(0, 30)}
					</Typography>
				</Link>	
				<Link to={`/channel/${video?.snippet?.channelId}`}>
					<Typography variant="subtitle2" fontWeight="bold" color="gray">
						{video?.snippet?.channelTitle}
						<CheckCircle sx={{ fontSize: 11, color: 'gray', ml: '5px' }}/>
					</Typography>
				</Link>
			</CardContent>
		</Card>
	)
}

export default VideoCard;