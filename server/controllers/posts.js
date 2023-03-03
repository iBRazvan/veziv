import PostWork from "../models/postWork.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postWorks = await PostWork.find();

    res.status(200).json(postWorks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostWork(post);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description, image, link } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  const updatedPost = { title, description, link, image, _id: id };
  await PostWork.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await PostWork.findByIdAndRemove(id);

  res.json({ message: "Post deleted succesfully" });
};
