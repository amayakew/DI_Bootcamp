import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, AppDispatch } from "../store";
import { fetchStories, fetchContributorsById } from "../../features/storiesSlice";
import { Box, Typography, CircularProgress, List, ListItem } from "@mui/material";

const StoryViewerPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { currentStory, loading, data, currentContributors } = useSelector((state: RootState) => state.stories);

  useEffect(() => {
    if (!data) {
        dispatch(fetchStories());
        return;
    }
    if (id) dispatch(fetchContributorsById(id as any));
  }, [id, dispatch, data]);

  if (loading || !currentStory) return <CircularProgress />;

  return (
    <Box p={4}>
      <Typography variant="h4">{currentStory.title}</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        By {currentStory.authorName}
      </Typography>
      <Typography variant="body1" mt={2}>{currentStory.content}</Typography>

      <Box mt={4}>
        <Typography variant="h6">Contributors</Typography>
        <List>
          {currentContributors?.map((user: any) => (
            <ListItem key={user.id}>{user.username}</ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default StoryViewerPage;