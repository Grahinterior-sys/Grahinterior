function Gallery() {
    const designs = [
        {
            id: 6,
            title: "Modern Elegance",
            category: "Interior",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/9f58ce6b-ce4b-4e8d-9ee6-b2483b6b82dc.jpeg",
            description: "Contemporary design with sleek lines and comfort."
        },
        {
            id: 7,
            title: "Cozy Corner",
            category: "Living",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/8adc2c6e-74d4-47fc-9264-b417519ccc7d.jpeg",
            description: "Perfect balance of aesthetics and relaxation."
        },
        {
            id: 8,
            title: "Minimalist Studio",
            category: "Studio",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/b321d776-ecdc-4131-bc71-fe8d9ec291bb.jpeg",
            description: "Efficient use of space with premium materials."
        },
        {
            id: 9,
            title: "Executive Suite",
            category: "Commercial",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/7d173432-7720-40bd-a9f4-694de7595757.jpeg",
            description: "Professional environment designed for productivity."
        },
        {
            id: 10,
            title: "Luxury Living",
            category: "Residential",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/75316886-a6e7-40cf-ba86-7705b59e9d89.jpeg",
            description: "Opulent interiors for the discerning client."
        },
        {
            id: 11,
            title: "Nature Inspired",
            category: "Eco-Friendly",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/7ab241a2-80ab-41e8-a5b2-8bcd92511d31.jpeg",
            description: "Bringing the outdoors in with organic textures."
        },
        {
            id: 12,
            title: "Artistic Space",
            category: "Creative",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/fd8b30dd-45e7-4804-b8c6-c5e59bff4483.jpeg",
            description: "Where design meets art in every corner."
        },
        {
            id: 13,
            title: "Classic Revival",
            category: "Traditional",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/e74cbf73-7379-40de-99f2-e68f91aaaaf7.jpeg",
            description: "Timeless designs reimagined for modern homes."
        },
        {
            id: 14,
            title: "Urban Sanctuary",
            category: "Residential",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/c0f5f4cd-3d7e-4098-8333-682a58951986.jpeg",
            description: "A peaceful retreat in the heart of the city."
        },
        {
            id: 1,
            title: "The Glass Pavilion",
            category: "Residential",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/0f4057b9-da84-4abc-8efd-1ab8d7e9ea9c.jpeg",
            description: "Modern minimalist living space centered around natural light."
        },
        {
            id: 2,
            title: "Urban Loft Series",
            category: "Interior",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/05c40fe8-ae9f-4b5c-ade3-c42c4d62f92f.jpeg",
            description: "Industrial chic combined with warm wood textures."
        },
        {
            id: 3,
            title: "Azure Corporate HQ",
            category: "Commercial",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/3e6501bf-d14a-4229-a9e7-b96ef0039bf1.jpeg",
            description: "Sustainable workspace design with open-plan architecture."
        },
        {
            id: 5,
            title: "Zenith Villa",
            category: "Residential",
            image: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/be252b83-b3c6-43f9-8f5a-e2c8df7c65a5.jpeg",
            description: "Luxury hilltop residence with panoramic views."
        }
    ];

    return (
        <section id="gallery" className="section-padding bg-white" data-name="gallery" data-file="components/Gallery.js">
            <div className="container-custom">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <span className="text-[var(--color-accent)] font-medium tracking-widest uppercase text-sm block mb-3">Our Portfolio</span>
                    <h2 className="heading-xl mb-6">Signature Designs</h2>
                    <p className="text-body">
                        Explore our curated selection of architectural marvels and bespoke furniture pieces, designed to elevate the human experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {designs.map((design) => (
                        <div key={design.id} className="group relative overflow-hidden cursor-pointer">
                            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                                <img 
                                    src={design.image} 
                                    alt={design.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-[var(--color-accent)] text-xs font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{design.category}</span>
                                <h3 className="text-white text-lg font-light mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">{design.title}</h3>
                                <p className="text-white/80 text-xs line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">{design.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="btn-outline">View All Projects</button>
                </div>
            </div>
        </section>
    );
}