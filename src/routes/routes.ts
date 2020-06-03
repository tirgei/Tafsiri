import { Router, Request, Response } from "express";
import { TranslationController } from "../controllers/translation-controller";

// Class to define app routes
export class Routes {
    public router: Router;
    private controller: TranslationController;

    constructor() {
        this.router = Router();
        this.controller = new TranslationController();

        this.initRoutes();
    }

    // Initialite routes
    private initRoutes() {

        // Index url
        this.router.get('/', (req, res) => {
            res.status(200).json({
                code: 200,
                message: 'Welcome to the Translator service'
            });
        });

        // Translate
        this.router.get('/translate', (req: Request, res: Response) => {
            this.controller.translationHandler(req, res);
        });
    }

}