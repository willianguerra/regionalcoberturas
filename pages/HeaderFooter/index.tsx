import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerPrincipal}>
            <span className={styles.spanImgMenu}>
                <img src="/images/logo.jpg" alt="" />
            </span>
            <p>Home</p>
            <p>Serviços</p>
            <p>Empresa</p>
            <p>Contato</p>
        </header>
    );
}

export function Footer() {
    return (
        <footer className={styles.footerPrincipal}>
            asd
        </footer>
    );
}