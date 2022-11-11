import styled from "styled-components";

import heroImage from '../../../img/hero-image.jpg';

const HeroSectionStyle = styled.section`
    --section-bg-s1-min_height: auto;
    --section-bg-s1-max_height: auto;
    --section-bg-s1-padding: 220px 20px 200px 20px;
    --section-bg-s1-bg_color: #fff;
    --section-bg-s1-bg_image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("${heroImage}");
    --section-bg-s1-bg_attachment: fixed;
    --section-bg-s1-bg_position: center;
    --section-bg-s1-bg_repeat: no-repeat;
    --section-bg-s1-bg_blend_mode: normal;
    --section-bg-s1-bg_size: cover;
    --section-bg-s1-box_shadow: inset 0 6px 10px -10px rgba(134, 134, 134, 0.3);

/* ====== HERO SECTION SETTINGS ====== */

/* ~  (Hero Section)  ~ */


/* ----------~(end)~---------- */

/* ~  (Big Title Settings <h1>)  ~ */
    --hero-section-big-title-margin: 30px;
    --hero-section-big-title-padding: 0 20px 0 20px;
    --hero-section-big-title-color: #fff;
    --hero-section-big-title-font-family: 'Georgia', serif;
    --hero-section-big-title-font-size: 8vh;
    --hero-section-big-title-align: center;
/* ----------~(end)~---------- */

/* ~  (Sub Title Settings <h2>)  ~ */
    --hero-section-sub-title-margin: 0px;
    --hero-section-sub-title-padding: 0 20px 0 20px;
    --hero-section-sub-title-color: #fff;
    --hero-section-sub-title-font-family: 'Helvetica', sans-serif;
    --hero-section-sub-title-font-size: 6vh;
    --hero-section-sub-title-font-weight: bold;
    --hero-section-sub-title-align: center;
  
/* ----------~(end)~---------- */

/* =================|END|================= */
`;


const HeroSection = () => {
    return (
        <HeroSectionStyle className="grid-s1 section-bg hero-section">
            <header className="grid-row-1 grid-col-3-11">
                <h1>VELKOMMEN</h1>
                <h2>WIZARD MOBIL BILPLEJE</h2>
            </header>
        </HeroSectionStyle>
    );
}

export default HeroSection;