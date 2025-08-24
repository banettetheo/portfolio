import Header from "@/app/[locale]/_components/Header";
import Footer from "@/app/[locale]/_components/Footer";
import Hero from "@/app/[locale]/_components/Hero";
import TechJourney from "@/app/[locale]/_components/TechJourney";

export default function Home() {
  return (
      <div>
        <Header/>
        <Hero/>
        <TechJourney/>
        <Footer/>
      </div>
  );
}
