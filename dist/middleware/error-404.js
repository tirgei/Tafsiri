"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error404 = void 0;
// Handle unavailable URLs
exports.error404 = (req, res, next) => {
    res.status(404).json({ 'status': 404, 'message': 'Requested resource not found' });
};
//# sourceMappingURL=error-404.js.map