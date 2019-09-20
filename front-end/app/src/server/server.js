import axios from 'axios';

const SERVER = "";
const http = axios.create();

export default class ServerCalls {

    list() {
        return http.get(SERVER);
    }
}