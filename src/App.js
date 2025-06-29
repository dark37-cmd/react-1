import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './comp/navbar';
import Footer from './comp/footer';
import Index from './pages/index';

function App() {
    return (
        <Router>
            <Navbar />
            <Index/>
            <Footer />
        </Router>
    );
}

export default App;
