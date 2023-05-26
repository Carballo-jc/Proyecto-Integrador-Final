import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from '../App';
import Header from './Header/Header';
import RegisterOrador from './RegisterOrator'
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/orador" element={<RegisterOrador />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default Layout;
