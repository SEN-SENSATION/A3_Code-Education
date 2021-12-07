import { Document } from "mongoose";

export interface PostInterface extends Document {
  title: string;
  imageUrl: string;
  content: string;
  creator: Object;
  timestamps: Date;
}
