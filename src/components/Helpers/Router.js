import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { useContext } from 'react';
import LoginContext from '../Context/login-context';

import Home from '../Views/Home';
import Login from '../Views/Login';
import About from '../Views/About';

const Router = () => {
    console.log('Router.js')

    const loginContext = useContext(LoginContext);

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact >
                    {loginContext.isLoggedIn && <Redirect to='/home' />}
                    {!loginContext.isLoggedIn && <Redirect to='/login' />}
                </Route>
                <Route path='/home'>
                    {!loginContext.isLoggedIn && <Redirect to='/login' />}
                    <Home />
                </Route>
                <Route path='/login'>
                    {loginContext.isLoggedIn && <Redirect to='/home' />}
                    <Login />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;

/**
 * Idealmente cuando se podrá ingresar a la pagina about sin necesidad de login.
 * La idea es que aparezca la información del proyecto, estudiantes y algo para contacto.
 * 
 * Cuando se ingrese a localhost:3000 se evaluará el contexto de Login, de estar el usuario
 * se procederá a redireccionar a la pagina de home, de no estar logueado se enviara a la pagina
 * de login para proceder con la autenticación en la base de datos.
 */