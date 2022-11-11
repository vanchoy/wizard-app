import { Link } from "react-router-dom";

import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const ProductStyle = styled.div`
/* ====== Blurb Style 2 Settings ====== */
    /* ~  (Box styling)  ~ */
        --blurb-s1-padding: 20px 20px 53px 20px;
        --blurb-s1-width: 100%;
        --blurb-s1-height: 100%;
        --blurb-s1-max-height: 100%;
        --blurb-s1-bg-color: rgba(200, 207, 212, 0.2);
        --blurb-s1-border: 1px solid #e9e9e9;
        --blurb-s1-border-radius: 2px;
        --blurb-s1-box-shadow: none;
        --blurb-s1-margin: 1px 1px 30px 1px;
        --blurb-s1-hover-bg-color: #f5f6f8;
        --blurb-s1-hover-box-shadow: 0 6px 6px -6px #426fb4;
    /* ----------~(end)~---------- */

    /* ~  (Featured image)  ~ */
        --blurb-s1-img-width: auto;
        --blurb-s1-img-height: auto;
        --blurb-s1-img-max_width: 100%;
        --blurb-s1-img-max_height: 100%;
    /* ----------~(end)~---------- */

    /* ~  (Text paragraph)  ~ */
        --blurb-s1-p-padding: 0 20px 10px 20px;
        --blurb-s1-p-text-align: left;
        --blurb-s1-p-font-size: 18px;
        --blurb-s1-p-line-height: 1.5;
        --blurb-s1-p-text-color: #000;
        --blurb-s1-p-font-family: "Calibri";
        --blurb-s1-p-text-shadow: 0.5px 0.9px 1px #d2d2d2;   
        --blurb-s1-last-p-margin: none; 
        --blurb-s1-p-span-text-align: left;
    /* ----------~(end)~---------- */

    /* ~  (Title Style)  ~ */
        --blurb-s1-title-padding: 0 10px 20px 10px;
        --blurb-s1-title-font-size: 24px;
        --blurb-s1-title-font-family: "Calibri";
        --blurb-s1-title-text-color: #234099;
        --blurb-s1-title-text-align: center;      
        --blurb-s1-title-text-shadow: 0.5px 0.9px 1px #d2d2d2;
    /* ----------~(end)~---------- */
/* =================|END|================= */
`;

const ProductButtonStyle = styled.span`
/* ~  (Button Style)  ~ */
    --blurb-s1-btn-width: 100%;
    --blurb-s1-btn-height: auto;
    --blurb-s1-btn-padding: 25px 30px 25px 30px;
    --blurb-s1-btn-color: #234099;
    --blurb-s1-btn-text-align: center;
    --blurb-s1-btn-text-color: #fff;
    --blurb-s1-btn-text-shadow: -1px 0 #949494;
    --blurb-s1-btn-font-size: 18px;
    --blurb-s1-btn-border: none;
    --blurb-s1-btn-border-top-left-radius: none;
    --blurb-s1-btn-border-top-right-radius: none;
    --blurb-s1-btn-border-bottom-left-radius: none;
    --blurb-s1-btn-border-bottom-right-radius: none;
    --blurb-s1-btn-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
    --blurb-s1-btn-trasition: all 0.4s;
    /* ----------~(end)~---------- */

    /* ~  (Button Hover Style)  ~ */
    --blurb-s1-btn-hover-color: #15204E;
    --blurb-s1-btn-hover-opacity: 0.9;
    --blurb-s1-btn-hover-text-color: #fff;
    --blurb-s1-btn-hover-text-shadow: none;
    --blurb-s1-btn-hover-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
/* ----------~(end)~---------- */
`;
const ProductElement = (props) => {
    const classes = [props.productClasses, 'blurb-style-s'];
    return (
        <ProductStyle className={classes.join(" ")}>
            <h3>{props.productName}</h3>
            <div className="section-image center-2">
                <img className="clean" src={props.productImage} alt={props.productImageAlt} />
            </div>
            <Link to={props.productLink}>
                    <ProductButtonStyle className="blurb-button center-2">
                        Se mere
                    <FontAwesomeIcon className="right" icon={faChevronCircleRight} size="1x" />
                    </ProductButtonStyle>
            </Link>
        </ProductStyle>
    );
};

export default ProductElement;