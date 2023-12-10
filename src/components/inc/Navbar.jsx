import { Link } from "react-router-dom";
import './Navbar.css';
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";
import i18next from "i18next";

const languages=[
    {
        code:'en',
        name:'EN',

    },

    {
        code:'fr',
        name:'FR',
    }
]

function Navbar() {

    const currentLanguageCode = cookie.get('i18next') || 'en';
    const { t } = useTranslation()

    return (



        <>
            <div className="nav-container">

                <div className="container col-md-12 mt-4" >
                    <div className="row">
                        <div>
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <Link className="navbar-brand bg-success" to='/'>ABC Insurance</Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" to="/product">{t('nav_product')}</Link>
                                            </li>
                                            <li className="nav-item active">
                                                <Link className="nav-link" aria-current="page" to="/about">{t('nav_about')}</Link>
                                            </li>
                                            <li className="nav-item active">
                                                <Link className="nav-link" aria-current="page" to="/contact">{t('nav_contact')}</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
                                                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                                                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                                                    </svg>
                                                </a>
                                                <ul className="dropdown-menu selected">

                                                    {languages.map(({name, code}) =>(

                                                        <li key={code}><a className="dropdown-item" onClick={()=> i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>{name}</a></li>

                                                    ))}

                                                    
                                                    
                                                </ul>
                                            </li>
                                            <hr />

                                            <Link className='btn btn-warning' to="/login">Login</Link>




                                        </ul>
                                    </div>
                                </div>


                            </nav>

                        </div>
                    </div>
                </div>


            </div>


        </>

    );
}

export default Navbar;
