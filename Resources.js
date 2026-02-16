function Resources() {
    const resources = [
        { 
            title: "Company Profile - Page 1", 
            size: "1.2 MB", 
            type: "IMG", 
            url: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/a625f72e-0684-49d5-8518-3554bce97810.png"
        },
        { 
            title: "Company Profile - Page 2", 
            size: "1.3 MB", 
            type: "IMG", 
            url: "https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/cb69af19-c28a-4e0d-b055-1c2553913fef.png"
        },
        { title: "2025 Architectural Trends", size: "4.2 MB", type: "PDF", url: "#" },
        { title: "Sustainable Materials Guide", size: "2.8 MB", type: "PDF", url: "#" },
    ];

    return (
        <section id="resources" className="py-16 bg-[var(--color-primary)] text-white" data-name="resources" data-file="components/Resources.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="heading-lg text-white mb-6">Client Resources</h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Access detailed specifications, design guides, and maintenance manuals to help you make informed decisions for your next project.
                        </p>
                        <button className="btn-primary bg-white text-[var(--color-primary)] hover:bg-gray-200">
                            Access Client Portal
                        </button>
                    </div>
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10">
                        <ul className="space-y-4">
                            {resources.map((res, idx) => (
                                <li key={idx}>
                                    <a 
                                        href={res.url} 
                                        download={res.url !== "#"}
                                        target={res.url !== "#" ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-sm transition-colors cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-[var(--color-accent)] rounded-sm">
                                                <div className="icon-file-text text-white"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-white group-hover:text-[var(--color-accent)] transition-colors">{res.title}</h4>
                                                <span className="text-xs text-gray-500">{res.type} • {res.size}</span>
                                            </div>
                                        </div>
                                        <div className="icon-download text-gray-400 group-hover:text-white"></div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}