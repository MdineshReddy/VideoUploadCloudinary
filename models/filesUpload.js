const mongoose = require("mongoose");

const FileUploadSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    videoURL: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FileUploads", FileUploadSchema);
