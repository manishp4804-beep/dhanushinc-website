import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="app-shell min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
            <p className="app-primary font-bold text-lg mb-2">404</p>
            <h1 className="app-heading text-3xl sm:text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="app-copy mb-8 max-w-md">
                The page you're looking for doesn't exist or may have been moved.
            </p>
            <Link
                to="/"
                className="app-button inline-block font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-200"
            >
                Back to Home
            </Link>
        </div>
    );
}
