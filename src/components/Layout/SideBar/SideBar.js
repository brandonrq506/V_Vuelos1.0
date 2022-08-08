import styles from './SideBar.module.css'

const SideBar = props => {
    return (
        <section className={`${styles.sidebar} ${props.className}`} >
            {props.children}
        </section>
    );
}

export default SideBar;
