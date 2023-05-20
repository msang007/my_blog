import { Header } from '../components/Header'
import { Footer } from '../components/Footer';

export const Contact = () => {
    return (
        <div>
            <Header />
            <div className='body-container'>
                <img src="/assets/img/Contactimg3.jpg" alt="BackgroundImage" className="background-image" />
                <section className='small-Box-container'>
                    <div className='small-Box'>
                    <i className="fa-solid fa-phone fa-shake"></i>
                        <div className='small-Box-titre'>Numero Telephone</div>
                        <div className='small-Box-Texte'>343-204-3941</div>
                    </div>
                    <div className='small-Box'>
                    <div className='small-Box-titre'>Email</div>
                        <div className='small-Box-Texte'>mamadou.sangare31@icloud.com</div>
                    </div>
                    <div className='small-Box'>
                    <div className='small-Box-titre'>Localisation</div>
                        <div className='small-Box-Texte'>Ottawa/Gatineau</div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}