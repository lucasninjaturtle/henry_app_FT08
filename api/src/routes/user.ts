import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { users } from "../controller/userController";
import { studentController } from "../controller/studentController";
import { projectManagerController } from "../controller/projectManager";
import { instructorController } from "../controller/instructorController";
import { adminController } from "../controller/adminController";

//////////////////////////
//// RUTA DE ALUMNOs /////
//////////////////////////

/* Ruta para CREAR un ALUMNOS. */
router.post("/student/", studentController.createStudent);

router.post("/student/bulk", studentController.bulkCreateStudents);

/* Ruta para BUSCAR un ALUMNOS x ID  */
router.get("/student/:idOrGithub", studentController.getStudent);

/* Ruta para EDITAR un ALUMNOS x ID. */
router.put("/student/:id", studentController.putStudent);

/* Ruta para BORRAR un ALUMNOS x ID. */
router.delete("/student/:id", studentController.deleteStudent);

/////////////////////
//// RUTA DE PMs ////
/////////////////////

/* Ruta para CREAR un PM. */
router.post("/projectmanager/", projectManagerController.createPM);

/* Ruta para BUSCAR un PM x ID  */
router.get("/projectmanager/:id", projectManagerController.getPM);

/* Ruta para EDITAR un PM x ID. */
router.put("/projectmanager/:id", projectManagerController.putPM);

/* Ruta para BORRAR un PM x ID. */
router.delete("/projectmanager/:id", projectManagerController.deletePM);

//////////////////////////////
//// RUTA DE INSTRUCTORES ////
//////////////////////////////

/* Ruta para CREAR un INSTRUCTOR. */
router.post("/instructor/", instructorController.createInstructor);

/* Ruta para BUSCAR un INSTRUCTOR x ID  */
router.get("/instructor/:id", instructorController.getInstructor);

/* Ruta para EDITAR un INSTRUCTOR x ID. */
router.put("/instructor/:id", instructorController.putInstructor);

/* Ruta para BORRAR un INSTRUCTOR x ID. */
router.delete("/instructor/:id", instructorController.deleteInstructor);

////////////////////////
//// RUTA DE ADMINs ////
////////////////////////

/* Ruta para CREAR un ADMIN. */
router.post("/admin/", adminController.createAdmin);

/* Ruta para BUSCAR un ADMIN x ID  */
router.get("/admin/:id", adminController.getAdmin);

/* Ruta para EDITAR un ADMIN x ID. */
router.put("/admin/:id", adminController.putAdmin);

/* Ruta para BORRAR un ADMIN x ID. */
router.delete("/admin/:id", adminController.deleteAdmin);

//////////////////////////
//// RUTA DE USUARIOs ////
//////////////////////////

/* Ruta para CREAR USUARIOS */
router.post("/", users.createUsers);

/* Ruta para BUSCAR todos los USUARIOS */
router.get("/", users.getUsers);

/* Ruta para BUSCAR un USUARIO x GH-Name */
// router.get("/gh/:name", users.getUserByGh);

/* Ruta para BUSCAR un USUARIO x ID */
router.get("/:id", users.getUserById);

/* Ruta para BUSCAR USUARIOS x ID COHORT. */
router.get("/usersByCohort/:id", users.getUsersByCohort);

/* Ruta para ACTUALIZAR USUARIO X ID */
router.put("/:id", users.putUserById);

/* Ruta para BUSCAR USUARIOS x TIPO. */
router.get("/type/:typeName", users.getUsersByType);

/* Ruta para BUSCAR USUARIOS x grupo */
router.get("/group/:id", users.getUsersByGroup);

export default router;
