import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-63238.cloudfunctions.net/api'
});

export default instance;

//http://localhost:4208/clone-63238/us-central1/api