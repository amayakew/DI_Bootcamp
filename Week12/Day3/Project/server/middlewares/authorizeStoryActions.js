const validateRequestParams = (req, res) => {
  const { user } = req;
  const { storyId } = req.params;

  if (!user?.userId || !storyId) {
    res.status(403).json({ message: "Invalid request params" });
    return false;
  };

  return true;
};

const userIsAuthor = async (req, res) => {
  const { user } = req;
  const { storyId } = req.params;

  const story = await getStoryById(storyId);
  if (!story) {
    res.status(404).json({ message: "Story not found" });
    return false;
  };

  if (story.author_id != user.userId) {
    res.status(403).json({ message: "Unauthorized" });
    return false;
  };

  return true;
};

const userIsContributor = async (req, res) => {
  const { user } = req;
  const { storyId } = req.params;

  const contributors = await getStoryContributors(storyId);
    const contributor = contributors.find(c => c.user_id == user.user_id);
    if (!contributor) {
      res.status(403).json({ message: "Unauthorized" });
      return false;
    };

    return true;
};


export const authorizeStoryDelete = async (req, res, next) => {
  if (!validateRequestParams(req, res)) {
    return;
  };

  if (!await userIsAuthor(req, res)) {
    return;
  };

  next();
};

export const authorizeStoryEdit = async (req, res, next) => {
  if (!validateRequestParams(req, res)) {
    return;
  };

  if (!await userIsAuthor(req, res) || !await userIsContributor(req, res)) {
    return;
  };

  next();
};