import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

interface LayoutProps {
  children: JSX.Element;
}
function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
