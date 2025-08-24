'use client'

import Header from "@/app/[locale]/_components/header";
import Footer from "@/app/[locale]/_components/footer";
import Hero from "@/app/[locale]/_components/hero";
import TechJourney from "@/app/[locale]/_components/tech-journey";
import Contacts from "@/app/[locale]/_components/contacts";

export default function Home() {
  return (
      <div>
          <Header/>
          <Hero/>
          <TechJourney/>
          <Contacts/>
          <Footer/>
      </div>
  );
}
