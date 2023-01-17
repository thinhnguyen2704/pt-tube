import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const PlaylistCard = (playlist) => {
	
	const { playlist: { id: { playlistId }, snippet: { thumbnails: { medium: { url } }, title, channelId, channelTitle } } } = playlist;

	return (
		<Card sx={{ width: { xs: '100%', sm:'175px', md: '250px' }, boxShadow: 'none', borderRadius: '5%', margin:'auto' }}>
			<Link to={`/video/${playlistId}`}>
				<CardMedia className="video-img"
					image={url}
					alt={title}
					sx={{ width: { xs: '100%', sm:'175px', md: '250px' }, height:'160px' }}
					component="img"
					/>
			</Link>
			<CardContent sx={{ backgroundColor: '#1e1e1e', height: '60px' }}>
				<Stack direction="column">
					<Link to={`/video/${playlistId}`}>
						<Typography variant="subtitle2" fontWeight="bold" color="#FFF">
							{title.slice(0, 40)}
						</Typography>
					</Link>	
					<Link to={`/channel/${channelId}`}>
						<Typography variant="subtitle2" fontWeight="bold" color="gray">
							{channelTitle}
							<CheckCircle sx={{ fontSize: 11, color: 'gray', ml: '5px' }}/>
						</Typography>
					</Link>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default PlaylistCard;