import styled from "styled-components";

const FooterBox = styled.footer`
    width: auto;
    padding: 20px;
    background-color: #15204E;
`;

const FooterText = styled.p`
    margin: 5px;
    font-family: "Calibri";
    font-size: 16px;
    line-height: 1.5;
    color: #ffffff;
    text-align: center;
    -webkit-text-shadow: 0px 0px #b9ab9b;
    -moz-text-shadow: 0px 0px #b9ab9b;
    -ms-text-shadow: 0px 0px #b9ab9b;
    -o-text-shadow: 0px 0px #b9ab9b;
    text-shadow: 0px 0px #b9ab9b;
`;

const Footer = () => {
    return (
        <FooterBox>
            <FooterText>
                Copyright 2020 © Wizard Mobil Bilpleje, All Rights Reserved
            </FooterText>
        </FooterBox>
    );
}

export default Footer;