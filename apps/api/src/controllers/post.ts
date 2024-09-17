import Post from '../models/post';
import Comment from '../models/comment';

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    // Return all the posts with a 200 status code
    res.status(200).json(posts);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// Get post by id
const getPostById = async (req, res) => {
  // Retrieve the id from the route params
  const { id } = req.params;

  try {
    // Check if we have a post with that id
    const post = await Post.findById(id);

    if (!post) {
      // If we don't find the post return a 404 status code with a message
      return res.status(404).json({ message: 'Post not found' });
      // Note: Remember that json method doesn't interrupt the workflow
      // therefore is important to add a "return" to break the process
    }

    // Return the post with a 200 status code
    res.status(200).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// Create post
const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    // Return the created post with a 201 status code
    res.status(201).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// Update post
const updatePost = async (req, res) => {
  // Retrieve the id from the route params
  const { id } = req.params;

  try {
    // Check and update if we have a post with that id
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });

    // If we don't find the post return a 404 status code with a message
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Return the updated post with a 200 status code
    res.status(200).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// Delete post
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Remove all comments associated with this post
    await Comment.deleteMany({ _id: { $in: post.comments } });

    // Delete the post itself
    const deletedPost = await Post.findByIdAndDelete(id);

    // Return the deleted post with a 200 status code
    res.status(200).json(deletedPost);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ message: error.message });
  }
};

// Create post comment
const createPostComment = async (req, res) => {
  const { id } = req.params;
  try {
    // Verify if the post exists with the given ID
    const post = await Post.findById(id);
    if (!post) {
      // If the post is not found, return a 404 status code with an error message
      return res.status(404).json({ message: 'Post not found' });
    }

    const comment = new Comment(req.body);
    await comment.save();

    post.comments.push(comment.id);
    await post.save();

    // Return the new comment with a 201 status code
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  createPostComment
};
