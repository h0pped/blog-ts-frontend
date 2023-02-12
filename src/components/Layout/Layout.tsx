import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="bg-default">
      <Navbar />
      <div className="flex items-stretch min-h-screen ">
        <Sidebar className="w-1/6" />
        <main className="w-2/3 flex flex-col bg-default">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
