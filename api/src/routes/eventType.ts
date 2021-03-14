import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { eventTypeController } from "../controller/eventTypeController";

router.get("/search", eventTypeController.searchEventTypeByName);

export default router;
