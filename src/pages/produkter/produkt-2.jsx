import { Link } from "react-router-dom";

import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import HelmetComponent from '../../components/Seo/seo';
import { Button } from '../../components/Buttons/Button';

import thumb_3 from '../../img/thumb-3-2.jpg';

const ProductStyle = styled.section`
    /* ====== SECTION STYLE SETTINGS ====== */
        /* ~  (Section Syle)  ~ */
            --section-bg-s1-min_height: auto;
            --section-bg-s1-max_height: auto;
            --section-bg-s1-padding: 150px 20px 60px 20px;
            --section-bg-s1-bg_color: #fff;
            --section-bg-s1-bg_image: none;
            --section-bg-s1-bg_attachment: fixed;
            --section-bg-s1-bg_position: center;
            --section-bg-s1-bg_repeat: no-repeat;
            --section-bg-s1-bg_blend_mode: normal;
            --section-bg-s1-bg_size: cover;
            --section-bg-s1-box_shadow: inset 0 6px 10px -10px rgba(134, 134, 134, 0.3);
        /* ----------~(end)~---------- */

        /* ~  (Section Title)  ~ */
            --section-s1-title-font-size: 5vh;
            --section-s1-title-font-family: "Calibri";
            --section-s1-title-text-color: #234099;
            --section-s1-title-text-shadow: 1px 1px 1px #d2d2d2;
            --section-s1-title-text-align: center;
            --section-s1-title-text-padding: 0 0 20px 0;
        /* ----------~(end)~---------- */

        /* ~  (Section SubTitle)  ~ */
            --section-s1-sub-title-text-margin: 0 0 20px 0;
            --section-s1-sub-title-font-size: 22px;
            --section-s1-sub-title-font-family: "Calibri";
            --section-s1-sub-title-font-style: italic;
            --section-s1-sub-title-text-color: #494949;
            --section-s1-sub-title-text-shadow: 1px 1px 1px #e2e2e2;
            --section-s1-sub-title-text-align: center;  
        /* ----------~(end)~---------- */
    /* =================|END|================= */
`;

const SectionImage = styled.img`
    /* ~  (Section Image Settings)  ~ */
        --section-s1-image-max-width: 100%;
        --section-s1-image-max-height: 400px;
        --section-s1-image-align: center;
        --section-s1-image-align-self: center;
        --section-s1-image-align-items: center;            
        --section-s1-image-transition: all .3s ease-out;
        --section-s1-image-cursor: pointer;
    /* ----------~(end)~---------- */
`;

const SectionP = styled.p`
    /* ~  (Section Paragraph)  ~ */
        --section-s1-p-padding: 20px;
        --section-s1-p-font-size: 18px;
        --section-s1-p-font-family: "Calibri";
        --section-s1-p-line-height: 1.5;
        --section-s1-p-text-color: #000000;
        --section-s1-p-text-color-s2: #ffffff;
        --section-s1-p-text-align: left;
        --section-s1-p-text-shadow: 1px 1px 1px rgba(173, 173, 173, 0.6);
        --section-s1-p-text-decoration: none;            
    /* ----------~(end)~---------- */
`;
const ProductN2 = () => {
    return (
        <>
            <HelmetComponent
                title='ABDL QD1 (Quick Detailer) - Wizard Mobil Bilpleje'
                description='Velkommen til Wizard Mobil Bilpleje. Vi en af f?? virksomheder som tilbyder detailing i Nordjylland. Vi befinder os i Hirtshals, 70km fra Aalborg. Vi kan g??re din bil rent hos dig.'
            />
            <ProductStyle className="grid-s1 section-bg">
                <section className="grid-row-1 grid-col-3-7">
                    <header>
                        <h2 className="section-heading-title">ABDL QD1 <br />(Quick Detailer)</h2>
                        <h4 className="section-heading-sub-title">L??r mere om produktet</h4>
                    </header>
                    <SectionP className="section-paragraph">
                        Fuldsyntetisk quick detailer. Produktet indeholder en h??j dosis af polymerer og syntetisk voks. Er ideel til fjernelse af st??v, fingeraftryk og lette kalkaflejringer fra h??rdt vand. Produktet har intens duft, fordamper hurtigt og efterlader ingen striber. Ideel til brug efter hver vask. Forl??nger levetiden af voks, og giver glans, dybde og beskyttelse til den n??ste bilvask.
                </SectionP>
                    <SectionP className="section-paragraph center-2">
                        Pris: 1 Liter - 99kr / 10 Liter - 799kr
                </SectionP>
                    <div className="center-2">
                        <Link to="/kontakt">
                            <Button>
                                Bestil
                                <FontAwesomeIcon className="right" icon={faShoppingCart} size="1x" />
                            </Button>
                        </Link>
                    </div>
                </section>
                <div className="grid-row-1 grid-col-7-11 section-image center-2">
                    <SectionImage className="clean" src={thumb_3} alt="Bil kvik voks beskyttelse kosmetik" />
                </div>
            </ProductStyle>
        </>
    );
}

export default ProductN2;