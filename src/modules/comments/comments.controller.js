import commentsModel from "../../../DB/models/commentsModel.js";

export const createcomments = async (req, res) => {
  const { content, userId, postId } = req.body;
  const comments = await commentsModel.create({ content, userId, postId });

  return res.status(200).json({ msg: "added", comments });
};

export const readcomments = async (req, res) => {
  const { id } = req.params;
  const comments = await commentsModel.findByPk(id);

  if (!comments) {
    return res.status(400).json("not found");
  }

  return res.status(200).json(comments);
};

export const updatecomments = async (req, res) => {
  const { id, content, userId, postId } = req.body;

  const comments = await commentsModel.findOne({ where: { id } });

  if (!comments) {
    return res.status(404).json({ msg: "comments not found" });
  }

  await commentsModel.update({ content, userId, postId }, { where: { id } });

  return res.status(200).json({ msg: "updated" });
};

export const deletingcomments = async (req, res) => {
  const { id } = req.params;

  const comments = await commentsModel.findOne({ where: { id } });

  if (!comments) {
    return res.status(404).json({ msg: "comments not found" });
  }

  comments.destroy();

  return res.status(200).json({ msg: "deleted" });
};
