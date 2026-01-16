import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Corporate from '@/components/Corporate';
import About from '@/components/About';
import Services from '@/components/Services';
import Excellence from '@/components/Excellence';
import Menus from '@/components/Menus';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollNav from '@/components/ScrollNav';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <ScrollNav />
      <Hero />
      <Corporate />
      <About />
      <Services />
      <Excellence />
      <Menus />
      <Contact />
      <Footer />
    </main>
  );
}
