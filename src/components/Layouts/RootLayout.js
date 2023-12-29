import Footer from '../homePage/Footer';
import Navbar from './Navbar';

const RootLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default RootLayout;