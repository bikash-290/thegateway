import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="container py-5">
        <h2>Welcome to The Gateway</h2>
        <p>
          Cyber Cafe, Online Services, Computer Training &
          Digital Solutions.
        </p>
      </div>

      <Footer />
    </>
  );
}