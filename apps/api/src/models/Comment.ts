import mongoose, { Document, Schema } from 'mongoose';

interface IComment extends Document {
  author: String;
  content: String;
}

export const commentSchema = new Schema<IComment>(
  {
    author: {
      type: String,
      required: [true, 'An Author is required']
    },
    content: {
      type: String,
      required: [true, 'Content is required']
    }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model<IComment>('Comment', commentSchema);

export default Comment;
