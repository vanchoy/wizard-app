import HelmetComponent from '../components/Seo/seo';
import PricesSection from '../components/Sections/PricesSection/PricesSection';

const PricesPage = () => {
    return (
        <>
            <HelmetComponent
                title='Vores Priser - Wizard Mobil Bilpleje'
                description='Vores priser er lav og afhænger af bilens størrelse og stand af lak. Vi kan også lave mindre reparationer af rust, pladearbejde eller reparation af læder.'
            />
            <PricesSection />
        </>
    );
}

export default PricesPage;