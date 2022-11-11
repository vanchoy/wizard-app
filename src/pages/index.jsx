import HelmetComponent from '../components/Seo/seo';
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import AboutUs from '../components/Sections/AboutUs/AboutUs';

const MainPage = () => {
    return (
        <>
            <HelmetComponent
                title='Hjem - Wizard Mobil Bilpleje'
                description='Velkommen til Wizard Mobil Bilpleje. Vi en af få virksomheder som tilbyder detailing i Nordjylland. Vi befinder os i Hirtshals, 70km fra Aalborg. Vi kan gøre din bil rent hos dig.' 
            />
            <HeroSection />
            <AboutUs />
        </>
    );
}

export default MainPage;