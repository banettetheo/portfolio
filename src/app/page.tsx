import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Hero from "@/app/_components/Hero";

export default function Home() {
  return (
      <div className="bg-blue-300">
        <Header/>
          <Hero/>
          <Footer/>
      </div>
  );
}
