import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation()
    return (
        <>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading mb-4">
                            {t('about-us-title')}
                           
                            </h3>
                            <p>
                                
                            {t('about-us-desc1')}
                            </p>

                            <p>
                            {t('about-us-desc2')}
                            </p>
                            <p>
                            {t('about-us-desc3')}
                            </p>

                        </div>
                    </div>
                </div>

            </section>

        </>

    );
}

export default About;