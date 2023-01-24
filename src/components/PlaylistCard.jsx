import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import calculateElapsedTime from '../utils/calculateElapsedTime';

const PlaylistCard = (playlist) => {
	const { playlist: { id: { playlistId }, snippet: { thumbnails: { medium: { url } }, title, channelId, channelTitle, publishedAt } } } = playlist;

	const elapsedTime = calculateElapsedTime(publishedAt);

	return (
		<Card sx={{ width: { xs: "100%", sm:"175px", md: "250px" }, boxShadow: "none", borderRadius: "5%", margin:"auto" }}>
			<Link to={`/playlist/${playlistId}`}>
				<CardMedia className="video-img"
					image={url}
					alt={title}
					sx={{ width: { xs: "100%", sm:"175px", md: "250px" }, height:"160px" }}
					component="img"
					/>
			</Link>
			<CardContent sx={{ backgroundColor: "#1e1e1e", height: "70px" }}>
				<Stack direction="column">
					<Link to={`/playlist/${playlistId}`}>
						<Typography variant="subtitle2" fontWeight="bold" color="#FFF">
							<div dangerouslySetInnerHTML={{__html: title.slice(0, 40)}} />
						</Typography>
					</Link>	
					<Link to={`/channel/${channelId}`}>
						<Typography variant="subtitle2" fontWeight="bold" color="gray">
							{channelTitle}
							<CheckCircle sx={{ fontSize: 11, color: "gray", ml: "5px" }}/>
						</Typography>
					</Link>
					<Typography variant="subtitle2" color="gray">
						{elapsedTime}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default PlaylistCard;