import styled from "styled-components";
import ContactForm from '../../ContactForm/ContactForm';

const ContactFormSection = styled.section`
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

/* ====== SECTION STYLE #1 SETTINGS ====== */

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

const ContactSection = () => {
    return (
        <ContactFormSection className="grid-s1 section-bg">
            <header className="grid-row-1 grid-col-3-11">
                <h2 className="section-heading-title">Kontakt</h2>
                <h4 className="section-heading-sub-title">Skriv en besked til os</h4>
            </header>
            <section className="grid-row-2 grid-col-4-10">
                <ContactForm />
            </section>
        </ContactFormSection>
    );
}

export default ContactSection;
