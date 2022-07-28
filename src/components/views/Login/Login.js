import styles from './Login.module.css';
import LoginForm from './components/Login-Form';

const Login = () => {
    console.log('Login.js')
    return (
        <main className={styles.main}>
            <LoginForm />
        </main>
    );
}

export default Login;
