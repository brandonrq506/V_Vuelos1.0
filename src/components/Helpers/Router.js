import { Route, Switch, Redirect } from "react-router-dom";
import Home from '../Views/Home';
import Login from '../Views/Login';
import About from '../Views/About';

const Router = props => {
    console.log('Router.js')
    return (
        <Switch>
            <Route path='/' exact >
                {props.isLogged && <Redirect to='/home' />}
                {!props.isLogged && <Redirect to='/login' />}
            </Route>
            <Route path='/home'>
                <Home />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
        </Switch>
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