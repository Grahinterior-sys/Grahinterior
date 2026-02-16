function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-white pt-20 pb-10" data-name="footer" data-file="components/Footer.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img 
                                
                                
                               
                             src="https://app.trickle.so/storage/app/Gemini_Generated_Image_d5ec9fd5ec9fd5ec.png" alt="Grah Interior" className="h-[60px] w-auto object-contain brightness-0 invert"/>
                            <span className="text-lg font-light tracking-[0.2em] text-white uppercase ml-2">Grah Interior</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Creating timeless spaces and furniture that define modern living. Excellence in every detail.
                        </p>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:text-[var(--color-primary)] transition-colors shrink-0">
                                    <div className="icon-instagram"></div>
                                </div>
                                <span className="text-gray-400 group-hover:text-white transition-colors">@grahinterior.co</span>
                            </a>
                            <a href="https://wa.me/" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:text-[var(--color-primary)] transition-colors shrink-0">
                                    <div className="icon-message-circle"></div>
                                </div>
                                <span className="text-gray-400 group-hover:text-white transition-colors">+91 8120578910</span>
                            </a>
                            <a href="tel:+1234567890" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:text-[var(--color-primary)] transition-colors shrink-0">
                                    <div className="icon-phone"></div>
                                </div>
                                <span className="text-gray-400 group-hover:text-white transition-colors">Name Mahesh Vishwakrma 
Mob no 9826437210</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-medium mb-6">Explore</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Designs</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#resources" className="hover:text-white transition-colors">Resources</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-medium mb-6">Legal</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-medium mb-6">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe to receive design inspiration and updates.</p>
                        <form className="flex gap-2">
                            <input type="email" placeholder="Your email" className="bg-white/10 border-none text-white px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]" />
                            <button className="bg-[var(--color-accent)] px-4 py-2 hover:bg-white hover:text-[var(--color-primary)] transition-colors">
                                <div className="icon-arrow-right"></div>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2026 GrahInterior. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Made by Akhilesh</p>
                </div>
            </div>
        </footer>
    );
}