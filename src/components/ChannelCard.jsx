import { Avatar, Box, CardContent, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = (channelDetail) => {			

	return (
		<Box		
			sx={{ 
				boxShadow: "none",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
		>				
			<CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", textAlign: "center", color: "#fff" }}>
				<Avatar 
					src={channelDetail?.channelDetail?.snippet?.thumbnails?.medium?.url}
					alt={channelDetail?.channelDetail?.snippet?.title}
					sx={{ borderRadius: "50%", height: "180px", width: "180px", border: "1px solid #e3e3e3" }}
				/>
				<Typography variant="h6">
					{channelDetail?.channelDetail?.snippet?.title}
					<CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
				</Typography>
				{channelDetail?.channelDetail?.statistics?.subscriberCount && (
					<Typography>
						{parseInt(channelDetail?.channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
					</Typography>
				)}
				{channelDetail?.channelDetail?.statistics?.videoCount && (
					<Typography>
						{parseInt(channelDetail?.channelDetail?.statistics?.videoCount).toLocaleString('en-US')} Videos
					</Typography>
				)}
			</CardContent>
		</Box>
)}
export default ChannelCard;