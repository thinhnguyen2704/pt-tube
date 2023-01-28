import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  PlaylistVideos,
  SearchFeed,
} from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/ptube' exact element={<Feed />} />
        <Route path='/ptube/video/:id' element={<VideoDetail />} />
        <Route path='/ptube/channel/:id' element={<ChannelDetail />} />
        <Route path='/ptube/playlist/:id' element={<PlaylistVideos />} />
        <Route path='/ptube/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
