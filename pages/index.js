import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
import jumboData from "../data/jumbo.json";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <div className="jumbotrons">
        {jumboData.map((item) => {
          return (
            <div key={item.id} className="jumbo-wrapper">
              <div className="divider"></div>
              <Jumbotron content={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
