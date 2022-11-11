import HelmetComponent from '../components/Seo/seo';
import ContactSection from '../components/Sections/ContactSection/ContactSection';

const ContactPage = () => {
    return (
        <>
            <HelmetComponent 
                title='Kontakt - Wizard Mobil Bilpleje ' 
                description='Her kan du kontakte Wizard Mobil Bilpleje. Har du spørgsmål, eller vil du bestille nogle af vores detailing produkter – du er velkommen til at skrive til os.' 
            />
        <ContactSection />
        </>
    );
}

export default ContactPage;