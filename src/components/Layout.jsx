import Navbar from './Navbar';
import Footer from './Footer';
import SettingsButton from './SettingsButton';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900">
            <Navbar />
            <main className="flex-grow bg-gray-50">
                {children}
            </main>
            <Footer />
            <SettingsButton />
        </div>
    );
};

export default Layout;
