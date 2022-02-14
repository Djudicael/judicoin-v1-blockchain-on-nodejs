import axios from "axios";

export const register = async ({ url, newNodeUrl }) => {

    const instance = axios.create({
        baseURL: url
    });
    const response = await instance.post('/register-node', { newNodeUrl });
    return response;

}