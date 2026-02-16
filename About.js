function About() {
    return (
        <section id="about" className="section-padding bg-white overflow-hidden" data-name="about" data-file="components/About.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-square relative z-10">
                            <img 
                                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200&auto=format&fit=crop" 
                                alt="Architects meeting" 
                                className="w-full h-full object-cover rounded-sm shadow-xl"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-2/3 aspect-[4/3] bg-[var(--color-accent)] z-0 hidden md:block"></div>
                        <div className="absolute -top-8 -left-8 w-40 h-40 border-2 border-[var(--color-primary)] z-0 hidden md:block opacity-20"></div>
                    </div>
                    
                    <div>
                        <span className="text-[var(--color-accent)] font-medium tracking-widest uppercase text-sm block mb-3">Who We Are</span>
                        <h2 className="heading-xl mb-6">Crafting Spaces,<br/>Building Legacies.</h2>
                        <div className="space-y-6 text-body">
                            <p>Founded in 2000, interior designing furniture company began as a small boutique studio with a grand vision: to bridge the gap between architectural structure and interior harmony.</p>
                            <p>
                                We believe that true luxury lies in simplicity and functionality. Our team of award-winning architects and master craftsmen work in unison to create environments that are not just visually stunning, but intuitively livable.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-8 mt-10 pt-10 border-t border-gray-100">
                            <div>
                                <span className="block text-4xl font-light text-[var(--color-primary)] mb-1">1000+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Projects Completed</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-light text-[var(--color-primary)] mb-1">20+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">experience year</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}