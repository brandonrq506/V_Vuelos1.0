import axios from "axios"

const baseUrl = 'http://localhost:58214/api/Roles/';

export const getRol = async (id) => {
    let response = await axios.get(`${baseUrl}${id}`);
    return response.data.descripcion;
}