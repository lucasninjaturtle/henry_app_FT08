import fs from "fs";
const csv = require("fast-csv");
import { baseDir } from "../utils";

const upload = async (req, res) => {
  try {
    // let tutorials = [];
    let path = baseDir + "/test/" + req.file.filename;
    // baseDir + "/resources/static/assets/uploads/" + req.file.filename;

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (data) => {
        console.log(data);
        // tutorials.push(row);
      })
      .on("end", (e) => {
        console.log(e);
        // Tutorial.bulkCreate(tutorials)
        //   .then(() => {
        //     res.status(200).send({
        //       message:
        //         "Uploaded the file successfully: " + req.file.originalname
        //     });
        //   })
        //   .catch((error) => {
        //     res.status(500).send({
        //       message: "Fail to import data into database!",
        //       error: error.message
        //     });
        //   });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname
    });
  }
};

export default upload;
