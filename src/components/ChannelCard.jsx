import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channelDetail }) => {
	return (
		<Box
			p={2}
			sx={{ 
				boxShadow: 'none', 
				borderRadius: '20px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				overflowY: 'auto',
				width: { xs: '356px', md: '320px' },
				height: '326px',
				margin: 'auto'
			}}
		>
		<CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF' }}>
			<CardMedia 
				image={channelDetail?.snippet?.thumbnails?.high?.url}
				alt={channelDetail?.snippet?.title}
				sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
			/>
			<Typography variant="h6">
				{channelDetail?.snippet?.title}ç
				<CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
			</Typography>			
				{channelDetail?.statistics?.subscriberCount && (
					<Typography>
						{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
					</Typography>
				)}
				{channelDetail?.statistics?.subscriberCount && (
					<Typography>
						{parseInt(channelDetail?.statistics?.videoCount).toLocaleString()} Videos
					</Typography>
				)}
		</CardContent>
	</Box>
)}
export default ChannelCard