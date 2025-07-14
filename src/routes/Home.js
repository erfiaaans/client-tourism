import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "./Service";
import heroesBg from "../assets/img/heroes.jpeg";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/About";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage={heroesBg}
        title="Eksplorasi Keindahan Madiun"
        description="Nikmati alam, budaya, kuliner, dan landmark khas Madiun yang menakjubkan."
        genres={[
          "Kuliner",
          "Alam",
          "Sejarah",
          "Budaya",
          "Tempat Ikonik",
          "Hiburan",
        ]}
      />

      <Destination />
      <Service />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}
export default Home;
