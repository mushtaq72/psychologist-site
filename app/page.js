import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Survices";
import FaqSection from "@/components/FaqSection";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <div>
<Navbar/>
<Hero/>
<AboutSection/>
<Services/>
<FaqSection/>
<Testimonials/>
<Booking/>
<Footer/>

  </div>
  )
}
