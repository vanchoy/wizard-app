import styled from "styled-components";

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterWidgetSection = styled.section`
    --section-bg-s1-min_height: auto;
    --section-bg-s1-max_height: auto;
    --section-bg-s1-padding: 40px;
    --section-bg-s1-bg_color: #fafafa;
    --section-bg-s1-bg_image: none;
    --section-bg-s1-bg_attachment: local;
    --section-bg-s1-bg_position: center;
    --section-bg-s1-bg_repeat: no-repeat;
    --section-bg-s1-bg_blend_mode: normal;
    --section-bg-s1-bg_size: cover;
    --section-bg-s1-box_shadow: inset 0 6px 10px -10px rgba(134, 134, 134, 0.3);
`;

const FooS1WidgetArea = styled.section`
/* ====== FOOTER WIDGET AREA STYLE #1 SETTINGS ====== */

/* (wa) => widget area */ 
  /* ~  (Widget Area Settings)  ~ */     
      --foo-s1-wa-text-align: center; /* If you want all of the contents to be left, center or right aligned */
      --foo-s1-wa-padding: 0 20px 0 20px;
      --foo-s1-wa-display: block;
  /* ----------~(end)~---------- */

  /* ~  (Widget Area - Title Text Settings)  ~ */
      --foo-s1-wa-title-font-size: 26px;
      --foo-s1-wa-title-font-family: "Calibri";
      --foo-s1-wa-title-text-color: #234099;
      --foo-s1-wa-title-padding: 15px 0 10px 0;
  /* ----------~(end)~---------- */
  /* ~  (Widget Area - Paragraph + p>a Text Settings)  ~ */
  --foo-s1-wa-p-font-size: 16px;
  --foo-s1-wa-p-font-family: "Calibri";
  --foo-s1-wa-p-text-color: #676767;
  --foo-s1-wa-p-text-shadow: 1px 1px 1px rgba(68, 68, 68, 0.25);
  /* ----------~(end)~---------- */

  /* ~  (Widget Area - Links (li>a) Settings)  ~ */
      --foo-s1-wa-li-font-size: 16px;
      --foo-s1-wa-li-font-family: "Calibri";
      --foo-s1-wa-li-text-color: #999;
      --foo-s1-wa-li-text-shadow: 1px 1px 1px rgba(68, 68, 68, 0.25);
  /* ----------~(end)~---------- */

  /* ~  (Widget Area - All Links Hover \within a (<p>) and (li>a)\  ~ */
      --foo-s1-wa-links-hov-color: #234099;
      --foo-s1-wa-links-text-shadow: 1px 1px 1px rgba(68, 68, 68, 0.25);
  /* ----------~(end)~---------- */
  
/* =================|END|================= */
`;

const GoogleMaps = styled.div`
    iframe {
        margin: 0;
        padding-top: 20px;
        width: 500px;
        max-width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        border: none;
    }
`;

const FooterWidgetArea = () => {
    const classes = [`section-bg`, 'grid-s1'];
    return (
        <FooterWidgetSection className={classes.join(' ')}>
            <FooS1WidgetArea className="grid-row-1 grid-col-3-5 foo-s1-widget-area center-1">
                <header>
                    <h4 className="foo-s1-widget-area-title"><em>Kontakt</em></h4>
                </header>
                <p>Adresse: Ørnevej 2, 9850 Hirtshals</p>
                <p>Tel: +45 50 37 15 95</p>
                <p>Email: wizard-bilpleje@live.dk</p>
                <p>CVR: 38393804</p>
            </FooS1WidgetArea>
            <FooS1WidgetArea className="grid-row-1 grid-col-5-7 foo-s1-widget-area center-1">
                <header>
                    <h4 className="foo-s1-widget-area-title"><em>Åbningstider</em></h4>
                </header>
                <p>Mandag - Onsdag: 8:00 – 16:00</p>
                <p>Tirsdag: 8:00 – 17:00</p>
                <p>Fredag: 8:00 – 15:00</p>
                <p>Lørdag/Søndag: efter aftale</p>
            </FooS1WidgetArea>
            <FooS1WidgetArea className="grid-row-1 grid-col-7-11 foo-s1-widget-area">
                <GoogleMaps>
                    <iframe title="Google Maps Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2138.6053823654674!2d9.955644316002548!3d57.5871779810834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4648c8469a305819%3A0xb8db3a26a54aae21!2s%C3%98rnevej%202%2C%209850%20Hirtshals!5e0!3m2!1sen!2sdk!4v1578509363117!5m2!1sen!2sdk" allowFullScreen></iframe>
                </GoogleMaps>
            </FooS1WidgetArea>
            <FooS1WidgetArea className="grid-row-2 grid-col-3-11 foo-s1-widget-area center-3">
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mobilbilpleje/">
                            <FontAwesomeIcon className="custom-padding-3" icon={faFacebook} size="3x" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=4550371595">
                            <FontAwesomeIcon className="custom-padding-3" icon={faWhatsapp} size="3x" />
                        </a>
                        <a rel="noopener noreferrer" href="/mmdi0918/1074175/wizard-app-fixed/kontakt">
                            <FontAwesomeIcon className="custom-padding-3" icon={faEnvelope} size="3x" />
                        </a>
                    </li>
                </ul>
            </FooS1WidgetArea>
        </FooterWidgetSection>
    );
}

export default FooterWidgetArea;