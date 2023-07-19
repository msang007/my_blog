import { Header } from '../components/Header'
export const Activities = () => {
    return (
        <div>
            <Header />
            <div className='album-container'>
                <img src="/assets/img/Activitiesimg.jpg" alt="BackgroundImage" className="Albumbackground-image" />
                <div className='card-Container'>
                    <div className="card">
                        <img src="/assets/img/musiqueCover.jpg" alt="Image1" />
                        <div className="card-content">
                            <h2>Loisirs</h2>
                            <p>Musique</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/img/gamingImages.jpg" alt="Image1" />
                        <div className="card-content">
                            <h2>Loisirs</h2>
                            <p>Jeux Videos</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/img/sportimg.jpg" alt="Image1" />
                        <div className="card-content">
                            <h2>Loisirs</h2>
                            <p>Sports</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/img/photoImg.jpg" alt="Image1" />
                        <div className="card-content">
                            <h2>Loisirs</h2>
                            <p>Photographie</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/img/campingImg.jpg" alt="Image1" />
                        <div className="card-content">
                            <h2>Loisirs</h2>
                            <p>Nature</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}