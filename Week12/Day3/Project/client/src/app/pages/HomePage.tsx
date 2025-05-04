import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { fetchStories } from '../../features/storiesSlice';
import {
  CircularProgress,
  Container,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Theme,
  useTheme,
  Tooltip,
  IconButton,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useThemeToggle } from '../theme/ThemeContext';
import { Brightness7, Brightness4 } from '@mui/icons-material';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {error, loading, data} = useSelector((state: RootState) => state.stories);
    const {user} = useSelector((state: RootState) => state.auth);

    const theme: Theme = useTheme();
    const toggleTheme = useThemeToggle();

  const [showOnlyMine, setShowOnlyMine] = useState(false);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  const filteredStories = (showOnlyMine
    ? data?.filter(story => story.authorId === user?.userId)
    : data) || [];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Tooltip title="Toggle light/dark theme">
        <IconButton onClick={toggleTheme} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Tooltip>
      <Typography variant="h4" gutterBottom>
        Hello, {user?.username}
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={showOnlyMine}
            onChange={(e) => setShowOnlyMine(e.target.checked)}
          />
        }
        label="Show only my stories"
      />

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {!filteredStories?.length ? <Typography>No stories</Typography> : <></>}
          {filteredStories.map((story) => (
            <Card key={story.id} onClick={() => navigate(`/stories/${story.id}`)} sx={{ cursor: 'pointer' }}>
              <CardContent>
                <Typography variant="h6">{story.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  by {story.authorName}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Home;