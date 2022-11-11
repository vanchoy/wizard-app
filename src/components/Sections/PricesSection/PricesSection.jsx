import { Link } from "react-router-dom";

import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../Buttons/Button';

const PricesSectionStyle = styled.section`
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

const TableStyle = styled.table`
    width: 100%;
    text-align: center;
    font-family: Calibri;
    border-collapse: collapse;
   
    th {
        padding: 10px;
        background-color: #234099;
        color: #fff;
        font-family: inherit;
        font-size: 22px;
        text-align: center;
        border: 1px solid #ddd;
        border-bottom: none;
    }

    td {
        padding: 8px;
        border: 1px solid #ddd;
        font-size: 18px;
    }

    tr:nth-child(even){
        background-color: #f2f2f2;
    }
    
    tr:hover {
        background-color: #eff8ef;
    }
`;

const PricesSection = () => {
    const pricetags = [
        { id: 1, name: 'Dampvask af bil(klargøring af hele bil, fælgerens, rensning af vinduer)', retailPrice: 'Fra 299-,', ourPrice: 'Fra 199-,' },
        { id: 2, name: 'Indvendig rengøring(støvsugning, rensning af plastikelementer, rensning af vinduer)', retailPrice: 'Fra 199-,', ourPrice: 'Fra 99-,' },
        { id: 3, name: 'Sæderens(vask af alle sæder, dørsider og himmel)', retailPrice: 'Fra 399-,', ourPrice: 'Fra 299-,' },
        { id: 4, name: 'Voks beskyttelse(fjerning af asfalt og flyverust og voks beskyttelse)', retailPrice: 'Ikke tilgængelig – kun i vores garage', ourPrice: 'Fra 499-,' },
        { id: 5, name: 'Polering af bil(fjerning af asfalt og flyverust, polering af bi log voks beskyttelse)', retailPrice: 'Ikke tilgængelig – kun i vores garage', ourPrice: 'Fra 899-,' },
        { id: 6, name: 'Reparation af læder eller træelementer', retailPrice: 'Ikke tilgængelig – kun i vores garage', ourPrice: 'Fra 999-,' },
        { id: 7, name: 'Reparation af rust', retailPrice: 'Ikke tilgængelig – kun i vores garage', ourPrice: 'Efter aftale – ring til os' }
    ];

    const header = [
        { id: 1, title: 'Tjeneste' },
        { id: 2, title: 'Hos dig' },
        { id: 3, title: 'I vores garage' }
    ];

    const renderTableHeader = () => {
        return header.map((element) => {
            const { id, title } = element; //Object destructuring
            return <th key={id}>{title}</th>;
        })
    };

    const renderTableData = () => {
        return pricetags.map((element) => {
            const { id, name, retailPrice, ourPrice } = element; //Object destructuring
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{retailPrice}</td>
                    <td>{ourPrice}</td>
                </tr>
            );
        })
    };


    return (
        <PricesSectionStyle className="grid-s1 section-bg">
            <section className="grid-row-1 grid-col-3-11">
                <header>
                    <h2 className="section-heading-title">Vores Priser</h2>
                    <h4 className="section-heading-sub-title">Alle af vores priser afhænger af din bilens størrelse og for eksampel skader på lakken(ved polering). Kontakt os for at høre nærmere.</h4>
                </header>
            </section>
            <div className="grid-row-2 grid-col-3-11">
                <TableStyle className='tableStyle'>
                    <tbody>
                        <tr>{renderTableHeader()}</tr>
                        {renderTableData()}
                    </tbody>
                </TableStyle>
            </div>
            <div className="grid-row-3 grid-col-3-11 center-2">
                <Link to="/kontakt">
                    <Button>
                        Bestil Tid
                        <FontAwesomeIcon className="right" icon={faChevronCircleRight} size="1x" />
                    </Button>
                </Link>
            </div>
        </PricesSectionStyle>
    )
    
}

export default PricesSection;