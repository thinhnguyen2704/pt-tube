import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = (video) => {
	const { video: { id: { videoId }, snippet: { thumbnails: { medium: { url } }, title, channelId, channelTitle } } } = video;
	
	return (
		<Card sx={{ width: { xs: "100%", sm:"175px", md: "250px" }, boxShadow: "none", borderRadius: "5%", margin:"auto" }}>
			<Link to={`/video/${videoId}`}>
				<CardMedia
					image={url}
					alt={title}
					sx={{ width: { xs: "100%", sm:"175px", md: "250px" }, height:"160px" }}
					component="img"
				/>
			</Link>
			<CardContent sx={{ backgroundColor: "#1e1e1e", height: "60px" }}>
				<Stack direction="column">
					<Link to={`/video/${videoId}`}>
						<Typography variant="subtitle2" fontWeight="bold" color="#FFF">
							<div dangerouslySetInnerHTML={{__html: title.slice(0, 40)}}></div>
						</Typography>
					</Link>	
					<Link to={`/channel/${channelId}`}>
						<Typography variant="subtitle2" fontWeight="bold" color="gray">
							{channelTitle}
							<CheckCircle sx={{ fontSize: 11, color: "gray", ml: "5px" }}/>
						</Typography>
					</Link>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default VideoCard;