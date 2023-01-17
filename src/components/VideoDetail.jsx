import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer  from 'react-player/youtube';

import { Videos, Comment } from './';

import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { CheckCircle } from '@mui/icons-material';

const VideoDetail = () => {
	const [ videoDetail, setVideoDetail ] = useState(null);
	const [ commentThread, setCommentThread ] = useState(null);
	const [ relatedVideos, setRelatedVideos] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		fetchFromAPI(`videos?part=snippet,statistics,contentDetails&id=${id}`).then((data) => setVideoDetail(data.items[0]));

		fetchFromAPI(`commentThreads?part=snippet&videoId=${id}&maxResults=20`).then((data) => setCommentThread(data.items));

		fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=10`).then((data) => setRelatedVideos(data.items));
	}, [id]);

	if (!videoDetail?.snippet) return 'Loading video';
	if (!commentThread?.length) return 'Loading comment thread';

	
	const { snippet: { title, channelId, channelTitle, description }, statistics: { viewCount, likeCount, commentCount} } = videoDetail;

	return (
		<Box minHeight="95vh">
			<Stack direction={{ xs:'column', md:'row' }} marginLeft="2%">
				<Stack id="top" direction="column">
					<Box id="player" flex={1} >
						<Box sx={{ top: '86px' }}>
							<Box sx={{ position: "relative", paddingTop: "56.25%" }}>
								<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls width="100%" height="100%"/>
							</Box>
							<Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
								{title}
							</Typography>
							<Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
								<Link to={`/channel/${channelId}`}>
									<Typography variant={{ sm: "subtitle6", md: "h6" }} color="#fff" fontWeight="bold">
										{channelTitle}
										<CheckCircle sx={{ fontSize: '12px', color: '#606060', ml: '5px' }}/>
									</Typography>
								</Link>
								<Stack direction="row" alignItems="center" gap="20px">
									<Typography variant="body1">
										{parseInt(viewCount).toLocaleString()} views
									</Typography>
									<Typography variant="body1">
										{parseInt(likeCount).toLocaleString()} likes
									</Typography>
								</Stack>
							</Stack>
							<Box backgroundColor="#282828" borderRadius="1px">
								<Typography variant="body1" color="#fff" >
									{description.toLocaleString()}
								</Typography>
							</Box>
						</Box>
						<Box id="comment-thread" mt='30px'>
							<Stack direction="column" gap="30px">
								<Typography variant="h5" color="#fff" top="30px">
									{commentCount.toLocaleString('en-US')} Comments
								</Typography>
								{commentThread.map((item, idx) => (
									<Box key={idx}>
										{item.snippet.videoId && <Comment comment={item}/>}
									</Box>
								))}
							</Stack>
						</Box>
					</Box>
				</Stack>
				<Box id="related-videos" px={2} justifyContent="center" alignItems="center">
					<Videos videos={relatedVideos} direction="column"/>
				</Box>
			</Stack>
		</Box>
	)
}

export default VideoDetail;