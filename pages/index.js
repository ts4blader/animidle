import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import jumboData from "../data/jumbo.json";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      {/* Jumbo */}
      <section className="jumbotrons">
        {jumboData.map((item) => {
          return (
            <div key={item.id} className="jumbo-wrapper">
              <div className="divider"></div>
              <Jumbotron content={item} />
            </div>
          );
        })}
      </section>
      {/* FAQ */}
      <div className="divider"></div>
      <FAQ />
      <div className="divider"></div>
      <Footer />
    </div>
  );
}
