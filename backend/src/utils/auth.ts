import { Request, Response, NextFunction } from 'express';
import {Config} from "../utils/config.js";

export function checkApiKey(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.get("apikey");

    if (apiKey === Config.apiKey) {
        next();
    } else {
        res.redirect(403, "/unauthorized");
    }

}
    