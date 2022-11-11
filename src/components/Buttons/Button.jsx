import styled from "styled-components";

const ButtonStyle = styled.span`
    /* ====== BUTTONS SETTINGS ====== */
        /* ~  (Button Rectangle Style #1)  ~ */
            --btn-rec-s1-padding: 25px 30px 25px 30px;
            --btn-rec-s1-width: 200px;
            --btn-rec-s1-max-width: 100%;
            --btn-rec-s1-height: auto;
            --btn-rec-s1-bg-color: #234099;
            --btn-rec-s1-text-color: #ffffff;
            --btn-rec-s1-font-family: 'Gili Sans', sans-serif;
            --btn-rec-s1-font-size: 16px;
            --btn-rec-s1-text-align: center;
            --btn-rec-s1-text-shadow: -1px 0 #949494;
            --btn-rec-s1-position: relative; /* Edit only if you know what you are doing*/
            --btn-rec-s1-z-index: 0; /* Edit only if you know what you are doing */
            --btn-rec-s1-display: inline-block; /* Edit only if you know what you are doing*/
            --btn-rec-s1-border: none;
            --btn-rec-s1-border-radius: 3px;
            --btn-rec-s1-cursor: pointer;
            --btn-rec-s1-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
            --btn-rec-s1-transition: all 0.4s;

            /* Button Rectangle Style #1 Hover */
            --btn-rec-s1-hov-opacity: 1;
            --btn-rec-s1-hov-text-color: #ffffff;
            --btn-rec-s1-hov-text-shadow: none;
            --btn-rec-s1-hov-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
        /* ----------~(end)~---------- */
    /* =================|END|================= */

    &:hover {
        background-color: #15204E;
    }
`;

const ButtonStyleB = styled.button`
/* ====== BUTTONS SETTINGS ====== */
    /* ~  (Button Rectangle Style #1)  ~ */
        --btn-rec-s1-padding: 25px 30px 25px 30px;
        --btn-rec-s1-width: 200px;
        --btn-rec-s1-max-width: 100%;
        --btn-rec-s1-height: auto;
        --btn-rec-s1-bg-color: #234099;
        --btn-rec-s1-text-color: #ffffff;
        --btn-rec-s1-font-family: 'Gili Sans', sans-serif;
        --btn-rec-s1-font-size: 16px;
        --btn-rec-s1-text-align: center;
        --btn-rec-s1-text-shadow: -1px 0 #949494;
        --btn-rec-s1-position: relative; /* Edit only if you know what you are doing*/
        --btn-rec-s1-z-index: 0; /* Edit only if you know what you are doing */
        --btn-rec-s1-display: inline-block; /* Edit only if you know what you are doing*/
        --btn-rec-s1-border: none;
        --btn-rec-s1-border-radius: 3px;
        --btn-rec-s1-cursor: pointer;
        --btn-rec-s1-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
        --btn-rec-s1-transition: all 0.4s;

        /* Button Rectangle Style #1 Hover */
        --btn-rec-s1-hov-opacity: 1;
        --btn-rec-s1-hov-text-color: #ffffff;
        --btn-rec-s1-hov-text-shadow: none;
        --btn-rec-s1-hov-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
    /* ----------~(end)~---------- */
/* =================|END|================= */

    &:hover {
    background-color: #15204E;
    }
`;
const Button = (props) => {
    const classes = ["btn-rec-s1", props.buttonClasses];

    return <ButtonStyle id={props.buttonID} className={classes.join(' ')}>{props.children}</ButtonStyle>;
};

const ButtonB = (props) => {
    const classes = ["btn-rec-s1", props.buttonClasses];

    return <ButtonStyleB id={props.buttonID} className={classes.join(' ')}>{props.children}</ButtonStyleB>;
};

export {Button, ButtonB};