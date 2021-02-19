import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-silpymeals.cloudfunctions.net/api'

    //'http://localhost:5001/silpymeals/us-central1/api'
});

export default instance;

//https://us-central1-silpymeals.cloudfunctions.net/api
