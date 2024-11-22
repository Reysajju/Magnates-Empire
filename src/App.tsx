import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BlogPost } from './pages/BlogPost';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { Partners } from './pages/Partners';
import { Press } from './pages/Press';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/press" element={<Press />} />
        </Routes>
      </main>
    </Router>
  );
}