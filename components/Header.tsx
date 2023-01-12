import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>
                <span>WebDev</span> Newz
            </h1>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas culpa,
            </p>
        </div>
    )
}

export default Header
