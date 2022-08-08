import styles from './Home.module.css';
import SideBar from '../../Layout/SideBar/SideBar';

const Home = () => {
    console.log('Home.js')
    return (
        <main className={styles.main} >
            <SideBar />
            <h1>Welcome home!</h1>
        </main>
    );
}

export default Home;
