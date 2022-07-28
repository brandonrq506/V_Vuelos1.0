import styles from './Header.module.css';
import Logo from '../../../assets/Logo.png';
import UserInfo from './components/UserInfo';

const Header = () => {
    console.log('Header.js');

    return (
        <header className={styles.header} >
            <img src={Logo} alt="" />
            <UserInfo />
        </header>
    );
}

export default Header;