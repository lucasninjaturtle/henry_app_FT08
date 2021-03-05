import multer from "multer";
import { baseDir } from "../utils";

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, baseDir + "/test");
    // cb(null, baseDir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  }
});

const uploadFile = multer({ storage: storage });

export default uploadFile;
