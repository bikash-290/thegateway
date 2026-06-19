import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1>About Us</h1>

        <p>
          The Gateway provides online services,
          computer education and digital support.
        </p>
      </div>

      <Footer />
    </>
  );
}