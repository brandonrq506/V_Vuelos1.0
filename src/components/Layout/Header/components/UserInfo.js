import { useContext } from 'react';
import LoginContext from '../../../Context/login-context';
import Profilepic from '../../../../assets/ProfilePic.png';

import styles from './UserInfo.module.css';
import Button from '../../../common/Button';

const UserInfo = () => {
    console.log('UserInfo.js')

    const loginContext = useContext(LoginContext);

    if (!loginContext.isLoggedIn)
        return;



    return (
        <div className={styles.profile} >
            <img src={Profilepic} alt="" className={styles.img} />
            <p>{loginContext.user.username}</p>
            <p>{loginContext.user.rol}</p>
            <Button onClick={loginContext.onLogout}>Log Out</Button>
        </div>
    );
}

export default UserInfo;
