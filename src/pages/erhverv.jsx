import HelmetComponent from '../components/Seo/seo';
import BusinessSection from '../components/Sections/BusinessSection/BusinessSection';

const BusinessPage = () => {
    return (
        <>
            <HelmetComponent 
                title='Erhverv - Wizard Mobil Bilpleje ' 
                description='Vi har en tilbud til bilforhandlere og bilmekaniker. Vores priser er fleksibel og lav. Vi tilbyder højeste kvalitet af vores tjenester.' 
            />
            <BusinessSection />
        </>
    );
}

export default BusinessPage;