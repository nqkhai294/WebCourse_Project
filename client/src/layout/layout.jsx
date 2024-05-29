import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Routers from '../routes/routers';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
