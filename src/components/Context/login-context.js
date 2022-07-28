import React, { useState, useEffect } from 'react'
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
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem('isLoggedIn');
        if (isUserLoggedIn === '1')
            setIsLoggedIn(true);

        return () => {
            //cleanup
        };
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }
    const loginHandler = (username, password) => {
        console.log('Trying to login', username, password)
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
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
