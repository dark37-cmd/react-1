// Navbar.js
import { Link } from 'react-router-dom';
import './../App.css';

function Footer() {
    return (
        <div className="container-fluid footer position-relative bg-dark text-white-50 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex justify-content-center">
                <div className="row g-5 py-5" style={{ maxWidth: '1100px', width: '100%' }}>
                    <div className="col-lg-6 pe-lg-5">
                        <a href="index.html" className="navbar-brand">
                            <h1 className="display-5 text-primary">Photobase</h1>
                        </a>
                        <p>Принимая во внимание показатели успешности, укрепление и развитие внутренней структуры позволяет оценить значение соответствующих условий активизации.</p>
                        <p><i className="fa fa-map-marker-alt me-2"></i>Где-то</p>
                        <p><i className="fa fa-phone-alt me-2"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope me-2"></i>info@mail.ru</p>
                        <div className="d-flex mt-4 gap-2">
                            <Link to="https://x.com/" className="btn btn-square btn-outline-primary rounded-circle" href="#">
                                <i className="fab fa-x"></i>
                            </Link>
                             <Link to="https://www.whatsapp.com/" className="btn btn-square btn-outline-primary rounded-circle" href="#">
                                <i className="fab fa-whatsapp"></i>
                            </Link>
                            <Link to="https://www.youtube.com/" className="btn btn-square btn-outline-primary rounded-circle" href="#">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link to="https://www.instagram.com/" className="btn btn-square btn-outline-primary rounded-circle" href="#">
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5 justify-content-center d-flex">
                        <div className="row">
                            <div className="">
                                <h4 className="text-light mb-3 fs-5">Быстрые ссылки</h4>
                                <Link to="/about" className="btn btn-link fs-5" href="">О нас</Link>
                                <Link to="https://www.youtube.com/" className="btn btn-link fs-5" href="">Контакты</Link>
                                <Link to="https://www.youtube.com/" className="btn btn-link fs-5" href="">Проекты</Link>
                                <Link to="/" className="btn btn-link fs-5" href="">Главная</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Footer;
