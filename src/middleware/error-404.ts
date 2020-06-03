import { Request, Response, NextFunction } from "express";

// Handle unavailable URLs
export const error404 = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({'status': 404, 'message': 'Requested resource not found'});
}