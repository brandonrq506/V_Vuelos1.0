import { useState } from 'react';

import Card from '../../../common/Card';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import styles from './Login-Form.module.css';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const userChangeHandler = e => setUsername(e.target.value);
    const passChangeHandler = e => setPass(e.target.value);

    const submitHandler = e => {
        e.preventDefault();
        console.log(username)
        console.log(pass)
    }

    return (
        <Card className={styles.login} >
            <header className={styles.header} >
                <h2>Please Login</h2>
            </header>
            <form onSubmit={submitHandler}>
                <Input
                    id='username'
                    label='Username'
                    type='text'
                    isValid={true}
                    value={username}
                    onChange={userChangeHandler}
                    onBlur={() => { }}
                />
                <Input
                    id='password'
                    label='Password'
                    type='password'
                    isValid={true}
                    value={pass}
                    onChange={passChangeHandler}
                    onBlur={() => { }}
                />
                <div className={styles.actions} >
                    <Button
                        type='submit'
                        onClick={() => { }}
                        disabled={false}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default LoginForm;

/**
 * The issue with this component is that it re-renders
 * everytime there is a keystroke.
 * I tried using useRef() but can't do that to components
 * I have to further investigate forwardRef();
 * 
 * Also, quiero agragar un tipo de validacion, para
 * hacer que el boton se desabilite y cosas por el estilo.
 */