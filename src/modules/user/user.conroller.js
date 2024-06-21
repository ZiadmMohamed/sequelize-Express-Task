import commentsModel from "../../../DB/models/commentsModel.js";
import postsModel from "../../../DB/models/postsModel.js";

export const userDetails = async (req, res) => {
  const { id } = req.params;
  const posts = await postsModel.findAll({
    where: {
      userId: id,
    },
  });

  if (!posts.length) {
    return res.status(400).json("This user has not posted anything.");
  }
  let postIds = posts.map((post) => post.id);
  const comments = await commentsModel.findAll({
    where: {
      userId: id,
      postId: postIds,
    },
  });

  if (!comments) {
    return res
      .status(200)
      .json({ msg: "this user has posts but don't have commengts", posts });
  }

  return res
    .status(200)
    .json({ msg: "done", posts: posts, comments: comments });
};
