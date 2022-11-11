import HelmetComponent from '../components/Seo/seo';
import ProductsSection from '../components/Sections/Products/ProductsSection';

const ProductsPage = () => {
    return (
        <>
            <HelmetComponent
                title='Vores Produkter - Wizard Mobil Bilpleje'
                description='Du kan købe kvalitets bil kosmetik fra ADBL hos os. Blandt andet bil shampoo, quick detailer, interiør cleaner, fælgerenser, dæk dressing og interiør dressing.'
            />
            <ProductsSection />
        </>
    );
}

export default ProductsPage;