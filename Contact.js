function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct email body
        const subject = `New Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
        
        // Open default email client
        window.location.href = `mailto:grahinterior@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const handleWhatsApp = (e) => {
        e.preventDefault();
        // Construct WhatsApp message
        const text = `*New Inquiry*%0A------------------%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
        
        // Open WhatsApp
        window.open(`https://wa.me/918120578910?text=${text}`, '_blank');
    };

    return (
        <section id="contact" className="section-padding bg-white" data-name="contact" data-file="components/Contact.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-[var(--color-accent)] font-medium tracking-widest uppercase text-sm block mb-3">Get In Touch</span>
                        <h2 className="heading-xl mb-6">Let's Build Something<br/>Extraordinary</h2>
                        <p className="text-body mb-8">
                            Whether you're looking for a consultation on a new architectural project or inquiring about our furniture collections, we're here to help.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center shrink-0">
                                    <div className="icon-map-pin text-[var(--color-primary)]"></div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase font-medium">Visit Us</p>
                                    <p className="text-lg">884, scheme no. 51 Sangam Nagar<br/>Indore MP 452006</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center shrink-0">
                                    <div className="icon-phone text-[var(--color-primary)]"></div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase font-medium">Call Us</p>
                                    <a href="tel:+919826437210" className="text-lg font-medium hover:text-[var(--color-accent)]">+91 9826437210</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center shrink-0">
                                    <div className="icon-mail text-[var(--color-primary)]"></div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase font-medium">Email Us</p>
                                    <a href="mailto:grahinterior@gmail.com" className="text-lg font-medium hover:text-[var(--color-accent)]">grahinterior@gmail.com</a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center shrink-0">
                                    <div className="icon-clock text-[var(--color-primary)]"></div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase font-medium">Business Hours</p>
                                    <p className="text-lg">Mon - Fri: 10:00 - 18:00</p>
                                    <p className="text-gray-500">Weekend: By Appointment Only</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[var(--color-bg-light)] p-8 md:p-12 rounded-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--color-primary)] outline-none transition-colors" 
                                        placeholder="John Doe" 
                                        required 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--color-primary)] outline-none transition-colors" 
                                        placeholder="john@example.com" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Phone</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--color-primary)] outline-none transition-colors" 
                                    placeholder="+91 0000000000" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--color-primary)] outline-none transition-colors h-32 resize-none" 
                                    placeholder="Tell us about your project..." 
                                    required
                                ></textarea>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button type="submit" className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2">
                                    <div className="icon-mail"></div> Send via Email
                                </button>
                                <button 
                                    type="button" 
                                    onClick={handleWhatsApp}
                                    className="w-full inline-flex items-center justify-center px-8 py-4 border border-[#25D366] text-lg font-medium rounded-sm text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors duration-300 gap-2"
                                >
                                    <div className="icon-message-circle"></div> Send via WhatsApp
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 text-center mt-4">
                                Clicking send will open your default email client or WhatsApp to complete the message.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}