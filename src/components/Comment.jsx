import { Box, CardMedia, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const calculateElapsedTime = (publishedTime) => {
	var elapsedTime = new Date() - Date.parse(publishedTime);

	if(elapsedTime >= 31557600000) {
		elapsedTime = Math.floor(elapsedTime/31557600000).toLocaleString('en-US');
		return (elapsedTime >= 2) ? elapsedTime += ' years ago' : elapsedTime += ' year ago';
	} else if(elapsedTime >= 86400000) {
		elapsedTime = Math.floor(elapsedTime/86400000).toLocaleString('en-US');
		return (elapsedTime >= 2) ? elapsedTime += ' months ago' : elapsedTime += ' month ago';
	} else if(elapsedTime >= 3600000) {
		elapsedTime = Math.floor(elapsedTime/3600000).toLocaleString('en-US');
		return (elapsedTime >= 2) ? elapsedTime += ' hours ago' : elapsedTime += ' hour ago';
	} else {
		elapsedTime = Math.floor(elapsedTime/60000).toLocaleString('en-US');
		return (elapsedTime >= 2) ? elapsedTime += ' minutes ago' : elapsedTime += ' minute ago';
	}
}

const Comment = (comment) => {
	if (!comment) return 'Loading comments';

	const elapsedTime = calculateElapsedTime(comment?.comment?.snippet?.topLevelComment?.snippet?.publishedAt);

	return (
		<Box>
			<Stack direction="row" gap={1.5}>
				<Link to={`/channel/${comment?.comment?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}`}>
					<CardMedia
						image={comment?.comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
						sx={{ borderRadius: "50%", height: "40px", width: "40px", border: "1px solid #e3e3e3", margin:"auto"}}
						component="img"
					/>
				</Link>
				<Stack direction="column">
					<Stack direction="row" gap={1.5}>
						<Link to={`/channel/${comment?.comment?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}`}>
							<Typography variant="subtitle2" fontWeight="bold" color="#FFF">
								{comment?.comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
							</Typography>
						</Link>
						<Typography variant="body2" color="gray">
							{elapsedTime}
						</Typography>
					</Stack>
					<Typography variant="body2" color="#fff">
						<div dangerouslySetInnerHTML={{__html: comment?.comment?.snippet?.topLevelComment?.snippet?.textDisplay}}/>
					</Typography>
				</Stack>
			</Stack>
		</Box>
	)
}

export default Comment;