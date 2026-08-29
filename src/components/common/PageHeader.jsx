export default function PageHeader({ eyebrow, title, description, image }) {
    return (
        <section
            className="relative bg-cover bg-center py-24 sm:py-32"
            style={image ? { backgroundImage: `url(${image})` } : undefined}
        >
            {image && <div className="app-hero-overlay absolute inset-0" />}
            {!image && <div className="app-gradient absolute inset-0" />}
            <div className="relative container mx-auto px-6 text-center text-white">
                {eyebrow && (
                    <p className="uppercase tracking-widest text-white/75 font-semibold text-sm mb-3">
                        {eyebrow}
                    </p>
                )}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
                {description && (
                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/85">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
