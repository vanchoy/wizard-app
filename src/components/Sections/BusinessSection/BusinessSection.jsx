import { Link } from 'react-router-dom';

import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../Buttons/Button';

const BusinessSectionStyle = styled.section`
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
const SectionParagraph = styled.p`
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

const SectionSubTitle = styled.h4`
    /* ~  (SubSection Title)  ~ */
        --subsection-s1-title-font-size: 26px;
        --subsection-s1-title-font-family: "Calibri";
        --subsection-s1-title-font-weight: bold;
        --subsection-s1-title-text-color: #234099;
        --subsection-s1-title-text-shadow: 1px 1px 1px #d2d2d2; 
        --subsection-s1-title-text-align: center;
        --subsection-s1-title-text-padding: 0 0 20px 0;
    /* ----------~(end)~---------- */

    /* ~  (SubSection SubTitle)  ~ */
        --subsection-s1-sub-title-font-size: 20px;
        --subsection-s1-sub-title-font-family: "Calibri";
        --subsection-s1-sub-title-font-style: oblique;
        --subsection-s1-sub-title-text-color: #777777;            
        --subsection-s1-sub-title-text-align: center;
        --subsection-s1-sub-title-text-shadow: 1px 1px 1px #e2e2e2;
    /* ----------~(end)~---------- */
`;

const BusinessSection = () => {
    return (
        <BusinessSectionStyle className="grid-s1 section-bg">
            <section className="grid-row-1 grid-col-4-10">
                <header>
                    <h2 className="section-heading-title">Erhverv</h2>
                    <h3 className="section-heading-sub-title">Lær mere om vores erhverv</h3>
                </header>
                <SectionParagraph className="section-paragraph">
                Hvis du er en bilforhandler, du er velkommen for at bestille en eller flere af vores tjenester. Vi kan komme til dig I aftalt tidspunkt og gøre din bil klar til salg. Her kan du se en hurtig oversigt af vores pakker
                </SectionParagraph>
            </section>
            <section className="grid-row-2 grid-col-4-7">
                <header>
                    <SectionSubTitle className="sub-section-heading-title center-2">
                        Pakke #1
                    </SectionSubTitle>
                </header>
                <SectionParagraph className="section-paragraph">
                    - støvsugning af hele bil inkl. bagagerum <br />
                    - interiør rengøring – plastik og vinyl <br />
                    - polering af vinduer
                </SectionParagraph>
            </section>
            <section className="grid-row-2 grid-col-7-10">
                <header>
                    <SectionSubTitle className="sub-section-heading-title center-2">
                        Pakke #2
                    </SectionSubTitle>
                </header>
                <SectionParagraph className="section-paragraph">
                    - støvsugning af hele bil inkl. bagagerum <br />
                    - interiør rengøring – plastik og vinyl <br />
                    - polering af vinduer <br />
                    - rensning af sæder <br />
                    - rensning af måtter <br />
                    - rensning af dørfalser <br />
                    Det er også mulighed at tilkøbe rensning af himmel, rensning af bundtæppe og rensning af enkelte sæder.
                </SectionParagraph>
            </section>
            <section className="grid-row-3 grid-col-4-7">
                <header>
                    <SectionSubTitle className="sub-section-heading-title center-2">
                        Pakke #3
                    </SectionSubTitle>
                </header>
                <SectionParagraph className="section-paragraph">
                    - skumvask af bil <br />
                    - rensning af dørfalser, bagagerum og tankdæksel <br />
                    - rensning af fælge/alufælge <br />
                    - gummibehandling af dæksider <br />
                    - insekter fjernes <br />
                    - motorvask inkl. plastikbehandling <br />
                    - udvendig plastik friskes op <br />
                    - lakbeskyttelse med Quick Detailer
                </SectionParagraph>
            </section>
            <section className="grid-row-3 grid-col-7-10">
                <header>
                    <SectionSubTitle className="sub-section-heading-title center-2">
                        Pakke #4
                    </SectionSubTitle>
                </header>
                <SectionParagraph className="section-paragraph">
                    - skumvask af bil <br />
                    - rensning af dørfalser, bagagerum og tankdæksel <br />
                    - rensning af fælge/alufælge <br />
                    - gummibehandling af dæksider <br />
                    - insekter fjernes <br />
                    - tjære og flyverust fjernes <br />
                    - motorvask inkl. plastikbehandling <br />
                    - udvendig plastik friskes op <br />
                    - 1-trin polering af bil <br />
                    - voksbeskyttelse <br />
                    Det er også mulighed at tilkøbe polering af for og baglygter eller 2/3/4-trins polering.
                </SectionParagraph>
            </section>
            <div className="grid-row-5 grid-col-3-11 center-2">
                <Link to="/mmdi0918/1074175/wizard-app-fixed/kontakt">
                    <Button>
                        Kontakt os
                        <FontAwesomeIcon className="right" icon={faChevronCircleRight} size="1x" />
                    </Button>
                </Link>
            </div>
        </BusinessSectionStyle>
    );
}

export default BusinessSection;