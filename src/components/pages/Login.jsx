import { useTranslation } from "react-i18next";


function Login() {
    const { t } = useTranslation()
    return (
        <>

            <section className="section contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4 className="main-heading">

                            {t('login-title')}

                            </h4>



                        </div>
                    </div>
                </div>

            </section>
            <section className='two-col mt-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 text-center first">
                            <h5>{t('login-col1-title')}</h5>

                            <p className='text-center mt-4'>

                                <div class="input-group input-group-lg">
                                   
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder={t('login-col1-login')}/>
                                </div>
                                <br />
                                <div class="input-group input-group-lg">
                                   
                                    <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder= {t('login-col1-password')}/>
                                </div>

                                <button class="btn btn-warning mt-4">Login</button>
                            </p>

                            
                        </div>
                        <div className="col-md-1 col-xs-12 vertical"></div>

                        <div className="col-md-4 col-xs-12 text-center">
                            <h5>{t('login-col2-title')}</h5>
                            <p className='text-center mt-5'>

                            {t('login-col2-desc')}
                            </p>

                            <button class="btn btn-success mt-5">{t('login-col2-cta')}</button>
                        </div>
                    </div>

                </div>
            </section>

        </>

    );
}

export default Login;