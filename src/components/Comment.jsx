import { Avatar, Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import calculateElapsedTime from '../utils/calculateElapsedTime';

const Comment = (comment) => {
  if (!comment) return 'Loading comments';

  const elapsedTime = calculateElapsedTime(
    comment?.comment?.snippet?.topLevelComment?.snippet?.publishedAt
  );

  return (
    <Box>
      <Stack direction='row' gap={1.5}>
        <Link
          to={`/channel/${comment?.comment?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}`}
        >
          <Avatar
            src={
              comment?.comment?.snippet?.topLevelComment?.snippet
                ?.authorProfileImageUrl
            }
            alt={
              comment?.comment?.snippet?.topLevelComment?.snippet
                ?.authorDisplayName
            }
          />
        </Link>
        <Stack direction='column'>
          <Stack direction='row' gap={1.5}>
            <Link
              to={`/channel/${comment?.comment?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}`}
            >
              <Typography variant='subtitle2' fontWeight='bold' color='#FFF'>
                {
                  comment?.comment?.snippet?.topLevelComment?.snippet
                    ?.authorDisplayName
                }
              </Typography>
            </Link>
            <Typography variant='body2' color='gray'>
              {elapsedTime}
            </Typography>
          </Stack>
          <Typography variant='body2' color='#fff'>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  comment?.comment?.snippet?.topLevelComment?.snippet
                    ?.textDisplay,
              }}
            />
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Comment;
