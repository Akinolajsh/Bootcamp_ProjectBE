import mongoose from "mongoose";

interface iAuth {
  userName?: string;
  email?: string;
  password?: string;
}

interface iAuthData extends iAuth, mongoose.Document {}

const authModel = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

export default mongoose.model<iAuthData>("auths", authModel);