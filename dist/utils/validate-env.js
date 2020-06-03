"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
const envalid_1 = require("envalid");
// Function to validate all required environment variables are set
function validateEnv() {
    const variables = {
        PORT: envalid_1.port()
    };
    envalid_1.cleanEnv(process.env, variables);
}
exports.validateEnv = validateEnv;
//# sourceMappingURL=validate-env.js.map