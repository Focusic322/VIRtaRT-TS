import Abstract from "./Components/Abstract.tsx";
import Footer from "./Components/Footer.tsx";
import Header from "./Components/Header.tsx";
import Information from "./Components/Information.tsx";
import Services from "./Components/Services.tsx";
import Testimonials from "./Components/Testimonials.tsx";
import Welcome from "./Components/Welcome.tsx";
import ScrollToTop from "./Ui/ScrollToTop.tsx";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Welcome />
      <div className="pt-serif-regular">
        <Services />
        <Abstract />
        <Testimonials />
        <Information />
        <Footer />
      </div>
    </>
  );
}

export default App;
