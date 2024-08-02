// Wrapper.js
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const Wrapper = ({ children }) => {
  const location = useLocation();
  const noNavFooterRoutes = ['/not-found'];

  const shouldShowNavFooter = !noNavFooterRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavFooter && <Navbar />}
      {children}
      {shouldShowNavFooter && <Footer />}
    </>
  );
};

export default Wrapper;
