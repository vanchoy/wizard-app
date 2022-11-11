import ProductElement from "./Product";

import thumb_1 from '../../img/thumb-1.jpg';
import thumb_2 from '../../img/thumb-2.jpg';
import thumb_3 from '../../img/thumb-3.jpg';
import thumb_4 from '../../img/thumb-4.jpg';
import thumb_5 from '../../img/thumb-5.jpg';
import thumb_6 from '../../img/thumb-6.jpg';

const Products = () => { 
    return (
        <div className="grid-s1">
            <ProductElement 
                productClasses="grid-row-1 grid-col-1-5" 
                productImage={thumb_4} 
                productImageAlt="Bil shampoo kosmetik" 
                productName="ADBL Shampoo (Lakrens)" 
                productLink="/produkter/produkt-1" 
            />
            <ProductElement 
                productClasses="grid-row-1 grid-col-5-9" 
                productImage={thumb_3} 
                productImageAlt="Bil kvik voks beskyttelse kosmetik" 
                productName="ABDL QD1 (Quick Detailer)" 
                productLink="/produkter/produkt-2" 
            />
            <ProductElement 
                productClasses="grid-row-1 grid-col-9-13" 
                productImage={thumb_6} 
                productImageAlt="Bil alufælge rens kosmetik" 
                productName="ADBL VAMPIRE (Fælgerens)" 
                productLink="/produkter/produkt-3" 
            />
            <ProductElement 
                productClasses="grid-row-2 grid-col-1-5" 
                productImage={thumb_5} 
                productImageAlt="Bildæk dressing kosmetik" 
                productName="ADBL TIRE DRESSING (Dækfarver)" 
                productLink="/produkter/produkt-4" 
            />
            <ProductElement 
                productClasses="grid-row-2 grid-col-5-9" 
                productImage={thumb_1} 
                productImageAlt="Indvendig rengøring bil kosmetik" 
                productName="ADBL APC PRO (Interiør rengøring)" 
                productLink="/produkter/produkt-5" 
            />
            <ProductElement 
                productClasses="grid-row-2 grid-col-9-13" 
                productImage={thumb_2} 
                productImageAlt="Instrument elementer bil dressing kosmetik" 
                productName="ADBL INTERIOR WOW (Interiør)" 
                productLink="/produkter/produkt-6" 
            />
        </div>
    );
};

export default Products;