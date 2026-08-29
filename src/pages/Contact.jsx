// import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
    // const [form, setForm] = useState({ name: "", email: "", message: "" });

    // const handleChange = (e) => {
    //     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // No backend wired up yet — this just confirms the message locally.
    //     const subject = `Website contact from ${form.name}`;
    //     const body = [
    //         `Name: ${form.name}`,
    //         `Email: ${form.email}`,
    //         "",
    //         "Message:",
    //         form.message,
    //     ].join("\n");

    //     window.location.href = `mailto:manishp4804@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // };

    return (
        <div>
            <PageHeader
                eyebrow="We'd love to hear from you"
                title="Contact Us"
                description="Questions, feedback, or partnership ideas — reach out and our team will get back to you."
            />

            <section className="app-surface py-16 sm:py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact info */}
                    <div className="space-y-6">
                        <h2 className="app-heading text-2xl sm:text-3xl font-bold mb-4">
                            Get In Touch
                        </h2>
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="app-accent text-xl mt-1 shrink-0" />
                            <div>
                                <p className="app-heading font-semibold">Head Office</p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=427+E+Loop+281%2C+Longview%2C+TX+75605"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="app-copy text-sm hover:underline"
                                >
                                    427 E Loop 281, Longview, TX 75605
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaPhoneAlt className="app-accent text-xl mt-1 shrink-0" />
                            <div>
                                <p className="app-heading font-semibold">Phone</p>
                                <a href="tel:+17372978569" className="app-copy text-sm hover:underline">
                                    +1 (737)-297-8569
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaEnvelope className="app-accent text-xl mt-1 shrink-0" />
                            <div>
                                <p className="app-heading font-semibold">Email</p>
                                <a href="mailto:chandrekha@yahoo.com" className="app-copy text-sm hover:underline">
                                    chandrekha@yahoo.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaClock className="app-accent text-xl mt-1 shrink-0" />
                            <div>
                                <p className="app-heading font-semibold">Hours</p>
                                <p className="app-copy text-sm">Open 24/7, every day of the year</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    {/* <div className="app-muted-surface rounded-2xl p-8 shadow-md">
                        <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="app-heading block text-sm font-medium mb-1">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        className="app-input w-full rounded-lg border px-4 py-2 focus:outline-none"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="app-heading block text-sm font-medium mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        className="app-input w-full rounded-lg border px-4 py-2 focus:outline-none"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="app-heading block text-sm font-medium mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        className="app-input w-full rounded-lg border px-4 py-2 focus:outline-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="app-button w-full font-semibold py-3 rounded-full hover:shadow-lg transition-shadow duration-200"
                                >
                                    Send Message
                                </button>
                        </form>
                    </div> */}
                </div>
            </section>
        </div>
    );
}
