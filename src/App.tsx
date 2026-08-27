import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollHandler } from './components/ScrollHandler';
import { FreelanceIndicator } from './components/FreelanceIndicator';
import { IntroLoader } from './components/IntroLoader';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';

const AppContent = () => {
  const location = useLocation();
  const hideFooterCTA = ['/', '/work', '/contact'].includes(location.pathname);

  return (
    <>
      <FreelanceIndicator />
      <Navbar />
      <main className="w-full">
        <ScrollHandler />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer hideCTA={hideFooterCTA} />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <div className="relative bg-brand-black min-h-screen selection:bg-brand-white selection:text-brand-black cursor-none overflow-x-hidden">
        <ScrollToTop />
        <CustomCursor />
        <IntroLoader />
        <AppContent />
      </div>
    </Router>
  );
}
