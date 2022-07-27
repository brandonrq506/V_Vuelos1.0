import axios from "axios"
import { getRol } from "./rol";

const baseUrl = 'http://localhost:58214/api/Usuarios/';

export const getUser = async (username) => {
    let response = await axios.get(`${baseUrl}${username}`);
    let user = response.data;
    let rol = await getRol(user.rol);
    user.rol = rol;
    return user;
}


/* ==== What you need to make this work ====
import { useEffect } from 'react';
import { getUser } from './components/api/user';

  useEffect(() => {
    getUser('aroldanf513');
  }, []);

 */