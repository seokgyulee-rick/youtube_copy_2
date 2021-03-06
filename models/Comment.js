import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
  text: {
    type: String,
    required: "text is required"
  },
  date: {
    type: Date,
    default: Date.now()
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "mongUser"
  },
  name: {
    type: String,
    required: "name is required"
  }
});

const model = mongoose.model("mongComment", CommentSchema);

export default model;
