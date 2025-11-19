import HeroVideo from "../../../components/eng/Home/1"
import AboutUs from "../../../components/eng/Home/2"
import Vision from "../../../components/eng/Home/3";
import News from "../../../components/eng/Home/4";
import ContactFooter from "../../../components/eng/Home/5";

export default function Home() {
  return (
    <div className="py-4 space-y-4 scroll-smooth">
      <div className="px-2 md:px-4">
        <HeroVideo />
      </div>
      <section id = "about">
        <div className="px-2 md:px-4">
          <AboutUs />
        </div>
      </section>
      <section id = "vision">
        <div className="px-2 md:px-4">
          <Vision />
        </div>
      </section>
      <section id = "news">
        <div className="px-2 md:px-4">
          <News />
        </div>
      </section>
      <section id = "contact">
        <div className="px-2 md:px-4">
          <ContactFooter />
        </div>
      </section>
      
    </div>
  );
}
