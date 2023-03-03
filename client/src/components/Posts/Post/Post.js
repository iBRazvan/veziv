import React from "react";

import { Card, CardMedia, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

import { deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.image}
        title={post.title}
      />

      <div className={classes.overlay}>
        <Typography variant="h6">{post.title}</Typography>

        <Typography variant="body2">{post.description}</Typography>
      </div>

      <div className={classes.underlay}>
        <Typography variant="body2">{post.link}</Typography>
        <div className={classes.underlaybuttons}>
          <DeleteIcon
            cursor="pointer"
            onClick={() => dispatch(deletePost(post._id))}
          />
          <EditIcon
            cursor="pointer"
            onClick={() => {
              setCurrentId(post._id);
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default Post;
