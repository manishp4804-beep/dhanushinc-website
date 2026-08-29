import Aboutus from "../components/about/Aboutus";

const stats = [
    { label: "Store Locations", value: "10+" },
    { label: "Years of Service", value: "15+" },
    { label: "Team Members", value: "150+" },
    { label: "Happy Customers Daily", value: "5,000+" },
];

const values = [
    {
        title: "Reliability",
        description: "Fuel and shelves that are stocked and ready, every single day.",
    },
    {
        title: "Hospitality",
        description: "Every customer is treated like a neighbor, not a number.",
    },
    {
        title: "Integrity",
        description: "Fair pricing and honest service, with nothing hidden in the fine print.",
    },
];

export default function About() {
    return (
        <div>
            <Aboutus />

            {/* Stats */}
            <section className="app-muted-surface py-14">
                <div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <p className="app-primary text-3xl sm:text-4xl font-bold">{s.value}</p>
                            <p className="app-copy text-sm mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="app-surface py-16 sm:py-20">
                <div className="container mx-auto px-6">
                    <h2 className="app-heading text-3xl sm:text-4xl font-bold text-center mb-12">
                        What We Stand For
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="app-card p-8 rounded-2xl border text-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <h3 className="app-primary text-xl font-bold mb-3">
                                    {v.title}
                                </h3>
                                <p className="app-copy text-sm leading-relaxed">
                                    {v.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
