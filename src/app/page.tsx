import Hero from "./components/Hero";
import About from './components/About';
import VideoPromo from "./components/VideoPromo";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <VideoPromo />
      <Footer />
    </main>
  );
}
