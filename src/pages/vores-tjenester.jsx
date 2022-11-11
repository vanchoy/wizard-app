import HelmetComponent from '../components/Seo/seo';
import ServicesSection from '../components/Sections/OurServices/OurServicesSection';

const ServicesPage = () => {
    return (
        <>
            <HelmetComponent
                title='Vores tjenester - Wizard Mobil Bilpleje'
                description='Vi tilbyder miljøvenlig dampvask af din køretøj, sæderens, voks behandling, polering, læderpleje, pleje af træelementer, reparering af rust og lakskader.'
            />
            <ServicesSection />
        </>
    );
}

export default ServicesPage;