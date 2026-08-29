import PageHeader from "../components/common/PageHeader";
import { FaMapMarkerAlt, FaClock, FaHeartbeat, FaGraduationCap, FaUsers } from "react-icons/fa";

const openings = [
    {
        title: "Store Associate",
        location: "Austin, TX",
        type: "Full-time",
    },
    {
        title: "Shift Supervisor",
        location: "Killeen, TX",
        type: "Full-time",
    },
    {
        title: "Fuel Attendant",
        location: "Kansas City, KS",
        type: "Part-time",
    },
    {
        title: "Regional Operations Manager",
        location: "Multiple Locations",
        type: "Full-time",
    },
];

const perks = [
    { icon: <FaGraduationCap />, title: "Growth & Training", description: "On-the-job training with clear paths into leadership roles." },
    { icon: <FaUsers />, title: "Team Culture", description: "A close-knit crew that treats coworkers like family." },
];

export default function Careers() {
    return (
        <div>
            <PageHeader
                eyebrow="Build your future with us"
                title="Careers at DHANUSH PETROLEUM INC"
                description="Join a growing team that values hard work, hospitality, and helping neighbors every day."
            />

            {/* Perks */}
            <section className="app-surface py-16 sm:py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
                    {perks.map((p) => (
                        <div key={p.title} className="app-card text-center p-6 rounded-2xl border">
                            <div className="app-accent flex justify-center text-3xl mb-4">{p.icon}</div>
                            <h3 className="app-heading font-bold text-lg mb-2">{p.title}</h3>
                            <p className="app-copy text-sm leading-relaxed">{p.description}</p>
                        </div>
                    ))}
                </div>

                {/* Openings */}
                <div className="container mx-auto px-6">
                    <h2 className="app-heading text-3xl sm:text-4xl font-bold mb-8 text-center">
                        Current Openings
                    </h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {/* {openings.map((job) => (
                            <div
                                key={job.title}
                                className="app-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-xl border hover:shadow-lg transition-shadow duration-300"
                            >
                                <div>
                                    <h3 className="app-heading font-bold text-lg">{job.title}</h3>
                                    <div className="app-copy flex flex-wrap gap-4 mt-2 text-sm">
                                        <span className="flex items-center gap-1">
                                            <FaMapMarkerAlt /> {job.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaClock /> {job.type}
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="mailto:careers@dhanush.com"
                                    className="app-button inline-block text-center font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-shadow duration-200 whitespace-nowrap"
                                >
                                    Apply Now
                                </a>
                            </div>
                        ))} */}
                        <span className="flex justify-center"> We're Growing Our Team. Stay Connected for Upcoming Career Opportunities. </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
