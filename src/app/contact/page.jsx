import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1>Contact Us</h1>

        <ContactForm />
      </div>

      <Footer />
    </>
  );
}