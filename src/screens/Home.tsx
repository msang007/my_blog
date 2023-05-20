/*
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const Home = () => {
    return (
        <div>
            <Header/>
            <div style={{
                backgroundImage: `url('/assets/img/bodyimg1.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '85vh',
                width: '100%',
                marginTop: 0
            }} className="body">
                <div className="Container">
                    <img src="/assets/img/profilePic.jpg" alt="BackgroundImage" className="fondEcran" />
                    <span className="nom"><h2>Mamadou Sangare</h2></span>

                </div>
            </div>
            <Footer />
        </div>
    )
}
*/
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const Home = () => {
    return (
        <div>
            <Header />
            <div className="body-container">
                <img src="/assets/img/bodyimg1.jpg" alt="BackgroundImage" className="background-image" />
                <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src="/assets/img/profilePic.jpg" alt="PhotoProfile" className="profilePic" />
                    <h2 className="nom">Mamadou Sangare</h2>
                    <p className="Texte-Home">Je suis passionne de Lecture, Jeux Videos, Nature, Sport, Musique, Photography</p>
                </section>
            </div>
            <Footer />
        </div>

    )
}
