import Shop from "../../assets/about/shop.jpg";
import Gas from "../../assets/Hero/gasImg.jpg";

export default function Aboutus() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] bg-fixed bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${Shop})` }}
      >
        <div className="app-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg sm:text-2xl font-medium max-w-2xl mx-auto">
            More than a fuel stop — a place for quality, convenience, and entertainment, built on hospitality and trust.
          </p>
        </div>
      </section>

      {/* Vision / Mission / Philosophy */}
      <section className="app-surface py-16 sm:py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <img
            src={Gas}
            alt="Fuel station"
            className="rounded-2xl shadow-lg w-full h-72 sm:h-96 object-cover order-2 sm:order-1"
          />
          <div className="order-1 sm:order-2">
            <h2 className="app-primary font-bold text-3xl sm:text-4xl mb-6">
              Vision, Mission &amp; Philosophy
            </h2>
            <p className="app-copy text-lg sm:text-xl leading-relaxed">
              We exist to make every visit more than just a stop. Our mission is simple: quality fuel, a well-stocked mart, enjoyable entertainment, and service that makes everyone feel welcome. We strive to deliver a consistent experience across every store we run, building trust with our customers and becoming a valued part of the communities we serve.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
