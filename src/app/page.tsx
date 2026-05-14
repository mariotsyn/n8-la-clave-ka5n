import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Servicios from '../components/Servicios';
import SobreNosotros from '../components/SobreNosotros';
import Testimonios from '../components/Testimonios';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <SobreNosotros />
      <Testimonios />
      <Contacto />
      <Footer />
    </>
  );
}
