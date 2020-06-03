"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const translation_controller_1 = require("../controllers/translation-controller");
// Class to define app routes
class Routes {
    constructor() {
        this.router = express_1.Router();
        this.controller = new translation_controller_1.TranslationController();
        this.initRoutes();
    }
    // Initialite routes
    initRoutes() {
        // Index url
        this.router.get('/', (req, res) => {
            res.status(200).json({
                code: 200,
                message: 'Welcome to the Translator service'
            });
        });
        // Translate
        this.router.get('/translate', (req, res) => {
            this.controller.translationHandler(req, res);
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map