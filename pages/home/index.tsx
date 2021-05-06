import styles from './styles.module.scss'

export function Principal() {
    return (
        <div>
            <div className={styles.slider}>
                AQUI VAI TER UM LOOPING DE FOTOS DA REGIONAL
            </div>
            <div className={styles.lineCard}>
                {/* vai mandar para tela empresa */}
                <div className={styles.cardInfos}>
                    <h2 >
                        A Empresa
                    </h2 >
                    <p>
                        A Empresa Situada em Indaial-SC,
                        a Regional Coberturas atua no mercado de coberturas
                        industriais, Oferecendo um serviço especializado de colocação,
                        manutenção de telhados em altura.
                    </p>
                </div>
                {/* vai mandar para tela serviços */}
                <div className={styles.cardInfos}>
                    <h2>
                        Serviços
                    </h2>
                    <p>
                        Nosso trabalho é apoiado e desenvolvido com base na Norma Regulamentadora NR 18/35 do Ministério do Trabalho,
                        que regulamenta as condições e o meio ambiente do trabalho na indústria da construção civil.
                    </p>
                </div>
                {/* vai mandar para tela de orçamento */}
                <div className={styles.cardInfos}>
                    <h2>Orçamento</h2>

                    <p>
                        <b>Regional Coberturas</b>
                    </p>
                    <p>
                        Rua 25 de Janeiro, 540,Sala 1, Bairro Carijós, Indaial-SC CEP:89130-000
                        Fone:(47) 3394-0124 / 9131-8959
                        E-mail / Skype: regional@regionalcoberturas.com.br
                    </p>
                </div>
            </div>
        </div>
    );
}