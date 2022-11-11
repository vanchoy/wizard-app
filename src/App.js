import { useEffect } from "react";

import { BrowserRouter as Router, useLocation} from 'react-router-dom';

import './App.css';

//Header of the website
import Header from './components/Header/Header';
import FooterWidgetArea from './components/Footer/FooterWidgetArea';
import Footer from './components/Footer/Footer';
import Routing from './Routing';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
    return (
      <Router>
        <ScrollToTop />
        <Header />
        <Routing />
        <FooterWidgetArea />
        <Footer />
      </Router>
    );
};

export default App;