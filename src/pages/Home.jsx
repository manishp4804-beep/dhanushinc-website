import { Link } from "react-router-dom";
import Hero from "../components/hero/Hero";
import Gas from "../assets/Hero/gasImg.jpg"
import { FaGasPump, FaStore, FaHeadset } from "react-icons/fa";

const features = [
    {
        icon: <FaGasPump className="app-accent text-3xl" />,
        title: "Premium Fuel",
        description: "Quality-tested gasoline and diesel, kept flowing at every one of our stations.",
    },
    {
        icon: <FaStore className="app-accent text-3xl" />,
        title: "Convenience Stores",
        description: "Snacks, essentials, and everyday needs, stocked fresh and ready to grab.",
    },
    {
        icon: <FaHeadset className="app-accent text-3xl" />,
        title: "Friendly Service",
        description: "A team that treats every visit like a neighbor stopping by, not a transaction.",
    },
];

export default function Home() {
    return (
        <div className="app-shell">
            <Hero />

            {/* Feature strip */}
            <section className="app-surface py-16 sm:py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="app-card text-center p-6 rounded-2xl border hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4">{f.icon}</div>
                            <h3 className="app-heading font-bold text-xl mb-2">{f.title}</h3>
                            <p className="app-copy text-sm leading-relaxed">
                                {f.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About teaser */}
            <section className="app-muted-surface py-16 sm:py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
                    <img
                        src={Gas}
                        alt="DHANUSH PETROLEUM INC storefront"
                        className="rounded-2xl shadow-lg w-full h-72 sm:h-96 object-cover"
                    />
                    <div>
                        <p className="app-primary uppercase tracking-widest font-semibold text-sm mb-3">
                            Who we are
                        </p>
                        <h2 className="app-heading text-3xl sm:text-4xl font-bold mb-4">
                            Fueling communities since day one
                        </h2>
                        <p className="app-copy mb-6 leading-relaxed">
                            DHANUSH PETROLEUM INC began as a single fuel stop and grew into a trusted network
                            of stores built around hospitality, reliability, and genuine care for
                            the neighborhoods we serve.
                        </p>
                        <Link
                            to="/about"
                            className="app-button inline-block font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-200"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="app-gradient py-16 sm:py-20">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join the DHANUSH PETROLEUM INC Family</h2>
                    <p className="max-w-xl mx-auto mb-8 text-white/80">
                        We're always looking for driven people to grow with us. Explore open
                        roles across our stores today.
                    </p>
                    <Link
                        to="/careers"
                        className="app-button-secondary inline-block font-semibold px-8 py-3 rounded-full transition-colors duration-200"
                    >
                        View Careers
                    </Link>
                </div>
            </section>
        </div>
    );
}
