function Products() {
    const categories = [
        {
            icon: "armchair",
            title: "Living Room",
            items: "Sofas, Coffee Tables, Lounge Chairs"
        },
        {
            icon: "utensils",
            title: "Dining & Kitchen",
            items: "Dining Tables, Bar Stools, Cabinetry"
        },
        {
            icon: "lamp",
            title: "Lighting",
            items: "Pendants, Floor Lamps, Architectural Light"
        },
        {
            icon: "briefcase",
            title: "Office",
            items: "Desks, Ergonomic Chairs, Storage"
        }
    ];

    return (
        <section id="products" className="section-padding bg-[var(--color-bg-light)]" data-name="products" data-file="components/Products.js">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8">
                    <div className="max-w-xl">
                        <h2 className="heading-lg mb-4">Curated Products</h2>
                        <p className="text-body">
                            Our furniture collection blends timeless craftsmanship with modern utility, ensuring every piece tells a story.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <a href="#" className="group flex items-center gap-2 text-[var(--color-primary)] font-medium hover:text-[var(--color-accent)]">
                            Download Catalog <div className="icon-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1"></div>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="bg-white p-8 border border-gray-100 hover:border-[var(--color-accent)] hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[var(--color-bg-light)] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                                <div className={`icon-${cat.icon} text-xl text-[var(--color-primary)] group-hover:text-white transition-colors`}></div>
                            </div>
                            <h3 className="text-xl font-medium text-[var(--color-primary)] mb-2">{cat.title}</h3>
                            <p className="text-gray-500 text-sm mb-6">{cat.items}</p>
                            <a href="#" className="inline-flex items-center text-sm font-medium text-[var(--color-accent)] group-hover:text-[var(--color-primary)]">
                                Shop Collection
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}