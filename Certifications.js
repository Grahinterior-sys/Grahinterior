function Certifications() {
    return (
        <section className="py-12 border-b border-gray-100" data-name="certifications" data-file="components/Certifications.js">
            <div className="container-custom">
                <p className="text-center text-gray-400 text-sm font-medium tracking-widest uppercase mb-8">Trusted Certifications & Awards</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex flex-col items-center gap-2">
                        <div className="icon-award text-4xl text-[var(--color-accent)]"></div>
                        <span className="font-bold text-[var(--color-primary)]">BestDesign 2024</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="icon-shield-check text-4xl text-[var(--color-accent)]"></div>
                        <span className="font-bold text-[var(--color-primary)]">ISO 9001</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="icon-leaf text-4xl text-[var(--color-accent)]"></div>
                        <span className="font-bold text-[var(--color-primary)]">Green Building</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="icon-badge-check text-4xl text-[var(--color-accent)]"></div>
                        <span className="font-bold text-[var(--color-primary)]">Certified Pro</span>
                    </div>
                </div>
            </div>
        </section>
    );
}