import { Avatar, Box, CardContent, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = (channelDetail) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        display: 'flex',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
				<Box  sx={{ direction: 'column'}}>
					<Avatar
						src={channelDetail?.channelDetail?.snippet?.thumbnails?.medium?.url}
						alt={channelDetail?.channelDetail?.snippet?.title}
						sx={{
							borderRadius: '50%',
							height: { xs: '100px', md: '180px' },
							width: { xs: '100px', md: '180px' },
							border: '1px solid #e3e3e3',
						}}
					/>
          <Typography variant='h6'>
            {channelDetail?.channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
				</Box>
        <Box sx={{ direction: 'column', ml: '20px' }}>
          {channelDetail?.channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.channelDetail?.statistics?.subscriberCount
              ).toLocaleString('en-US')}{' '}
              Subscribers
            </Typography>
          )}
          {channelDetail?.channelDetail?.statistics?.videoCount && (
            <Typography>
              {parseInt(
                channelDetail?.channelDetail?.statistics?.videoCount
              ).toLocaleString('en-US')}{' '}
              Videos
            </Typography>
          )}
        </Box>
      </CardContent>
    </Box>
  );
};
export default ChannelCard;
