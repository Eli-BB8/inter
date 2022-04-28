import * as env from 'env-var';
import './dotenv';

const config = {
    server: {
        port: env.get('PORT').required().asPortNumber(),
    },
    api: {
        vacation: env.get('VACATIONS_URL').required().asString(),
    },
};

export default config;
