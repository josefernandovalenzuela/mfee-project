import mongoose, { Document, Schema, Types } from 'mongoose';

interface IPost extends Document {
  title: string;
  image: string;
  description: string;
  category: Types.ObjectId; //id of category
  comments: Types.ObjectId[]; //array of comment ids
}

export const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: [true, 'Title is required']
    },
    image: {
      type: String,
      required: [true, 'Image is required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Category is required']
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: [true, 'Property is required']
      }
    ]
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;
