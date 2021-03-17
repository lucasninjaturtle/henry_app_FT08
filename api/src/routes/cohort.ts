import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { cohortController } from "../controller/cohortController";

//////////////////////////
//// RUTA DE COHORTEs ////
//////////////////////////

/* Ruta para CREAR un COHORTE. */
router.post("/", cohortController.createCohort);

router.post("/bulk", cohortController.bulkCreateCohort);

/* Ruta para BUSCAR COHORTES por NOMBRE. */
router.get("/search", cohortController.searchCohortByName);

/* Ruta para BUSCAR todos los COHORTEs */
router.get("/", cohortController.getCohorts);

/* Ruta para BUSCAR un COHORTE x ID  */
router.get("/:id", cohortController.getCohort);

/* Ruta para BUSCAR usuarios x COHORTE. */
router.get("/users/:id", cohortController.getUserByCohort);

/* Ruta para EDITAR un COHORTE x ID. */
router.put("/:id", cohortController.putCohort);

/* Ruta para BORRAR un COHORTE x ID. */
router.delete("/:id", cohortController.deleteCohort);

export default router;
