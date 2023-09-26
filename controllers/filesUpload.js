const FileUploads = require("../models/filesUpload");

const addFileData = async (req, res) => {
  const { title, description, imageURL, videoURL } = req.body;

  if (!title || !description || !imageURL || !videoURL) {
    res.status(400).json({
      message: "All Fields are mandatory",
    });
    return;
  }

  try {
    const fileUpload = new FileUploads({
      title,
      description,
      imageURL,
      videoURL,
    });
    await fileUpload.save();
    res.status(200).json({
      message: "File Uploaded",
      data: fileUpload,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while uploading file",
    });
  }
};

const getAllFileData = async (req, res) => {
  try {
    const data = await FileUploads.find();
    res.status(200).json({
      message: "Successfully Fetched Data",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching data",
    });
  }
};

const getSingleFileData = async (req, res) => {
  try {
    const data = await FileUploads.findById(req.params.id);
    res.status(200).json({
      message: "Successfully Fetched Data",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching data",
    });
  }
};

module.exports = { addFileData, getAllFileData, getSingleFileData };
