import { Document } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      [key: string]: any;
    }
  }
}

export interface PostInterface extends Document {
  title: string;
  imageUrl: string;
  content: string;
  creator: Object;
  timestamps: Date;
}

export interface ErrorInterface extends Error {
  statusCode?: any;
  data?: any;
}

export interface UserInterface extends Document {
  email: string;
  password: string;
  status?: string;
  name: string;
  posts: [];
}
