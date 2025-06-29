import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './../App.css';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    const handleScroll = (sectionId) => {
        setMenuOpen(false); // Закрываем меню при переходе
        if (location.pathname === '/') {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                burgerRef.current &&
                !burgerRef.current.contains(event.target)
            ) {
                setMenuOpen(false); // Закрываем, если клик вне меню и вне бургер-кнопки
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <RouterLink to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="text-primary">Photobase</h1>
            </RouterLink>

            {/* Бургер-кнопка */}
            <button
                type="button"
                className="navbar-toggler"
                onClick={() => setMenuOpen(prev => !prev)}
                ref={burgerRef}
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Меню */}
            <div
                ref={menuRef}
                className={`collapse navbar-collapse justify-content-between py-4 py-lg-0 ${isMenuOpen ? 'show' : ''}`}
                id="navbarCollapse"
            >
                <div className="navbar-nav ms-auto py-0">
                    <button
                        onClick={() => handleScroll('home')}
                        className="nav-item nav-link btn btn-link bg-transparent border-0"
                    >
                        Главная
                    </button>
                    <button
                        onClick={() => handleScroll('about')}
                        className="nav-item nav-link btn btn-link bg-transparent border-0"
                    >
                        О нас
                    </button>
                </div>

                <RouterLink
                    to="/"
                    className="navbar-brand bg-primary py-2 px-4 mx-3 d-none d-lg-block btn-travel"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll('home');
                    }}
                >
                    <h1 className="text-white">Photobase</h1>
                </RouterLink>

                <div className="navbar-nav me-auto py-0">
                    <button
                        onClick={() => handleScroll('services')}
                        className="nav-item nav-link btn btn-link bg-transparent border-0"
                    >
                        Услуги
                    </button>
                    <button
                        onClick={() => handleScroll('projects')}
                        className="nav-item nav-link btn btn-link bg-transparent border-0"
                    >
                        Проекты
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
