import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { eventTypeController } from "../controller/eventTypeController";

router.get("/search", eventTypeController.searchEventTypeByName);

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
