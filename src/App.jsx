import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OrderNoticeSection from './components/OrderNoticeSection';
import AboutSection from './components/AboutSection';
import AcademySection from './components/AcademySection';
import WorksGallery from './components/WorksGallery';
import Footer from './components/Footer';

function App() {
    return (
        <div className="relative min-h-screen text-dark-800 overflow-hidden">
            <Navbar />
            <main>
                <HeroSection />
                <OrderNoticeSection />
                <AboutSection />
                <AcademySection />
                <WorksGallery />
            </main>
            <Footer />
        </div>
    );
}

export default App;
