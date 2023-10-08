import "./App.css";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="bg-white px-[80px] relative">
      <Navigation />
      <div className="lg:px-[112px] lg:mt-[116px]">
        <HeroSection />
      </div>

      <div className="top-corner-blur -top-20 -left-56"></div>
    </div>
  );
}

export default App;
