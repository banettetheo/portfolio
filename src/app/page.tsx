import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Hero from "@/app/_components/Hero";
import TechJourney from "@/app/_components/TechJourney";

export default function Home() {
  return (
      <div className="bg-blue-300">
        <Header/>
        <Hero/>
          <TechJourney/>
        <Footer/>
      </div>
  );
}
