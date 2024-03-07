import axios from 'axios';
import config from '../config';

export default axios.create({
    baseURL: `http://${config.app.host}:${config.app.port}/`,
    headers: {'ngrok-skip-browser-warning': "true"
    }
});

