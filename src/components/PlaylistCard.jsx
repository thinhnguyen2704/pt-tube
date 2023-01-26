import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Stack, Box } from '@mui/material';
import { CheckCircle, PlaylistPlay } from '@mui/icons-material';
import calculateElapsedTime from '../utils/calculateElapsedTime';

const PlaylistCard = (playlist) => {
	const { playlist: { id: { playlistId }, snippet: { thumbnails: { medium: { url } }, title, channelId, channelTitle, publishedAt } } } = playlist;

	const elapsedTime = calculateElapsedTime(publishedAt);

	return (
		<Card sx={{ width: { xs: "100%", sm:"175px", md: "250px" }, boxShadow: "none", borderRadius: "5%", margin:"auto" }}>
			<Box sx={{ position:"relative" }}>
				<Link to={`/playlist/${playlistId}`}>
					<CardMedia
						image={url}
						alt={title}
						sx={{ width: { xs: "100%", sm:"175px", md: "250px" }, height:"160px" }}
						component="img"
					/>
					<Box sx={{ position:"absolute", top:"0", bottom:"0", left:"0", width:"20%", bgcolor:"#000", opacity:"0.65", alignItems:"center" }}>
						<PlaylistPlay sx={{ justifyContent:"center" }}/>
					</Box>
				</Link>
			</Box>
			<CardContent sx={{ bgcolor: "#1e1e1e", height: "70px" }}>
				<Stack direction="column">
					<Link to={`/playlist/${playlistId}`}>
						<Typography variant="subtitle2" fontWeight="bold" color="#fff">
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