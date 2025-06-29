import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './../App.css';

function Index() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo === 'about') {
            const section = document.getElementById('about');
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div>
            {/* Header */}
            <div className="container-fluid hero-header bg-light py-5 mb-5" id="home">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <p className="text-primary text-uppercase mb-2">Добро пожаловать на Photobase</p>
                            <h1 className="display-4 mb-3">Студия свадеб и портретов расположенная где-то</h1>
                            <p>Как принято считать, диаграммы связей функционально разнесены на независимые элементы...</p>
                            <div className="d-flex align-items-center pt-4">
                                <Link href="#" className="btn btn-primary py-3 px-4 me-5">Узнайте больше</Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid bg-white p-3 w-100 mb-3" src="./img/hero-1.jpg" alt="" />
                                    <img className="img-fluid bg-white p-3 w-50" src="./img/hero-3.jpg" alt="" />
                                </div>
                                <div className="col-6">
                                    <img className="img-fluid bg-white p-3 w-50 mb-3" src="./img/hero-4.jpg" alt="" />
                                    <img className="img-fluid bg-white p-3 w-100" src="./img/hero-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About */}
            <div className="container-xxl py-5" id="about">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="row g-3 img-twice position-relative h-100">
                                <div className="col-6">
                                    <img className="img-fluid bg-light p-3" src="./img/about-1.jpg" alt="" />
                                </div>
                                <div className="col-6 align-self-end">
                                    <img className="img-fluid bg-light p-3" src="./img/about-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="h-100">
                                <p className="text-primary text-uppercase mb-2">О нас</p>
                                <h1 className="display-6 mb-4">Мы креативные и профессиональные фотографы</h1>
                                <p>Как принято считать, диаграммы связей функционально разнесены на независимые элементы</p>
                                <p>Как принято считать, диаграммы связей функционально разнесены на независимые элементы</p>
                                <div className="row g-2 mb-4">
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-3"></i>Качественная продукция
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-3"></i>Пользовательские продукты
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-3"></i>Онлайн заказ
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-3"></i>Доставка на дом
                                    </div>
                                </div>
                                <Link className="btn btn-primary py-3 px-5" href="">Узнать больше</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Services */}
            <div className="container-xxl bg-light py-5 my-5" id="services">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
                        <p className="text-primary text-uppercase mb-2">Наши услуги</p>
                        <h1 className="display-6 mb-4">Мы предоставляем лучшие профессиональные услуги</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="./img/service-1.jpg" alt="" />
                                    <div className="service-overlay">
                                        <Link className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center p-4"><h4>Свадьбы</h4></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="./img/service-2.jpg" alt="" />
                                    <div className="service-overlay">
                                        <Link className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center p-4"><h4>Портреты</h4></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="./img/service-3.jpg" alt="" />
                                    <div className="service-overlay">
                                        <Link className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center p-4"><h4>Мода</h4></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="./img/service-4.jpg" alt="" />
                                    <div className="service-overlay">
                                        <Link className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center p-4"><h4>Редакционный</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Works */}
            <div className="container-xxl py-5" id="projects">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
                        <p className="text-primary text-uppercase mb-2">Наши работы</p>
                        <h1 className="display-6 mb-0">Откройте для себя нашу уникальную и креативную фотосессию</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="project-item">
                                        <img className="img-fluid" src="./img/project-4.jpg" alt="" />
                                        <Link className="project-title btn-underline h5 mb-0" href="./img/project-4.jpg">Воспоминание</Link>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="project-item">
                                        <img className="img-fluid" src="./img/project-1.jpg" alt="" />
                                        <Link className="project-title btn-underline h5 mb-0" href="./img/project-1.jpg">Свадьба</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="project-item">
                                        <img className="img-fluid" src="./img/project-2.jpg" alt="" />
                                        <Link className="project-title btn-underline h5 mb-0" href="./img/project-2.jpg">Портрет</Link>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="project-item">
                                        <img className="img-fluid" src="./img/project-7.jpg" alt="" />
                                        <Link className="project-title btn-underline h5 mb-0" href="./img/project-7.jpg">Путешествовать</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="project-item">
                                        <img className="img-fluid" src="./img/project-7.jpg" alt="" />
                                        <Link className="project-title btn-underline h5 mb-0" href="./img/project-7.jpg">Свадьба</Link>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="project-item">
                                        <img className="img-fluid" src="./img/project-3.jpg" alt="" />
                                        <Link className="project-title btn-underline h5 mb-0" href="./img/project-3.jpg">Воспоминание</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="project-item">
                                        <img className="img-fluid" src="./img/project-4.jpg" alt="" />
                                        <Link className="project-title btn-underline h5 mb-0" href="./img/project-4.jpg">Мода</Link>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="project-item">
                                        <img className="img-fluid" src="./img/project-8.jpg" alt="" />
                                        <Link className="project-title btn-underline h5 mb-0" href="./img/project-8.jpg">Портрет</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
