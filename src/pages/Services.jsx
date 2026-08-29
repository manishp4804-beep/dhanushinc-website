import PageHeader from "../components/common/PageHeader";
import { FaGasPump, FaShoppingBasket, FaCoffee, FaCreditCard, FaShieldAlt, FaGamepad } from "react-icons/fa";

const services = [
    {
        icon: <FaGasPump />,
        title: "Fuel & Diesel",
        description: "Regular, premium, and diesel fuel, quality-checked at every pump.",
    },
    {
        icon: <FaShoppingBasket />,
        title: "Convenience Store",
        description: "Snacks, drinks, and daily essentials stocked fresh around the clock.",
    },
    {
        icon: <FaGamepad />,
        title: "Arcade & Gaming",
        description: "Fun arcade games and entertainment for a little excitement during your visit.",
    },
    {
        icon: <FaCoffee />,
        title: "Coffee & Grab-and-Go",
        description: "Hot coffee and ready-to-eat bites for the drive ahead.",
    },
    {
        icon: <FaCreditCard />,
        title: "ATM & Bill Pay",
        description: "On-site ATM access and convenient bill payment services.",
    },
    {
        icon: <FaShieldAlt />,
        title: "24/7 Safety",
        description: "Well-lit, monitored stations designed for safe stops any hour.",
    },
];

export default function Services() {
    return (
        <div>
            <PageHeader
                eyebrow="What we offer"
                title="Our Services"
                description="Everything you need in one stop, delivered with a smile at every DHANUSH PETROLEUM INC location."
            />

            <section className="app-surface py-16 sm:py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="app-card p-8 rounded-2xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="app-accent text-3xl mb-4">{s.icon}</div>
                            <h3 className="app-heading text-xl font-bold mb-2">{s.title}</h3>
                            <p className="app-copy text-sm leading-relaxed">
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
