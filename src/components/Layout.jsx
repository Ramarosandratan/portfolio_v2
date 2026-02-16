import Navbar from './Navbar';
import Footer from './Footer';
import SettingsButton from './SettingsButton';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans text-neutral-900 dark:text-white dark:bg-neutral-900 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow bg-white dark:bg-neutral-900 transition-colors duration-300">
                {children}
            </main>
            <Footer />
            <SettingsButton />
        </div>
    );
};

export default Layout;
