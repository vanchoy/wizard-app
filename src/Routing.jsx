import { Routes, Route } from 'react-router-dom';

//Pages
import MainPage from "./pages/index";
import NotFoundPage from "./pages/404";
import ServicesPage from "./pages/vores-tjenester";
import ProductsPage from "./pages/produkter";
import ContactPage from "./pages/kontakt";
import BusinessPage from "./pages/erhverv";
import PricesPage from "./pages/priser";
import ProductN1 from "./pages/produkter/produkt-1";
import ProductN2 from "./pages/produkter/produkt-2";
import ProductN3 from "./pages/produkter/produkt-3";
import ProductN4 from "./pages/produkter/produkt-4";
import ProductN5 from "./pages/produkter/produkt-5";
import ProductN6 from "./pages/produkter/produkt-6";

const Routing = () => (
    <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/404" element={<NotFoundPage />} />
        <Route exact path="/vores-tjenester" element={<ServicesPage />} />
        <Route exact path="/produkter" element={<ProductsPage />} />
        <Route exact path="/kontakt" element={<ContactPage />} />
        <Route exact path="/priser" element={<PricesPage />} />
        <Route exact path="/erhverv" element={<BusinessPage />} />
        <Route exact path="/produkter/produkt-1" element={<ProductN1 />} />
        <Route exact path="/produkter/produkt-2" element={<ProductN2 />} />
        <Route exact path="/produkter/produkt-3" element={<ProductN3 />} />
        <Route exact path="/produkter/produkt-4" element={<ProductN4 />} />
        <Route exact path="/produkter/produkt-5" element={<ProductN5 />} />
        <Route exact path="/produkter/produkt-6" element={<ProductN6 />} />

        <Route path="" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route exact path="/404" element={<NotFoundPage />} />
        <Route element={<NotFoundPage />} />
    </Routes>
);

export default Routing;
