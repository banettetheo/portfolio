'use client'

import Header from "@/app/[locale]/_components/header";
import Footer from "@/app/[locale]/_components/footer";
import Hero from "@/app/[locale]/_components/hero";
import TechJourney from "@/app/[locale]/_components/techJourney";

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
