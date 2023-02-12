import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex flex-col w-full justify-center align-center items-center">
      <Navbar />
      <main className="w-2/3 flex flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
