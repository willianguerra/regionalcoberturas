import { Header } from "./componentes/Header/index"
import { Footer } from "./componentes/Footer/index"
import { Principal } from "./componentes/Home/index"


export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Principal />
            </main>
            <Footer />

        </>
    )
}