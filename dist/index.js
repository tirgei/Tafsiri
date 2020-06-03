"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const validate_env_1 = require("./utils/validate-env");
const error_404_1 = require("./middleware/error-404");
// Validate env variables
validate_env_1.validateEnv();
// Initialize express app
const app = express_1.default();
// Initialize routes
const routes = new routes_1.Routes();
// Assign routes to app
app.use(routes.router);
app.use(error_404_1.error404);
// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    return console.log(`Server listening on port: ${PORT}`);
});
//# sourceMappingURL=index.js.map