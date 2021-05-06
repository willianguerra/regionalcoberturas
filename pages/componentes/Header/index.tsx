import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
    return (
        <header className={styles.headerPrincipal}>
            <nav>
                <ul>
                    <span className={styles.spanImgMenu}>
                        <Image
                            src="/images/logo.png"
                            alt="asd"
                            width={600}
                            height={300}
                        />
                        {/* <p className=>
                            REGIONAL
                        </p> */}
                    </span>

                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/servicos">
                        <li>Serviços</li>
                    </Link>
                    <Link href="/empresa">
                        <li>Empresa</li>
                    </Link>
                    <Link href="/contato">
                        <li>Contato</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}