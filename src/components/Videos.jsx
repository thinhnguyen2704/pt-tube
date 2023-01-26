import { Stack, Box } from '@mui/material';
import { PlaylistCard, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'Loading videos...';

  return (
    <Stack
      flexDirection={direction || 'row'}
      flexWrap='wrap'
      justifyContent='flex-start'
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && (
            <VideoCard video={item} videoId={item.id.videoId} />
          )}
          {item.id.playlistId && <PlaylistCard playlist={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
