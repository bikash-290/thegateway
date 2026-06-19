import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Gallery() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1>Gallery</h1>

        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src="/images/gallery1.jpg"
              className="img-fluid rounded"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}