import styles from './Header.module.css';

const Header = () => {
    console.log('Header.js');
    return (
        <header className={styles.header} >
            <h1>I am a header</h1>
        </header>
    );
}

export default Header;
