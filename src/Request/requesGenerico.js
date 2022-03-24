import axios from "axios";



export const requestGenerico = {
    get: (url) => axios.get(url),
    post :  (url, body)=> axios.post(url, body),
    put : (url, body)=> axios.put(url, body),
    delete: (url, body)=> axios.delete(url, body),
}
