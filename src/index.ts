import express from 'express';
import { Routes } from './routes/routes';
import { validateEnv } from './utils/validate-env';
import { error404 } from './middleware/error-404';

// Validate env variables
validateEnv();

// Initialize express app
const app = express();

// Initialize routes
const routes = new Routes();

// Assign routes to app
app.use(routes.router);
app.use(error404);

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    return console.log(`Server listening on port: ${PORT}`);
});