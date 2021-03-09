import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { groupController } from "../controller/groupController";

////////////////////////
//// RUTA DE GRUPOs ////
////////////////////////

/* Ruta para CREAR un GRUPO. */
router.post("/", groupController.createGroup);

/* Ruta para BUSCAR un GRUPO x ID  */
router.get("/:id", groupController.getGroup);

/* Ruta para BUSCAR todos los GRUPOs */
router.get("/:id", groupController.getGroups);

/* Ruta para BUSCAR usuarios x GRUPO. */
router.get("/users/:id", groupController.getUserByGroup);

/* Ruta para EDITAR un GRUPO x ID. */
router.put("/:id", groupController.putGroup);

/* Ruta para BORRAR un GRUPO x ID. */
router.delete("/:id", groupController.deleteGroup);


export default router;
