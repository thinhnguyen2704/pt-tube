import { Box, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import VideoCard from './VideoCard';

const PlaylistVideos = () => {
  const { id } = useParams();

  const [playlistVideos, setPlaylistVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`playlistItems?part=snippet&playlistId=${id}`).then((data) =>
      setPlaylistVideos(data.items)
    );
  }, [id]);

  return (
    <Stack direction='column' flexWrap='wrap' justifyContent='start' gap={2}>
      {playlistVideos.map((item, idx) => (
        <Box key={idx}>
          {item.snippet.resourceId.videoId && (
            <VideoCard video={item} videoId={item.snippet.resourceId.videoId} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default PlaylistVideos;
