import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from '../App';
import Header from './Header/Header';
import RegisterOrador from './RegisterOrator'
import Footer from './Footer/Footer';
import { urlBase } from './utils';

const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={`${urlBase}`} element={<App />} />
        <Route path={`${urlBase}/orador`} element={<RegisterOrador />} />
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default Layout;
