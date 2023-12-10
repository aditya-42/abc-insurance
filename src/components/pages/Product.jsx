import Slider from '../inc/Slider';
import Image from "../images/car-insurance.jpg"

import img1 from "../images/car-1.jpg"
import img2 from "../images/car-2.webp"
import img3 from "../images/car-3.jpg"

import img4 from "../images/car-4.jpg"
import img5 from "../images/car-5.jpg"
import img6 from "../images/car-6.jpg"

import img7 from "../images/car-7.jpg"
import img8 from "../images/car-8.jpg"
import img9 from "../images/car-9.jpg"


import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Product() {
    const bannerImages = [img1, img2, img3];
    const { t } = useTranslation()
    return (
        <>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">

                            {t('car-insurance-title')}


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

                            {t('car-insurance-save')}


                            </h3>

                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <img src={Image} width="500px" height="250px" />
                        </div>
                        <div className="col-md-6 col-xs-12 mt-4">
                            <h5>

                                {t('car-insurance-left')}</h5>
                            <p className='mt-4 mb-4'>
                            {t('car-insurance-left-desc')}
                            </p>
                            <ul>
                                <li>
                                {t('car-insurance-left-desc-1')}
                                </li>
                                <li>
                                {t('car-insurance-left-desc-2')}
                                </li>
                                <li>
                                {t('car-insurance-left-desc-3')}
                                </li>
                                <li>
                                {t('car-insurance-left-desc-4')}
                                </li>
                            </ul>
                            
                            <Link className="btn btn-warning mt-4" to="/login">{t('car-insurance-left-cta')}</Link>


                        </div>
                    </div>
                </div>
            </section>



            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">

                            {t('car-insurance-includes-title')}


                            </h3>

                        </div>
                    </div>
                </div>

            </section>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={img4} />
                            <div className="card-body">
                                <h5 className="card-title">{t('car-insurance-includes-prod1')}</h5>
                                <p className="card-text">{t('car-insurance-includes-desc1')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={img5} />
                            <div className="card-body">
                                <h5 className="card-title">{t('car-insurance-includes-prod2')}</h5>
                                <p className="card-text">{t('car-insurance-includes-desc2')}</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={img6} />
                            <div className="card-body">
                                <h5 className="card-title">{t('car-insurance-includes-prod3')}</h5>
                                <p className="card-text">{t('car-insurance-includes-desc3')}</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={img7} />
                            <div className="card-body">
                                <h5 className="card-title">{t('car-insurance-includes-prod4')}</h5>
                                <p className="card-text">{t('car-insurance-includes-desc4')}</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={img8} />
                            <div className="card-body">
                                <h5 className="card-title">{t('car-insurance-includes-prod5')}</h5>
                                <p className="card-text">{t('car-insurance-includes-desc5')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={img9} />
                            <div className="card-body">
                                <h5 className="card-title">{t('car-insurance-includes-prod6')}</h5>
                                <p className="card-text">{t('car-insurance-includes-desc6')}</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    );
}

export default Product;