function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Products', href: '#products' },
        { name: 'Designs', href: '#gallery' },
        { name: 'Resources', href: '#resources' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/60 backdrop-blur-md shadow-sm py-4' 
                    : 'bg-white shadow-sm py-6'
            }`}
            data-name="header"
            data-file="components/Header.js"
        >
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group shrink-0">
                    <img 
                        
                        
                       
                     style={{"paddingTop":"2px","paddingRight":"0px","paddingBottom":"2px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"16px","color":"rgb(28, 25, 23)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"start","fontWeight":"400","objectFit":"contain","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} src="https://app.trickle.so/storage/public/images/usr_1918fff9f0000001/16023330-3cec-414b-ae1c-56fc5d22ee1f.png" alt="Arch & Oak Logo" className="h-[60px] w-auto object-contain"/>
                    <span style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"10px","color":"rgb(28, 25, 23)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","fontWeight":"800","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-lg font-light tracking-[0.2em] text-[var(--color-primary)] uppercase">Grah interior</span>
                </a>

                {/* Navigation - Always Visible */}
                <nav className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className="text-sm font-medium tracking-wide text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--color-accent)] after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="hidden md:inline-flex px-6 py-2 border border-[var(--color-primary)] rounded-sm text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                        Get Quote
                    </a>
                </nav>
            </div>
        </header>
    );
}