import userModel from "../usersModel.js";
import postsModel from "../postsModel.js";
import commentsModel from "../commentsModel.js";

userModel.hasMany(postsModel);
postsModel.belongsTo(userModel);

userModel.hasMany(commentsModel);
commentsModel.belongsTo(userModel);

postsModel.hasMany(commentsModel);
commentsModel.belongsTo(postsModel);

export { userModel, postsModel, commentsModel };