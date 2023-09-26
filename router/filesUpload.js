const express = require("express");
const router = express.Router();
const {
  addFileData,
  getAllFileData,
  getSingleFileData,
} = require("../controllers/filesUpload");

router.route("/").post(addFileData).get(getAllFileData);

router.get("/:id", getSingleFileData);

module.exports = router;
