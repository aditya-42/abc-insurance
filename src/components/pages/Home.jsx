import Slider from "../inc/Slider";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import Image1 from "../images/car-insurance.jpg"
import Image2 from "../images/home-insurance.jpg"
import Image3 from "../images/life-insurance.jpg"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './Home.css';


function Home() {
    const bannerImages = [img1, img2, img3];
    const { t } = useTranslation()
    return (
        <>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">

                            {t('home-title')}

                            </h3>

                        </div>
                    </div>
                </div>

            </section>
            <Slider imagesArray={bannerImages}/>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">

                            {t('home-product')}

                            </h3>

                        </div>
                    </div>
                </div>

            </section>

            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src={Image1} class="card-img-top card-img" />
                            <div class="card-body">
                                <h5 class="card-title">{t('home-prod-1')}</h5>
                                <p class="card-text">{t('home-prod-1-desc')}</p>
                                <Link to="/product" class="btn btn-warning">{t('home-learn-more')}</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src={Image2} class="card-img-top card-img" alt="Home Insurance" />
                            <div class="card-body">
                                <h5 class="card-title">{t('home-prod-2')}</h5>
                                <p class="card-text">{t('home-prod-2-desc')}</p>
                                <Link to="/product" class="btn btn-warning">{t('home-learn-more')}</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src={Image3} class="card-img-top card-img" alt="Card Image" />
                            <div class="card-body">
                                <h5 class="card-title">{t('home-prod-3')}</h5>
                                <p class="card-text">{t('home-prod-3-desc')} </p>
                                <Link to="/product" class="btn btn-warning">{t('home-learn-more')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4 className="main-heading mb-4">

                            {t('home-why-us')}

                               

                            </h4>

                            <p>
                            {t('home-why-us-desc')}
                            </p>

                        </div>
                    </div>
                </div>

            </section>


        </>

    );
}

export default Home;
