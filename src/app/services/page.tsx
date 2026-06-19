import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="mb-4">Our Services</h1>

        <div className="row">
          <ServiceCard
            title="Online Form Fillup"
            description="Government and private applications."
          />

          <ServiceCard
            title="Computer Training"
            description="Basic to advanced courses."
          />

          <ServiceCard
            title="Photo Printing"
            description="Passport and studio photos."
          />
        </div>
      </div>

      <Footer />
    </>
  );
}