import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { eventController } from "../controller/eventController";
import { eventTypeController } from "../controller/eventTypeController";

/////////////////////////
//// RUTA DE EVENTOS ////
/////////////////////////

/* Ruta para CREAR un EVENTO. */
router.post("/", eventController.createEvent);

router.get("/search", eventController.searchEventsByName);

/* Ruta para BUSCAR un EVENTO x TIPO DE EVENTO  */
router.get("/:id", eventController.getEvent);

/* Ruta para BUSCAR todos los EVENTOS */
router.get("/", eventController.getEvents);

/* Ruta para EDITAR un EVENTO x ID. */
router.put("/:id", eventController.putEvent);

/* Ruta para BORRAR un EVENTO x ID. */
router.delete("/:id", eventController.deleteEvent);

//////////////////////////////////
//// RUTA DE TIPOS DE EVENTOS ////
//////////////////////////////////

/* Ruta para CREAR un EVENTO. */
router.post("/type/", eventTypeController.createEventType);

/* Ruta para BUSCAR un EVENTO x TIPO DE EVENTO  */
router.get("/type/:id", eventTypeController.getEventType);

/* Ruta para BUSCAR todos los EVENTOS */
router.get("/type/", eventTypeController.getEventsType);

/* Ruta para EDITAR un EVENTO x ID. */
router.put("/type/:id", eventTypeController.putEventType);

/* Ruta para BORRAR un EVENTO x ID. */
router.delete("/type/:id", eventTypeController.deleteEventType);

export default router;
