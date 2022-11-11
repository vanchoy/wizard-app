import { Link } from "react-router-dom";

import styled from "styled-components";

//Logo
import logo from "../../img/logo.png";

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';

const cssStyling = {

  /* ====== WRAPPER SETTINGS ====== */
  wrapper_width: "100%",
  wrapper_max_width: "70%",
  wrapper_margin: "0 auto",
  /* =================|END|================= */
  /* ====== LOGO SETTINGS ====== */
  logo_max_width: "150px",
  logo_max_height: "50px",
  logo_margin: "5px",
  /* =================|END|================= */
  /* ====== HEADER SETTINGS ====== */
  header_width: "100%",
  header_padding: "10px",
  header_bg_color: "#fff",
  header_box_shadow: "1px 1px 4px 0 rgba(0,0,0,0.1)",
  header_position: "fixed",
  /* =================|END|================= */

  /* ====== MENUS' SETTINGS ====== */

  /* ~  (Desktop Top Menu Link Settings)  ~ */
  menu_li_color: "#585858",
  menu_li_hover: "#234099",
  menu_font_size: "16px",
  menu_li_font_family: "'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif",
  menu_li_text_shadow: "1px 1px 1px #f9f9f9",
  menu_li_padding: "20px 10px",
  /* ----------~(end)~---------- */

  /* ~  (Desktop Top Dropdown Menu Settings)  ~ */
  menu_drpdwn_bg_color: "#f9f9f9",
  menu_drpdwn_max_width: "180px",
  menu_drpdwn_padding: "6px",
  menu_drpdwn_box_shadow: "0px 0px 3px 0px rgba(0,0,0,0.13)",
  menu_drpdwn_border_top_left_radius: "0px",
  menu_drpdwn_border_top_right_radius: "0px",
  menu_drpdwn_border_bottom_left_radius: "9px",
  menu_drpdwn_border_bottom_right_radius: "9px",
  /* ----------~(end)~---------- */

  /* ~  (Dropwdown Top Menu Link Settings)  ~ */
  menu_drpdwn_font_size: "16px",
  menu_drpdwn_li_color: "#000",
  menu_drpdwn_li_hover: "#234099",
  menu_drpdwn_li_textshadow: "1px 1px 1px #e2e2e2",
  menu_drpdwn_li_hover_textshadow: "1px 1px 1px #f1f1f1",
  menu_drpdwn_dashed_line: "1px dashed rgba(233, 233, 233, 0.9)",
  /* ----------~(end)~---------- */

  /* ~  (Mobile Version Top Menu Settings)  ~ */
  menu_burger_icon_color: "#000",
  menu_mobile_dashed_line: "1px dashed rgba(233, 233, 233, 0.9)",
  /* ----------~(end)~---------- */

  /* ~  (Top Menu Item's Icon Settings)  ~ */
  top_menu_icon_width: "20px", /* Makes the space even between the text and the icon, it can be customized */
  top_menu_icon_margin: "0 10px 0 0"
  /* ----------~(end)~---------- */

  /* =================|END|================= */

}

const HeaderSection = styled.section`

  .wrapper {
    width: ${cssStyling.wrapper_width};
    max-width: ${cssStyling.wrapper_max_width};
    margin: ${cssStyling.wrapper_margin};
  }
  .header {
    background-color: ${cssStyling.header_bg_color};
    box-shadow: ${cssStyling.header_box_shadow};
    position: ${cssStyling.header_position};
    width: ${cssStyling.header_width};
    z-index: 9;
    padding: ${cssStyling.header_padding};
  }
  /* ------ START OF LOGO ------- */
  .logo {
      text-align: center;
      display: inline-block;
    }
    .logo img, .logo-footer img{
      max-width: ${cssStyling.logo_max_width};
      max-height: ${cssStyling.logo_max_height};
      margin: ${cssStyling.logo_margin};
    }
  /* ------ END OF LOGO ------- */
  
  /* ------ START OF MENU (Mobile first) ------- */
  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
  }
  .header ul.menu {
    margin: 0 auto;
    list-style: none;
    height: 300px;
    overflow-y: auto;
  }
  .header ul.menu li a {
    display: block;
    padding: ${cssStyling.menu_li_padding};
    text-decoration: none;
    color: ${cssStyling.menu_li_color};
    font-family: ${cssStyling.menu_li_font_family};
    text-shadow: ${cssStyling.menu_li_text_shadow};
    font-size: ${cssStyling.menu_font_size};
  }
  .header ul.menu li a:hover {
    color: ${cssStyling.menu_li_hover};
  }
  /* START OF BURGER ICON */
    .header .menu-icon {
      cursor: pointer;
      float: right;
      padding: 25px;
      position: relative;
      user-select: none;
    }  
    .header .menu-icon .navicon {
      background: ${cssStyling.menu_burger_icon_color};
      display: block;
      height: 2px;
      position: relative;
      width: 18px;
      margin: 10px 20px 0 0;
    }
    .header .menu-icon .navicon:before,
    .header .menu-icon .navicon:after {
      background: ${cssStyling.menu_burger_icon_color};
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      width: 100%;
    }
    .header .menu-icon .navicon:before {
      top: 5px;
    }
    .header .menu-icon .navicon:after {
      top: -5px;
    }

    /* START OF REMOVING THE CHECKBOX */
      .header .menu-btn {
        display: none;
      }
    /* END OF REMOVING THE CHECKBOX */

  /* END OF BURGER ICON */

  /* RESPONSIVE MENUBOX HEIGHT */
  .header .menu-btn:checked ~ .menu {
    max-height: 100%;
  }
  /* END OF RESPONSIVE MENUBOX HEIGHT */
  /* TOP MENU ITEM'S ICON SETTINGS */
  .top-menu-item-icon {
    width: ${cssStyling.top_menu_icon_width};
    margin: ${cssStyling.top_menu_icon_margin};
    text-align: center;
  }
    
  @media screen and (min-width: 0px) and (max-width: 1249px) {
      .wrapper {
        max-width: 100%;
      }
      .logo {
        text-align: left;
      }
      ul.dropdown-content li {
        background: none;
        margin-left: 20px;
        padding-left: 0;
        border-bottom: ${cssStyling.menu_mobile_dashed_line};
      }
  }
  
  @media screen and (min-width: 1250px) {
      .header li {
        float: left;
      }
      .header li a {
        padding: 20px 30px;
      }
      .header .menu {
        clear: none;
        float: right;
        max-height: 60px;
      }
      .header .menu-icon {
        display: none;
      }
      .header li {
        margin-right: 10px;
      }
      .header li a:hover, .header .menu-btn:hover {
        color: #e9a657;
        text-shadow: 0.5px 0.9px 1px #d2d2d2;
      }
      
        /* header large */
        .header.large {
          height: auto;
        }
        /* header small */
        .header.small {
          max-height: 60px;
        }
        .header.small ul {
          padding: 0;
          margin: 0;
        }
        /*.header.small ul li a {
          padding: 15px 20px;
        }*/
        .header.small .wrapper .logo img {		
          margin-top: 3px;
        }
      .dropdown {
        margin: 0;
        padding: 0;
        display: inline-block;
      }
      .dropdown ul.dropdown-content li a {
        background-image: none;
        margin: 0;
        padding-left: 12px;
        font-family: ${cssStyling.menu_li_font_family};
        font-size: ${cssStyling.menu_drpdwn_font_size};
        color: ${cssStyling.menu_drpdwn_li_color};
        text-shadow: ${cssStyling.menu_drpdwn_li_textshadow};
      }
      .dropdown ul.dropdown-content li a:hover {
        background: none;
        color: ${cssStyling.menu_drpdwn_li_hover};
        text-shadow: ${cssStyling.menu_drpdwn_li_hover_textshadow};
      }
      /* Dropdown Content (Hidden by Default) */
      .small ul.dropdown-content, .large ul.dropdown-content {
        display: none;
        position: absolute;
        background-color: ${cssStyling.menu_drpdwn_bg_color};
        max-width: ${cssStyling.menu_drpdwn_max_width};
        padding: ${cssStyling.menu_drpdwn_padding};
        box-shadow: ${cssStyling.menu_drpdwn_box_shadow};
        z-index: 1;
        border-top-left-radius: ${cssStyling.menu_drpdwn_border_top_left_radius};
        border-top-right-radius: ${cssStyling.menu_drpdwn_border_top_right_radius};
        border-bottom-left-radius: ${cssStyling.menu_drpdwn_border_bottom_left_radius};
        border-bottom-right-radius: ${cssStyling.menu_drpdwn_border_bottom_right_radius};
      }
      /* Show the dropdown menu on hover */
      .dropdown:hover ul.dropdown-content {
        display: block;
      }
    
      ul.dropdown-content li {
        width: 100%;
        background: none;
        margin-left: 0;
        padding-left: 0;
        border-bottom: ${cssStyling.menu_drpdwn_dashed_line};
      }
      ul.dropdown-content li:last-child {
        border: 0;
      }
    }
    
`;
/* Automatically scroll to top when opening a new page
  Ref link for more info: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
*/


const Header = () => {
  return (
    <HeaderSection>
      <header className="header large">
        <div className="wrapper">
          <div className="logo">
            <Link to="/"><img src={logo} alt="Wizard Mobil Bilpleje logo" /></Link>
          </div>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li>
              <Link to="/">
                <FontAwesomeIcon className="top-menu-item-icon" icon={faHome} size="1x" />
                Hjem
              </Link>
            </li>
            <li>
              <Link to="/vores-tjenester">
                <FontAwesomeIcon className="top-menu-item-icon" icon={faHandsHelping} size="1x" />
                Vores Tjenester
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/produkter">
                <FontAwesomeIcon className="top-menu-item-icon" icon={faTags} size="1x" />
                Produkter
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/produkter/produkt-1">
                    ADBL Shampoo
                  </Link>
                </li>
                <li>
                  <Link to="/produkter/produkt-2">
                    ADBL QD1
                  </Link>
                </li>
                <li>
                  <Link to="/produkter/produkt-3">
                    ADBL Vampire
                  </Link>
                </li>
                <li>
                  <Link to="/produkter/produkt-4">
                    ADBL Tire Dressing
                  </Link>
                </li>
                <li>
                  <Link to="/produkter/produkt-5">
                    ADBL APC PRO
                  </Link>
                </li>
                <li>
                  <Link to="/produkter/produkt-6">
                    ADBL INTERIOR WOW
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/priser">
                <FontAwesomeIcon className="top-menu-item-icon" icon={faDollarSign} size="1x" />
                Priser
              </Link>
            </li>
            <li>
              <Link to="/erhverv">
                <FontAwesomeIcon className="top-menu-item-icon" icon={faBusinessTime} size="1x" />
                Erhverv
              </Link>
            </li>
            <li>
              <Link to="/kontakt">
                <FontAwesomeIcon className="top-menu-item-icon" icon={faEnvelopeOpenText} size="1x" />
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </HeaderSection>
  );
}
/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */
export default Header;

