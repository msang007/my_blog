import { Header } from '../components/Header'
import { Footer } from '../components/Footer';

export const About = () => {
    return (
        <div>
            <Header />
            <div className="body-container">
            <img src="/assets/img/Aboutimg.jpg" alt="BackgroundImage" className="background-image" />
            <section className='Box'>
                <p className='Box-Paragraph'>
                    Je me nomme Mamadou Sangare et j'ai 24 ans.
                    Je suis Passionne de Lecture, Nature, Ecriture, Musique,
                    Cuisine et de Sport. En dehors de mes Loisirs, J'aime
                    passe du temps avec ma famille et mes amis proches!
                </p>
            </section>
            </div>
            <Footer/>
        </div>
    )
}