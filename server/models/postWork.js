import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  link: String,
  image: String,
});

const PostWork = mongoose.model("PostWork", postSchema);

export default PostWork;
