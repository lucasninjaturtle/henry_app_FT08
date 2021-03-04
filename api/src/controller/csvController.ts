import { Response } from "express";
import fs from "fs";
const csv = require("csv-parser");
import { db } from "../database/models/index";
import { User } from "../database/models/User";
import { baseDir } from "../utils";

type studentData = {
  Name: string;
  Surname: string;
  Email: string;
  Github: string;
  Cellphone: string;
};

const upload = async (req, res: Response) => {
  try {
    // let tutorials = [];
    let path = baseDir + "/test/" + req.file.filename;
    const studentsData: studentData[] = [];

    fs.createReadStream(path)
      .pipe(csv())
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row: studentData) => {
        console.log("DATA");
        studentsData.push(row);
      })
      .on("end", async (e) => {
        console.log(studentsData);

        await studentsData.map(async (student) => {
          const { Cellphone, Email, Name, Surname, Github } = student;
          const newUser = await db.User.create({
            cellphone: +Cellphone,
            email: Email,
            lastName: Surname,
            name: Name
          });
          const newStudent = await db.Student.create({ github: Github });
          await newUser.setStudent(newStudent);
        });
        res.sendStatus(200);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname
    });
  }
};

export default upload;
