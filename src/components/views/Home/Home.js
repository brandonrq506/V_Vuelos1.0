import styles from './Home.module.css';

const Home = () => {
    console.log('Home.js')
    return (
        <main className={styles.main} >
            <h1>Welcome home!</h1>
        </main>
    );
}

export default Home;
