import { Link } from "react-router-dom";

import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

//Images
import img_1 from "../../../img/dampvask.JPG";
import img_2 from "../../../img/himmel.JPG";
import img_3 from "../../../img/indvendig.JPG";
import img_4 from "../../../img/laeder.jpg";
import img_5 from "../../../img/polering.JPG";
import img_6 from "../../../img/saederens.JPG";
import img_7 from "../../../img/skader.jpg";
import img_8 from "../../../img/srae.jpg";
import img_9 from "../../../img/voks.JPG";


import { Button } from '../../Buttons/Button';


const ServicesStyle = styled.section`
    /* ====== SECTION STYLE SETTINGS ====== */
        /* ~  (Section Syle)  ~ */
            --section-bg-s1-min_height: auto;
            --section-bg-s1-max_height: auto;
            --section-bg-s1-padding: 140px 20px 60px 20px;
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
const ImgContainerAll = styled.div`
    margin: 0 auto;
    height: auto;
    position:relative;
    text-align: center;
`;

const ImgContainer = styled.div`
    max-width: 300px;
    max-height: 200px;
    overflow:hidden;
    text-align: center;
    margin: 0 auto;
    padding: 20px;
    display: inline-block;
    position:relative;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
`;

const ImgContainerImg = styled.img`
    width: 100%;
    transition-duration: .3s;
    max-width: 100%;
    display:block;
    overflow:hidden;
    position:relative;
`;

const ServiceTitle = styled.h3`
    padding: 0 0 20px 0;
    font-size: 26px;
    font-family: "Calibri";
    color: #234099;
    text-shadow: 1px 1px 1px #d2d2d2;
    text-align: center;
    font-weight: bold;
`;

const ServicesSection = () => {
    return (
        <ServicesStyle className="grid-s1 section-bg">
            <section className="grid-row-1 grid-col-3-11">
                <header>
                    <h2 className="section-heading-title">Vores Tjenester</h2>
                    <h4 className="section-heading-sub-title">Vi tilbyder blandt andet</h4>
                </header>
            </section>
            <section className="grid-row-2 grid-col-3-11">
                <ImgContainerAll>
                    <ImgContainer>
                        <ServiceTitle>Dampvask af din bil</ServiceTitle>
                        <ImgContainerImg src={img_1} alt="Dampvask af bil" />                      
                    </ImgContainer>
                    <ImgContainer>
                        <ServiceTitle>Indvendig rengøring</ServiceTitle>
                        <ImgContainerImg src={img_3} alt="Indvendig rengøring af bil" />
                    </ImgContainer>
                    <ImgContainer>
                        <ServiceTitle>Sæderens</ServiceTitle>
                        <ImgContainerImg src={img_6} alt="Sæderens i køretøj" />   
                    </ImgContainer>
                    <ImgContainer>
                        <ServiceTitle>Rensning af himmel </ServiceTitle>
                        <ImgContainerImg src={img_2} alt="Rensning af himmel i bil" />
                    </ImgContainer>
                    <ImgContainer>
                        <ServiceTitle>Læder pleje</ServiceTitle>
                        <ImgContainerImg src={img_4} alt="Bil læder pleje og reparation" />
                    </ImgContainer>
                    <ImgContainer>
                        <ServiceTitle>Pleje af træelementer</ServiceTitle>
                        <ImgContainerImg src={img_8} alt="Bil træelementer pleje og reparation" />
                    </ImgContainer>
                    <ImgContainer>
                        <ServiceTitle>Voks behandling</ServiceTitle>
                        <ImgContainerImg src={img_9} alt="Voks behandling af bil" />
                    </ImgContainer>
                    <ImgContainer>
                        <ServiceTitle>Polering af bil</ServiceTitle>
                        <ImgContainerImg src={img_5} alt="Maskinpolering af bil" />
                    </ImgContainer>
                    <ImgContainer>
                        <ServiceTitle>Reparation af rust</ServiceTitle>
                        <ImgContainerImg src={img_7} alt="Pladearbejde, reparation af rust, lakskader i bilen" />
                    </ImgContainer>
                </ImgContainerAll>
            </section>
            <div className="grid-row-3 grid-col-3-11 center-2">
                    <Link to="/mmdi0918/1074175/wizard-app-fixed/priser">
                        <Button>
                            Se Priser
                        <FontAwesomeIcon className="right" icon={faChevronCircleRight} size="1x" />
                        </Button>
                    </Link>
                </div>
        </ServicesStyle>
    );
}

export default ServicesSection;