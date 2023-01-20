import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = (channelDetail) => {
	return (
		<Box
			sx={{ 
				boxShadow: "none", 
				borderRadius: "20px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "350px",
				height: "320px",
				margin: "auto",
				left: "0",
				right: "0"
			}}
	>
		<CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#FFF" }}>
			<CardMedia 
				image={channelDetail?.snippet?.thumbnails?.medium?.url}
				alt={channelDetail?.snippet?.title}
				sx={{ borderRadius: "50%", height: "180px", width: "180px", border: "1px solid #e3e3e3"}}
				component="img"
			/>
			<Typography variant="h6">
				{channelDetail?.snippet?.title}
				<CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
			</Typography>
				{channelDetail?.statistics?.subscriberCount && (
					<Typography>
						{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
					</Typography>
				)}
				{channelDetail?.statistics?.videoCount && (
					<Typography>
						{parseInt(channelDetail?.statistics?.videoCount).toLocaleString('en-US')} Videos
					</Typography>
				)}
		</CardContent>
	</Box>
)}
export default ChannelCard;