import {port, cleanEnv} from 'envalid';

// Function to validate all required environment variables are set
export function validateEnv() {
    const variables = {
        PORT: port()
    };

    cleanEnv(process.env, variables);
}