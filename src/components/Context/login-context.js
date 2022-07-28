import React, { useState } from 'react'
import { getUser } from '../api/user';
//We use this context to import information to other files
//Other files get login information from this context object.
const LoginContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (username, password) => { },
    user: {}
});

//Used to wrapped up App.js
export const LoginContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('username') ? true : false
    );

    const logoutHandler = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('correo');
        localStorage.removeItem('rol');
        setIsLoggedIn(false);
    }

    const loginHandler = async (username, password) => {
        let user = await getUser(username)
        if (user.contrasena === password) {
            localStorage.setItem('username', user.usuario1);
            localStorage.setItem('correo', user.correo);
            localStorage.setItem('rol', user.rol);
            setIsLoggedIn(true);
        }
    }

    return <LoginContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}
    >
        {props.children}
    </LoginContext.Provider>
}





export default LoginContext;
