import postsModel from "../../../DB/models/postsModel.js";

export const createPosts = async (req, res) => {
  const { title, content, author, userId } = req.body;
  const post = await postsModel.create({
    title,
    content,
    author,
    userId,
  });

  return res.status(200).json({ msg: "added", post });
};

export const readPost = async (req, res) => {
  const { id } = req.params;
  const post = await postsModel.findByPk(id);

  if (!post) {
    return res.status(400).json("not found");
  }

  return res.status(200).json(post);
};

export const updatePost = async (req, res) => {
  const { id, title, content, author } = req.body;

  const post = await postsModel.findOne({ where: { id } });

  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }

  await postsModel.update({ title, content, author }, { where: { id } });

  return res.status(200).json({ msg: "updated" });
};
export const deletingPost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const post = await postsModel.findOne({ where: { id } });

  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }

  if (post.userId != userId) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  post.deletedAt = new Date();
  console.log("Setting deletedAt:", post.deletedAt);
  await post.save();

  return res.status(200).json({ msg: "deleted" });
};
