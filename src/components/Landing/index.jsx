import Header from "./Header";
import Footer from "./Footer";

const Landing = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Landing;
