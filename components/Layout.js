import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const isCheckout = router.pathname === "/checkout";

  return (
    <>
      {!isCheckout ? (
        <div className="layout">
          <Head>
            <title>Headphones Ecommerce</title>
          </Head>
          <header>
            <Navbar />
          </header>
          <main className="main-container">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default Layout;
