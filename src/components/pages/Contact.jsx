import '../pages/Contact.css'
import { useTranslation } from "react-i18next";

function Contact() {
    const {t} = useTranslation()
    return (
        <>

            <section className="section contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4 className="main-heading">

                            {t('contact-us-title')}

                            </h4>



                        </div>
                    </div>
                </div>

            </section>

            <section className='two-col'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-xs-12 text-center first">
                            <h5>{t('contact-us-title-col1')}</h5>

                            <p className='text-center mt-4'>

                            {t('contact-us-title-col1-desc')}
                            </p>

                            <button class="btn btn-success">{t('contact-us-title-col1-cta')}</button>
                        </div>
                        <div className="col-md-1 col-xs-12 vertical"></div>

                        <div className="col-md-4 col-xs-12 text-center">
                            <h5>{t('contact-us-title-col2')}</h5>
                            <p className='text-center mt-4'>

                            {t('contact-us-title-col2-call')}<br/>
                                <a href="tel:+1-437-XXX-XXXX">{t('contact-us-title-col2-number')}</a>
                            </p>
                            <p>
                            {t('contact-us-title-col2-weekday')}<br>
                            </br>
                            {t('contact-us-title-col2-weekends')}
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </>

    );
}

export default Contact;