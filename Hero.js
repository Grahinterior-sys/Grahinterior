function Hero() {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2600&auto=format&fit=crop",
            title: "Redefining the Art of Existence",
            subtitle: "Where visionary architecture meets the soul of modern living."
        },
        {
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
            title: "Silence, Crafted in Stone & Light",
            subtitle: "Minimalist sanctuaries designed to pause time and inspire clarity."
        },
        {
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2600&auto=format&fit=crop",
            title: "Architecting the Extraordinary",
            subtitle: "Bespoke environments that blur the line between function and masterpiece."
        },
        {
            image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2600&auto=format&fit=crop",
            title: "Structure in Harmony",
            subtitle: "Designing spaces where light, shadow, and form dance together."
        },
        {
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2600&auto=format&fit=crop",
            title: "The Essence of Comfort",
            subtitle: "Interiors crafted for warmth, elegance, and timeless living."
        }
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[90vh] min-h-[600px] bg-[var(--color-primary)] overflow-hidden" data-name="hero" data-file="components/Hero.js">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img 
                        src={slide.image} 
                        alt={slide.title}
                        className={`w-full h-full object-cover transition-transform duration-[6000ms] ${
                            index === currentSlide ? 'scale-105' : 'scale-100'
                        }`}
                    />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-20 container-custom h-full flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-6 max-w-5xl transition-all duration-700 transform translate-y-0 opacity-100">
                    {slides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mb-10 transition-all duration-700 delay-100 transform translate-y-0 opacity-100">
                    {slides[currentSlide].subtitle}
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#gallery" className="btn-primary border-white bg-white text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] min-w-[160px]">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-3 border border-white/30 backdrop-blur-sm text-base font-medium rounded-sm text-white hover:bg-white hover:text-[var(--color-primary)] transition-colors duration-300 min-w-[160px]">
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-0 w-full z-30 flex justify-center gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}