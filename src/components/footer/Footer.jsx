import { Link } from "react-router-dom";
import Logo from "../../assets/websites/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const quickLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
];

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="app-footer">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <Link to="/" className="flex items-center gap-2 mb-4">
                        <img src={Logo} alt="DHANUSH PETROLEUM INC logo" className="w-10" />
                        <span className="app-footer-heading font-bold text-xl">DHANUSH PETROLEUM INC</span>
                    </Link>
                    <p className="text-sm leading-relaxed">
                        Powering communities with quality fuel, everyday convenience, entertainment, and genuine hospitality across every neighborhood we serve.
                    </p>
                    <div className="flex gap-4 mt-5">
                        <a href="#" aria-label="Facebook" className="app-icon-button w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Instagram" className="app-icon-button w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="Twitter" className="app-icon-button w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Quick links */}
                <div>
                    <h3 className="app-footer-heading font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        {quickLinks.map((item) => (
                            <li key={item.name}>
                                <Link to={item.link} className="app-footer-link transition-colors duration-200">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Locations */}
                <div>
                    <h3 className="app-footer-heading font-semibold text-lg mb-4">Our Stores</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/stores" className="app-footer-link">All Locations</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="app-footer-heading font-semibold text-lg mb-4">Get In Touch</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3 w-full">
                            <div className="w-full h-50 rounded-xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d802.6981898677124!2d-94.73296804811032!3d32.54224573743807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86363f53812818df%3A0xa7337290322cb290!2sBrake%20Time!5e0!3m2!1sen!2snp!4v1788034899286!5m2!1sen!2snp"
                                    className="w-full h-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                ></iframe>
                            </div>
                        </li>

                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="app-accent shrink-0" />
                            <a href="tel:+17372978569" className="hover:underline">
                                +1 (737)-297-8569
                            </a>
                        </li>

                        <li className="flex items-center gap-3">
                            <FaEnvelope className="app-accent shrink-0" />
                            <a href="mailto:chandrekha@yahoo.com" className="hover:underline">
                                chandrekha@yahoo.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/15">
                <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
                    <p>© {year} DHANUSH PETROLEUM INC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
