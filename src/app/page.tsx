import About from "@/components/About";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/Contact";



export default function Home() {
  return (
    <div>
      <main>
        <About/>
        <Portfolio/>
        <Testimonials/>
        <ContactForm/>
        <Footer/>
       
        
      </main>
      
    </div>
  );
}
