import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { ButtonB } from '../Buttons/Button';

const ContactFormStyle = styled.form`
/* ====== CONTACT FORM STYLE #1 SETTINGS ====== */

        /* ~  (Form Settings)  ~ */
            --ctc-form-width: auto;
            --ctc-form-height: auto;
            --ctc-form-margin: 0 auto;
            --ctc-form-text-align: center;
        /* ----------~(end)~---------- */

        /* ~  (Fields Style)  ~ */
            --ctc-form-field-width: 100%;
            --ctc-form-field-height: 50px;
            --ctc-form-field-max-width: 100%;
            --ctc-form-field-margin: 0 0 20px 0;
            --ctc-form-field-bg-color: #fff;
            --ctc-form-field-font-size: 20px;
            --ctc-form-field-font-family: "Calibri";
            --ctc-form-field-text-color: #626262;
            --ctc-form-field-border: 1px solid #f6f6f6;  
            --ctc-form-field-border-radius: 3px;
            --ctc-form-field-box-shadow: rgba(0,0,0, 0.1) 0px 0px 3px;
            --ctc-form-field-outline-color: #c79391;
        /* ----------~(end)~---------- */
        
        /* ~  (Textarea Settings)  ~ */
            --ctc-form-textarea-height: 300px;
        /* ----------~(end)~---------- */
    /* =================|END|================= */
    
`;



const ContactForm = () => {
    return (
        <ContactFormStyle className="grid-s1 contact-form-style-1" action="mailto:wizard-bilpleje@live.dk" method="post" enctype="text/plain">
            <div className="grid-row-1 grid-col-1-7">
                <input name="name" type="text" placeholder=" Dit navn" required />
            </div>
            <div className="grid-row-1 grid-col-7-13">
                <input name="from" type="email" placeholder=" E-mail adresse" required />
            </div>
            <div className="grid-row-2 grid-col-1-7">
                <input name="product" type="text" placeholder=" Produkt/Tjenester/Erhverv" />
            </div>
            <div className="grid-row-2 grid-col-7-13">
                <input name="subject" type="text" placeholder=" Emne" required />
            </div>
            <div className="grid-row-3 grid-col-all">
                <textarea name="message" placeholder="  Skriv din besked her . . ." required></textarea>
            </div>
            <ButtonB id="btn" buttonClasses="grid-row-4 grid-col-all" type="submit">
                Send
                <FontAwesomeIcon className="right" icon={faEnvelopeOpenText} size="1x" />
            </ButtonB>
        </ContactFormStyle>
    );
}

export default ContactForm;