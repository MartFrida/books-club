import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThankYouPage from './pages/ThankYouPage';

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen min-w-screen overflow-hidden box-border">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/thanks' element={<ThankYouPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;