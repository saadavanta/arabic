document.addEventListener("DOMContentLoaded", () => {
  // Hide loading screen after 2 seconds
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) {
      loadingScreen.style.display = "none"
    }
  }, 2000)

  // COMPLETE TRANSLATION DATA - EVERY SINGLE WORD TRANSLATED
  const translations = {
    en: {
      // Loading Screen - EVERY WORD
      "loading-text": "Loading...",
      "loading-logo": "Mualim Interiors",
      "loading-title": "Mualim Interiors",
      "loading-subtitle": "Loading...",

      // Navigation - EVERY WORD
      "logo-text": "Mualim Interiors",
      "nav-home": "Home",
      "nav-about": "About Us",
      "nav-services": "Services",
      "nav-projects": "Projects",
      "nav-contact": "Contact",
      "nav-portfolio": "Portfolio",

      // Header Controls - EVERY WORD
      "theme-toggle": "Toggle theme",
      "lang-toggle": "Toggle language",
      "mobile-menu": "Toggle mobile menu",
      "current-lang-en": "EN",
      "current-lang-ar": "AR",

      // Hero Sections - EVERY WORD
      "hero-title": "Crafting Excellence Above Every Home",
      "hero-subtitle": "Where precision, craftsmanship, and innovation converge to create architectural masterpieces that stand the test of time.",
      "hero-btn-services": "Our Services",
      "hero-btn-consultation": "Free Consultation",

      // Home Page Intro - EVERY WORD
      "intro-title": "Welcome to Mualim Interiors",
      "intro-subtitle": "We are not just interior designers; we are curators of protection, aesthetics, and long-lasting performance.",
      "intro-description": "With every tile, shingle, and metal sheet, we sculpt reliability, redefine beauty, and reinforce trust. Mualim Interiors represents the pinnacle of interior design excellence — a symbol of endurance, elegance, and engineering brilliance. Our expertise stretches across commercial, residential, and industrial sectors, making us the premium choice for those who believe their homes deserve more than shelter — they deserve a statement.",
      "intro-btn-learn-more": "Learn More About Us",
      "intro-image-alt": "Luxury Interior Design",

      // Features Section - EVERY WORD
      "features-title": "Why Choose Mualim Interiors",
      "features-subtitle": "Experience the difference that premium materials, expert craftsmanship, and innovative design can make.",
      "feature-1-title": "Premium Materials",
      "feature-1-description": "We source only the finest materials from around the world, ensuring durability, beauty, and performance that exceeds industry standards.",
      "feature-2-title": "Expert Craftsmanship",
      "feature-2-description": "Our team of skilled craftsmen brings decades of experience to every project, ensuring precision and attention to detail in every installation.",
      "feature-3-title": "Innovative Solutions",
      "feature-3-description": "We stay at the forefront of interior design technology, incorporating the latest innovations to provide solutions that are both beautiful and functional.",
      "feature-4-title": "Sustainable Practices",
      "feature-4-description": "We're committed to environmental responsibility, using energy-efficient materials and sustainable installation methods to protect both your home and our planet.",

      // Services Preview - EVERY WORD
      "services-preview-title": "Our Premium Services",
      "services-preview-subtitle": "From residential sanctuaries to commercial landmarks, we deliver excellence across every sector.",
      "service-1-title": "Residential Interior Design",
      "service-1-description": "Timeless elegance and protection for your home. From traditional clay tiles to modern solar-integrated panels.",
      "service-1-image-alt": "Residential Interior Design",
      "service-2-title": "Commercial Interior Design",
      "service-2-description": "Engineered for businesses that demand excellence. Our systems endure extreme weather while maintaining aesthetic appeal.",
      "service-2-image-alt": "Commercial Interior Design",
      "service-3-title": "Industrial Interior Design",
      "service-3-description": "Heavy-duty solutions for factories and warehouses. We focus on structural integrity and operational performance.",
      "service-3-image-alt": "Industrial Interior Design",
      "service-learn-more": "Learn More",
      "services-view-all": "View All Services",

      // Projects Preview - EVERY WORD
      "projects-preview-title": "Recent Projects",
      "projects-preview-subtitle": "A glimpse into our portfolio of architectural masterpieces.",
      "project-1-title": "Jeddah Luxury Villa",
      "project-1-category": "Residential",
      "project-1-image-alt": "Jeddah Luxury Villa",
      "project-2-title": "Riyadh Corporate Tower",
      "project-2-category": "Commercial",
      "project-2-image-alt": "Riyadh Corporate Tower",
      "project-3-title": "Dubai Residential Complex",
      "project-3-category": "Residential",
      "project-3-image-alt": "Dubai Residential Complex",
      "projects-view-all": "View All Projects",

      // Testimonials - EVERY WORD
      "testimonials-title": "Client Testimonials",
      "testimonials-heading": "What Our Clients Say",
      "testimonial-1-text": "Mualim Interiors transformed our office space beyond our expectations. Their attention to detail and craftsmanship is unmatched. Highly recommended!",
      "testimonial-2-text": "We hired Mualim Interiors for our home renovation and couldn't be happier. The gypsum board work in our ceilings is absolutely stunning. Professional team from start to finish.",
      "testimonial-3-text": "The GRC facade they installed on our commercial building has completely transformed its appearance. Quality work and excellent project management.",
      "testimonial-4-text": "Outstanding service! The team completed our villa interior design on schedule and within budget. The quality of materials and workmanship exceeded our expectations.",
      "testimonial-5-text": "Mualim Interiors handled our industrial warehouse project with precision and professionalism. The insulation and waterproofing solutions have been perfect for our operations.",
      "testimonial-6-text": "The custom interior design they created for our retail center is absolutely beautiful. It perfectly complements our brand and has impressed all our customers.",
      "testimonial-7-text": "Excellent maintenance service! They quickly identified and fixed issues with our building's interior that we didn't even know about. Very thorough and professional.",
      "testimonial-8-text": "We've worked with Mualim Interiors on multiple projects. Their consistency in quality and reliability is unmatched. They're our go-to partner for all interior design needs.",
      "testimonial-9-text": "The waterproofing and insulation work they did on our mansion is exceptional. We've had no issues with moisture or temperature control. Highly satisfied with the investment.",
      "testimonial-10-text": "From consultation to completion, Mualim Interiors provided exceptional service. Their team is knowledgeable, courteous, and delivers results that speak for themselves.",

      // Testimonial Names and Positions - EVERY WORD
      "testimonial-1-name": "Ahmed Al-Rashid",
      "testimonial-1-position": "CEO, Tech Solutions",
      "testimonial-2-name": "Fatima Abdullah",
      "testimonial-2-position": "Homeowner",
      "testimonial-3-name": "Khalid Al-Mansour",
      "testimonial-3-position": "Property Developer",
      "testimonial-4-name": "Mohammed Al-Otaibi",
      "testimonial-4-position": "Villa Owner, Jeddah",
      "testimonial-5-name": "Sara Al-Dosari",
      "testimonial-5-position": "Operations Manager, Logistics Hub",
      "testimonial-6-name": "Noor Al-Shammari",
      "testimonial-6-position": "Retail Manager, Mecca Center",
      "testimonial-7-name": "Hassan Al-Qahtani",
      "testimonial-7-position": "Building Manager, Riyadh Tower",
      "testimonial-8-name": "Layla Al-Harbi",
      "testimonial-8-position": "Project Director, Construction Firm",
      "testimonial-9-name": "Amira Al-Saud",
      "testimonial-9-position": "Homeowner, Medina",
      "testimonial-10-name": "Omar Al-Zahrani",
      "testimonial-10-position": "Business Owner, Dubai",

      // CTA Sections - EVERY WORD
      "cta-title": "Ready to Transform Your Property?",
      "cta-subtitle": "Contact us today for a free consultation and let's bring your vision to life.",
      "cta-btn-contact": "Get In Touch",
      "cta-btn-call": "Call Us Now",

      // About Page - EVERY WORD
      "about-page-title": "ABOUT US",
      "about-page-subtitle": "Let’s get started WITH  MUALIM  INTERIORS",

      "about-story-title": "Our Story",
      "about-story-description": "Mualim Interiors was founded with a singular vision — to elevate interior design from a mere structural component to a masterpiece of protection and art. From humble beginnings in the heart of Makkah, our brand has evolved into a global symbol of durability and prestige.",
      "about-story-description-2": "With every project we undertake, we renew our vow to quality and client satisfaction. Our team of designers, engineers, and craftsmen work in harmony, combining age-old interior design techniques with the most advanced global innovations.",
      "about-story-description-3": "We believe a roof is the crown of every home, and its construction must reflect strength, precision, and timeless beauty. We focus on high-quality materials, personalised designs, and customer-driven solutions. Every detail — from insulation to installation — is handled with a perfectionist's eye.",
      "about-story-image-alt": "Our Team",

      // Mission, Vision, Values - EVERY WORD
      "mission-title": "Our Mission",
      "mission-description": "To offer interior design that lasts generations. We believe a roof is the crown of every home, and its construction must reflect strength, precision, and timeless beauty.",

      "vision-title": "Our Vision",
      "vision-description": "To become the global benchmark for interior design excellence, setting new standards in quality, innovation, and aesthetic sophistication.",

      "values-title": "Our Core Values",
      "values-subtitle": "The principles that guide every action we take.",
      "value-1-title": "Integrity",
      "value-1-description": "We honor our commitments with transparency and honesty, building relationships based on trust.",
      "value-2-title": "Innovation",
      "value-2-description": "We continuously explore new technologies and methodologies to deliver cutting-edge solutions.",
      "value-3-title": "Excellence",
      "value-3-description": "We pursue perfection in every aspect of our work, from the smallest detail to the grandest vision.",

      // Team Section - EVERY WORD
      "team-title": "Meet Our Team",
      "team-subtitle": "The experts behind our exceptional craftsmanship.",
      "team-member-1-name": "Ahmed Al-Fahad",
      "team-member-1-position": "Founder & CEO",
      "team-member-1-description": "With over 25 years in the industry, Ahmed founded Mualim Interiors with a vision to redefine interior design excellence in the region.",
      "team-member-1-alt": "CEO",
      "team-member-2-name": "Fatima Al-Rashid",
      "team-member-2-position": "Chief Technical Officer",
      "team-member-2-description": "Fatima brings innovative interior design technologies and sustainable practices to every project we undertake.",
      "team-member-2-alt": "CTO",
      "team-member-3-name": "Khalid Al-Mansour",
      "team-member-3-position": "Head of Design",
      "team-member-3-description": "Khalid's artistic vision and technical expertise ensure that every interior we create is both beautiful and functional.",
      "team-member-3-alt": "Head Designer",

      // CEO Section - EVERY WORD
      "ceo-title": "Meet Our CEO",
      "ceo-subtitle": "The visionary behind Mualim Interiors",
      "ceo-name": "Muzamil",
      "ceo-position": "Founder & Chief Executive Officer",
      "ceo-experience": "13+ Years of Industry Experience",
      "ceo-image-alt": "CEO Muzamil",
      "ceo-bio": "Muzamil is a visionary leader with over 13 years of experience in the interior design and construction industry. His passion for excellence, innovation, and customer satisfaction has been the driving force behind Mualim Interiors' success. Under his leadership, the company has grown from a small local business to a recognized regional leader in premium interior design solutions.",
      "ceo-bio-2": "With a deep understanding of market trends and a commitment to sustainable practices, Muzamil continues to push the boundaries of what's possible in interior design, ensuring that every project reflects the highest standards of quality and craftsmanship.",

      // Process Section - EVERY WORD
      "about-process-title": "Our Process",
      "about-process-subtitle": "How we bring your vision to life",
      "about-process-step-1-title": "Discovery & Consultation",
      "about-process-step-1-description": "We listen to your needs, understand your vision, and assess your space to create a tailored solution.",
      "about-process-step-2-title": "Design & Planning",
      "about-process-step-2-description": "Our expert designers create detailed plans and 3D visualizations to bring your vision to life.",
      "about-process-step-3-title": "Material Selection",
      "about-process-step-3-description": "We guide you through premium material options that balance aesthetics, durability, and budget.",
      "about-process-step-4-title": "Expert Installation",
      "about-process-step-4-description": "Our skilled craftsmen execute the project with precision, ensuring flawless results.",
      "about-process-step-5-title": "Quality Assurance",
      "about-process-step-5-description": "We conduct thorough inspections to ensure every detail meets our exacting standards.",

      "about-cta-title": "Join Our Journey of Excellence",
      "about-cta-subtitle": "Experience the Mualim Interiors difference for yourself.",
      "about-cta-btn-contact": "Get In Touch",
      "about-cta-btn-projects": "View Our Work",

      // Services Page - EVERY WORD
      "services-page-title": "Where Function Meets Aesthetic Perfection",
      "services-page-subtitle": "Each service at Mualim Interiors is crafted to bring value, elegance, and durability to your property.",

      "services-overview-title": "Our Premium Services",
      "services-overview-subtitle": "At Mualim Interiors, we provide a full spectrum of premium interior design solutions designed for those who expect the very best.",

      // Gypsum Services - EVERY WORD
      "service-gypsum-title": "Gypsum Board GRC Facades",
      "service-gypsum-description": "Premium gypsum board and GRC facade solutions for modern interior design. Lightweight, durable, and aesthetically superior for residential and commercial spaces.",
      "service-gypsum-alt": "Gypsum Board",
      "service-gypsum-feature-1": "Lightweight construction",
      "service-gypsum-feature-2": "Fire-resistant materials",
      "service-gypsum-feature-3": "Sound insulation",
      "service-gypsum-feature-4": "Easy installation",

      "service-grc-install-title": "GRC Gypsum Board Installation",
      "service-grc-install-description": "Expert installation of GRC gypsum boards with precision and attention to detail. Our skilled craftsmen ensure flawless execution for perfect finishes.",
      "service-grc-install-alt": "GRC Installation",
      "service-grc-install-feature-1": "Professional installation",
      "service-grc-install-feature-2": "Quality assurance",
      "service-grc-install-feature-3": "Timely completion",
      "service-grc-install-feature-4": "Warranty coverage",

      "service-cornice-title": "Cornice Column Window Design",
      "service-cornice-description": "Elegant cornice, column, and window frame designs that enhance architectural beauty. Custom solutions for traditional and modern aesthetics.",
      "service-cornice-alt": "Cornice Design",
      "service-cornice-feature-1": "Custom designs",
      "service-cornice-feature-2": "Architectural elegance",
      "service-cornice-feature-3": "Premium materials",
      "service-cornice-feature-4": "Durable finishes",

      "service-cement-title": "Cement Board Facades",
      "service-cement-description": "Durable cement board facade solutions for exterior and interior applications. Weather-resistant and long-lasting for maximum protection.",
      "service-cement-alt": "Cement Board",
      "service-cement-feature-1": "Weather resistant",
      "service-cement-feature-2": "Long-lasting durability",
      "service-cement-feature-3": "Moisture protection",
      "service-cement-feature-4": "Versatile applications",

      // Previous Services - EVERY WORD
      "service-1-title": "Residential Interior Design",
      "service-1-description": "Our residential interior design solutions bring timeless elegance and protection to your home. Whether you prefer traditional clay tiles, sleek modern metal, or innovative solar-integrated panels, we ensure every interior is a statement of strength and style.",
      "service-1-image-alt": "Residential Interior Design",
      "service-1-feature-1": "Premium material selection",
      "service-1-feature-2": "Custom design options",
      "service-1-feature-3": "Enhanced weather protection",
      "service-1-feature-4": "Energy-efficient solutions",

      "service-2-title": "Commercial Interior Design",
      "service-2-description": "From corporate towers to retail complexes, our commercial interior design systems are engineered to endure extreme weather and heavy loads while maintaining aesthetic appeal and energy efficiency.",
      "service-2-image-alt": "Commercial Interior Design",
      "service-2-feature-1": "Heavy-duty construction",
      "service-2-feature-2": "Minimal business disruption",
      "service-2-feature-3": "Long-term warranty options",
      "service-2-feature-4": "Custom branding solutions",

      "service-3-title": "Industrial Interior Design",
      "service-3-description": "We specialise in large-scale interior design for factories, warehouses, and logistics hubs. Our focus on structural integrity, temperature regulation, and noise insulation ensures optimal operational performance.",
      "service-3-image-alt": "Industrial Interior Design",
      "service-3-feature-1": "Specialized material options",
      "service-3-feature-2": "Advanced insulation solutions",
      "service-3-feature-3": "Custom drainage systems",
      "service-3-feature-4": "Equipment integration options",

      "service-4-title": "Interior Repairs & Maintenance",
      "service-4-description": "We restore and maintain interiors with utmost care, using high-quality materials to extend their lifespan. Whether it's minor leaks or full refurbishments, we handle it with expertise.",
      "service-4-image-alt": "Interior Repairs & Maintenance",
      "service-4-feature-1": "Comprehensive inspection",
      "service-4-feature-2": "Preventive maintenance plans",
      "service-4-feature-3": "Emergency repair services",
      "service-4-feature-4": "Extended warranty options",

      "service-5-title": "Interior Waterproofing & Insulation",
      "service-5-description": "Our advanced waterproofing systems protect against moisture and temperature variations, creating sustainable, cost-efficient, and weatherproof structures.",
      "service-5-image-alt": "Interior Waterproofing & Insulation",
      "service-5-feature-1": "Advanced membrane technology",
      "service-5-feature-2": "Thermal insulation options",
      "service-5-feature-3": "Energy efficiency improvements",
      "service-5-feature-4": "Long-lasting protection",

      "service-6-title": "Custom Interior Design",
      "service-6-description": "We collaborate with architects and designers to craft custom interiors that complement modern and classic architecture alike — bringing individuality to every skyline.",
      "service-6-image-alt": "Custom Interior Design",
      "service-6-feature-1": "Bespoke design solutions",
      "service-6-feature-2": "3D visualization options",
      "service-6-feature-3": "Material experimentation",
      "service-6-feature-4": "Unique architectural elements",

      "service-cta": "Get a Free Quote",

      // Process Section - EVERY WORD
      "process-title": "Our Process",
      "process-subtitle": "From concept to completion, we ensure a seamless experience.",
      "process-step-1-title": "Consultation",
      "process-step-1-description": "We begin with a thorough consultation to understand your needs, preferences, and budget.",
      "process-step-2-title": "Design & Planning",
      "process-step-2-description": "Our team creates detailed designs and plans tailored to your specific requirements.",
      "process-step-3-title": "Material Selection",
      "process-step-3-description": "We help you choose the perfect materials that balance aesthetics, durability, and budget.",
      "process-step-4-title": "Installation",
      "process-step-4-description": "Our skilled craftsmen execute the installation with precision and attention to detail.",
      "process-step-5-title": "Final Inspection",
      "process-step-5-description": "We conduct a thorough inspection to ensure every aspect meets our high standards.",

      "services-cta-title": "Ready to Transform Your Property?",
      "services-cta-subtitle": "Contact us today for a free consultation and let's bring your vision to life.",
      "services-cta-btn-contact": "Get In Touch",
      "services-cta-btn-projects": "View Our Work",

      // Show More/Less - EVERY WORD
      "show-more": "Show More Services",
      "show-less": "Show Less Services",

      // Projects Page - EVERY WORD
      "projects-page-title": "A Showcase of Mastery and Modern Design",
      "projects-page-subtitle": "Every project by Mualim Interiors tells a story — of innovation, precision, and timeless design.",

      "filter-all": "All Projects",
      "filter-residential": "Residential",
      "filter-commercial": "Commercial",
      "filter-industrial": "Industrial",

      "project-1-title": "Jeddah Luxury Villa",
      "project-1-category": "Residential",
      "project-1-description": "A stunning Mediterranean-inspired villa featuring custom clay tiles and integrated solar panels for maximum energy efficiency.",
      "project-1-image-alt": "Jeddah Luxury Villa",
      "project-2-title": "Riyadh Corporate Tower",
      "project-2-category": "Commercial",
      "project-2-description": "A modern commercial complex with innovative metal roofing designed to withstand extreme weather conditions.",
      "project-2-image-alt": "Riyadh Corporate Tower",
      "project-3-title": "Dubai Residential Complex",
      "project-3-category": "Residential",
      "project-3-description": "A serene residential complex featuring custom interior design solutions that complement the modern architectural design.",
      "project-3-image-alt": "Dubai Residential Complex",
      "project-4-title": "Dammam Industrial Warehouse",
      "project-4-category": "Industrial",
      "project-4-description": "A large-scale industrial facility with specialized interior design designed for optimal temperature regulation and durability.",
      "project-4-image-alt": "Dammam Industrial Warehouse",
      "project-5-title": "Mecca Retail Center",
      "project-5-category": "Commercial",
      "project-5-description": "A bustling retail complex with custom interior design that enhances both aesthetic appeal and energy efficiency.",
      "project-5-image-alt": "Mecca Retail Center",
      "project-6-title": "Medina Luxury Mansion",
      "project-6-category": "Residential",
      "project-6-description": "An exquisite mansion featuring custom interior design with intricate detailing that reflects traditional Arabian architecture.",
      "project-6-image-alt": "Medina Luxury Mansion",

      "project-view-details": "View Details",
      "pagination-prev": "Previous",
      "pagination-next": "Next",

      "projects-cta-title": "Inspired by Our Work?",
      "projects-cta-subtitle": "Let's create something extraordinary together.",
      "projects-cta-btn-contact": "Start Your Project",
      "projects-cta-btn-services": "Explore Services",

      // Contact Page - EVERY WORD
      "contact-page-title": "Let's Build Your Dream Project Together",
      "contact-page-subtitle": "We'd love to hear from you. Whether you're planning a new roof, an elegant ceiling, or a custom wall design — our team is ready to make it happen.",

      "contact-info-title": "Get In Touch",
      "contact-info-subtitle": "Reach out to us through any of the following channels",
      "contact-address-title": "Address",
      "contact-address": "Al-Masjid Road, Makkah, Saudi Arabia",
      "contact-phone-title": "Phone",
      "contact-phone": "+966 58 245 3791",
      "contact-email-title": "Email",
      "contact-email": "support@mualiminteriors.com",
      "contact-hours-title": "Working Hours",
      "contact-hours": "Saturday – Thursday | 9:00 AM – 7:00 PM",

      "contact-form-title": "Send Us a Message",
      "contact-form-subtitle": "Fill out the form below and we'll get back to you as soon as possible",
      "form-name-label": "Full Name",
      "form-email-label": "Email Address",
      "form-phone-label": "Phone Number",
      "form-service-label": "Service Interested In",
      "form-service-option-default": "Select a Service",
      "form-service-option-residential": "Residential Interior Design",
      "form-service-option-commercial": "Commercial Interior Design",
      "form-service-option-industrial": "Industrial Interior Design",
      "form-service-option-repairs": "Interior Repairs & Maintenance",
      "form-service-option-waterproofing": "Interior Waterproofing & Insulation",
      "form-service-option-custom": "Custom Interior Design",
      "form-message-label": "Message",
      "form-submit": "Send Message",

      "map-title": "Find Us",

      // FAQ Section - EVERY WORD
      "faq-title": "Frequently Asked Questions",
      "faq-subtitle": "Find answers to common questions about our services",
      "faq-1-question": "How long does a typical interior design project take?",
      "faq-1-answer": "The duration of an interior design project depends on various factors including the size of the space, the materials used, and weather conditions. A typical residential interior design project takes between 3-7 days, while commercial projects may take several weeks. We provide a detailed timeline during the consultation phase.",
      "faq-2-question": "Do you offer warranties on your interior design services?",
      "faq-2-answer": "Yes, we offer comprehensive warranties on all our interior design services. The specific warranty terms depend on the materials used and the type of service provided. Typically, our workmanship is covered for 5-10 years, while material warranties can range from 20 years to a lifetime, depending on the product.",
      "faq-3-question": "How do I know if my interior needs repair or replacement?",
      "faq-3-answer": "Several signs indicate your interior may need attention, including missing or damaged tiles, leaks, water stains on walls, granules in gutters, and visible sagging. Our experts can provide a thorough inspection to determine whether repair or replacement is the best option for your situation.",
      "faq-4-question": "Do you provide free estimates?",
      "faq-4-answer": "Yes, we provide free, no-obligation estimates for all our services. Our team will assess your interior design needs and provide a detailed quote with transparent pricing. Contact us today to schedule your free consultation.",

      "contact-cta-title": "Ready to Transform Your Property?",
      "contact-cta-subtitle": "Contact us today for a free consultation and let's bring your vision to life.",
      "contact-cta-btn-call": "Call Us Now",
      "contact-cta-btn-projects": "View Our Work",

      // Footer - EVERY WORD
      "footer-description": "Your Home, Crowned with Excellence. Premium interior design solutions for those who demand the very best.",
      "footer-quick-links": "Quick Links",
      "footer-services": "Services",
      "footer-service-1": "Residential Interior Design",
      "footer-service-2": "Commercial Interior Design",
      "footer-service-3": "Industrial Interior Design",
      "footer-service-4": "Interior Repairs & Maintenance",
      "footer-service-5": "Custom Interior Design",
      "footer-contact": "Contact Info",
      "footer-address": "Al-Masjid Road, Makkah, Saudi Arabia",
      "footer-phone": "+966 58 245 3791",
      "footer-email": "support@mualiminteriors.com",
      "footer-hours": "Saturday – Thursday | 9:00 AM – 7:00 PM",
      "footer-rights": "All Rights Reserved.",

      // Floating Buttons - EVERY WORD
      "whatsapp-title": "Chat on WhatsApp",
      "phone-title": "Call Us",
      "back-to-top-title": "Back to Top",

      // Social Media - EVERY WORD
      "social-facebook": "Facebook",
      "social-twitter": "Twitter",
      "social-instagram": "Instagram",
      "social-linkedin": "LinkedIn",

      // Form Success Messages - EVERY WORD
      "form-success": "Form submitted successfully! We will get back to you soon.",
      "form-error": "Please fill in all required fields.",

      // Rating Stars - EVERY WORD
      "rating-text": "Rating",
      "stars-text": "stars",

      // Section Titles - EVERY WORD
      "section-title-decoration": "Decoration Line",
      "title-decoration": "Title Decoration",

      // Video Elements - EVERY WORD
      "video-alt": "Background Video",
      "video-description": "Company showcase video",

      // Image Alt Texts - EVERY WORD
      "team-image-alt": "Team Member",
      "project-image-alt": "Project Image",
      "service-image-alt": "Service Image",
      "ceo-image-alt": "CEO Portrait",
      "story-image-alt": "Our Story Image",
      "process-image-alt": "Process Image",
      "feature-image-alt": "Feature Image",

      // Button Texts - EVERY WORD
      "btn-primary": "Primary Button",
      "btn-secondary": "Secondary Button",
      "btn-link": "Link Button",

      // Icon Labels - EVERY WORD
      "icon-crown": "Crown Icon",
      "icon-gem": "Gem Icon",
      "icon-hammer": "Hammer Icon",
      "icon-lightbulb": "Lightbulb Icon",
      "icon-leaf": "Leaf Icon",
      "icon-check": "Check Icon",
      "icon-phone": "Phone Icon",
      "icon-email": "Email Icon",
      "icon-location": "Location Icon",
      "icon-clock": "Clock Icon",
      "icon-quote": "Quote Icon",
      "icon-star": "Star Icon",
      "icon-arrow": "Arrow Icon",
      "icon-chevron": "Chevron Icon",
      "icon-menu": "Menu Icon",
      "icon-close": "Close Icon",

      // Status Messages - EVERY WORD
      "active-status": "Active",
      "inactive-status": "Inactive",
      "loading-status": "Loading",
      "success-status": "Success",
      "error-status": "Error",
      "warning-status": "Warning",

      // Navigation States - EVERY WORD
      "current-page": "Current Page",
      "previous-page": "Previous Page",
      "next-page": "Next Page",
      "first-page": "First Page",
      "last-page": "Last Page",

      // Time and Date - EVERY WORD
      "today": "Today",
      "yesterday": "Yesterday",
      "tomorrow": "Tomorrow",
      "this-week": "This Week",
      "this-month": "This Month",
      "this-year": "This Year",

      // Numbers and Quantities - EVERY WORD
      "items-count": "items",
      "projects-count": "projects",
      "services-count": "services",
      "team-count": "team members",
      "years-count": "years",
      "clients-count": "clients",

      // Quality Indicators - EVERY WORD
      "excellent-quality": "Excellent",
      "good-quality": "Good",
      "average-quality": "Average",
      "poor-quality": "Poor",
      "premium-quality": "Premium",
      "standard-quality": "Standard",

      // Business Terms - EVERY WORD
      "consultation": "Consultation",
      "quotation": "Quotation",
      "installation": "Installation",
      "maintenance": "Maintenance",
      "warranty": "Warranty",
      "guarantee": "Guarantee",
      "certification": "Certification",
      "accreditation": "Accreditation",

      // Technical Terms - EVERY WORD
      "gypsum-board": "Gypsum Board",
      "grc-facade": "GRC Facade",
      "cement-board": "Cement Board",
      "cornice-design": "Cornice Design",
      "column-design": "Column Design",
      "window-frame": "Window Frame",
      "waterproofing": "Waterproofing",
      "insulation": "Insulation",
      "ventilation": "Ventilation",
      "structural-integrity": "Structural Integrity",

      // Material Types - EVERY WORD
      "clay-tiles": "Clay Tiles",
      "metal-sheets": "Metal Sheets",
      "solar-panels": "Solar Panels",
      "composite-materials": "Composite Materials",
      "natural-materials": "Natural Materials",
      "synthetic-materials": "Synthetic Materials",
      "fire-resistant": "Fire Resistant",
      "water-resistant": "Water Resistant",
      "weather-resistant": "Weather Resistant",

      // Service Categories - EVERY WORD
      "residential-services": "Residential Services",
      "commercial-services": "Commercial Services",
      "industrial-services": "Industrial Services",
      "repair-services": "Repair Services",
      "maintenance-services": "Maintenance Services",
      "custom-services": "Custom Services",
      "emergency-services": "Emergency Services",
      "preventive-services": "Preventive Services",

      // Project Types - EVERY WORD
      "villa-projects": "Villa Projects",
      "apartment-projects": "Apartment Projects",
      "office-projects": "Office Projects",
      "retail-projects": "Retail Projects",
      "warehouse-projects": "Warehouse Projects",
      "factory-projects": "Factory Projects",
      "renovation-projects": "Renovation Projects",
      "new-construction": "New Construction",

      // Contact Methods - EVERY WORD
      "phone-contact": "Phone Contact",
      "email-contact": "Email Contact",
      "whatsapp-contact": "WhatsApp Contact",
      "visit-office": "Visit Our Office",
      "online-consultation": "Online Consultation",
      "site-visit": "Site Visit",

      // Payment Terms - EVERY WORD
      "free-consultation": "Free Consultation",
      "free-estimate": "Free Estimate",
      "flexible-payment": "Flexible Payment",
      "installment-plan": "Installment Plan",
      "full-payment": "Full Payment",
      "advance-payment": "Advance Payment",

      // Timeframes - EVERY WORD
      "same-day": "Same Day",
      "next-day": "Next Day",
      "within-week": "Within Week",
      "within-month": "Within Month",
      "custom-timeline": "Custom Timeline",
      "urgent-service": "Urgent Service",
      "standard-timeline": "Standard Timeline",

      // Warranty Terms - EVERY WORD
      "years-warranty": "Years Warranty",
      "lifetime-warranty": "Lifetime Warranty",
      "workmanship-warranty": "Workmanship Warranty",
      "material-warranty": "Material Warranty",
      "extended-warranty": "Extended Warranty",
      "comprehensive-warranty": "Comprehensive Warranty",

      // Certification Types - EVERY WORD
      "quality-certification": "Quality Certification",
      "safety-certification": "Safety Certification",
      "environmental-certification": "Environmental Certification",
      "industry-certification": "Industry Certification",
      "international-standards": "International Standards",
      "local-standards": "Local Standards",

      // Additional Service Features - EVERY WORD
      "energy-efficiency": "Energy Efficiency",
      "sound-proofing": "Sound Proofing",
      "thermal-insulation": "Thermal Insulation",
      "moisture-control": "Moisture Control",
      "temperature-regulation": "Temperature Regulation",
      "air-quality": "Air Quality",
      "natural-lighting": "Natural Lighting",
      "ventilation-system": "Ventilation System",

      // Design Styles - EVERY WORD
      "modern-design": "Modern Design",
      "traditional-design": "Traditional Design",
      "contemporary-design": "Contemporary Design",
      "classic-design": "Classic Design",
      "minimalist-design": "Minimalist Design",
      "luxury-design": "Luxury Design",
      "custom-design": "Custom Design",
      "bespoke-design": "Bespoke Design",

      // Color Schemes - EVERY WORD
      "neutral-colors": "Neutral Colors",
      "warm-colors": "Warm Colors",
      "cool-colors": "Cool Colors",
      "earth-tones": "Earth Tones",
      "bold-colors": "Bold Colors",
      "pastel-colors": "Pastel Colors",
      "monochromatic": "Monochromatic",
      "contrasting-colors": "Contrasting Colors",

      // Finish Types - EVERY WORD
      "matte-finish": "Matte Finish",
      "glossy-finish": "Glossy Finish",
      "satin-finish": "Satin Finish",
      "textured-finish": "Textured Finish",
      "smooth-finish": "Smooth Finish",
      "natural-finish": "Natural Finish",
      "painted-finish": "Painted Finish",
      "laminated-finish": "Laminated Finish",

      // Installation Methods - EVERY WORD
      "professional-installation": "Professional Installation",
      "quick-installation": "Quick Installation",
      "precision-installation": "Precision Installation",
      "custom-installation": "Custom Installation",
      "standard-installation": "Standard Installation",
      "advanced-installation": "Advanced Installation",

      // Maintenance Services - EVERY WORD
      "regular-maintenance": "Regular Maintenance",
      "preventive-maintenance": "Preventive Maintenance",
      "emergency-maintenance": "Emergency Maintenance",
      "scheduled-maintenance": "Scheduled Maintenance",
      "comprehensive-maintenance": "Comprehensive Maintenance",
      "basic-maintenance": "Basic Maintenance",

      // Repair Services - EVERY WORD
      "minor-repairs": "Minor Repairs",
      "major-repairs": "Major Repairs",
      "emergency-repairs": "Emergency Repairs",
      "structural-repairs": "Structural Repairs",
      "cosmetic-repairs": "Cosmetic Repairs",
      "functional-repairs": "Functional Repairs",

      // Consultation Services - EVERY WORD
      "initial-consultation": "Initial Consultation",
      "design-consultation": "Design Consultation",
      "technical-consultation": "Technical Consultation",
      "material-consultation": "Material Consultation",
      "budget-consultation": "Budget Consultation",
      "project-consultation": "Project Consultation",

      // Additional Features - EVERY WORD
      "eco-friendly": "Eco Friendly",
      "sustainable": "Sustainable",
      "durable": "Durable",
      "long-lasting": "Long Lasting",
      "low-maintenance": "Low Maintenance",
      "high-performance": "High Performance",
      "cost-effective": "Cost Effective",
      "value-for-money": "Value for Money",

      // Technical Specifications - EVERY WORD
      "dimensions": "Dimensions",
      "weight": "Weight",
      "thickness": "Thickness",
      "density": "Density",
      "strength": "Strength",
      "flexibility": "Flexibility",
      "hardness": "Hardness",
      "porosity": "Porosity",

      // Safety Features - EVERY WORD
      "fire-safety": "Fire Safety",
      "slip-resistance": "Slip Resistance",
      "impact-resistance": "Impact Resistance",
      "weather-resistance": "Weather Resistance",
      "mold-resistance": "Mold Resistance",
      "pest-resistance": "Pest Resistance",
      "chemical-resistance": "Chemical Resistance",
      "uv-resistance": "UV Resistance",

      // Environmental Features - EVERY WORD
      "recyclable": "Recyclable",
      "biodegradable": "Biodegradable",
      "low-voc": "Low VOC",
      "energy-saving": "Energy Saving",
      "water-saving": "Water Saving",
      "carbon-neutral": "Carbon Neutral",
      "sustainable-sourcing": "Sustainable Sourcing",
      "green-certified": "Green Certified",

      // Installation Time - EVERY WORD
      "quick-process": "Quick Process",
      "efficient-installation": "Efficient Installation",
      "minimal-disruption": "Minimal Disruption",
      "clean-process": "Clean Process",
      "organized-workflow": "Organized Workflow",
      "professional-team": "Professional Team",
      "quality-workmanship": "Quality Workmanship",
      "attention-to-detail": "Attention to Detail",

      // After-Sales Service - EVERY WORD
      "after-sales-support": "After Sales Support",
      "customer-care": "Customer Care",
      "technical-support": "Technical Support",
      "maintenance-support": "Maintenance Support",
      "warranty-claims": "Warranty Claims",
      "service-calls": "Service Calls",
      "emergency-response": "Emergency Response",
      "preventive-care": "Preventive Care",

      // Company Values - EVERY WORD
      "customer-satisfaction": "Customer Satisfaction",
      "quality-assurance": "Quality Assurance",
      "timely-delivery": "Timely Delivery",
      "transparent-pricing": "Transparent Pricing",
      "professional-ethics": "Professional Ethics",
      "continuous-improvement": "Continuous Improvement",
      "innovation-driven": "Innovation Driven",
      "excellence-focused": "Excellence Focused",

      // Industry Recognition - EVERY WORD
      "awards-winning": "Awards Winning",
      "industry-leader": "Industry Leader",
      "customer-choice": "Customer Choice",
      "quality-excellence": "Quality Excellence",
      "service-excellence": "Service Excellence",
      "innovation-award": "Innovation Award",
      "sustainability-award": "Sustainability Award",
      "customer-satisfaction-award": "Customer Satisfaction Award",

      // Partnership Benefits - EVERY WORD
      "trusted-partner": "Trusted Partner",
      "reliable-service": "Reliable Service",
      "long-term-relationship": "Long Term Relationship",
      "mutual-growth": "Mutual Growth",
      "shared-success": "Shared Success",
      "collaborative-approach": "Collaborative Approach",
      "strategic-partnership": "Strategic Partnership",
      "value-creation": "Value Creation",

      // Technology Integration - EVERY WORD
      "smart-technology": "Smart Technology",
      "digital-solutions": "Digital Solutions",
      "automated-systems": "Automated Systems",
      "energy-management": "Energy Management",
      "climate-control": "Climate Control",
      "security-systems": "Security Systems",
      "home-automation": "Home Automation",
      "building-management": "Building Management",

      // Customization Options - EVERY WORD
      "personalized-design": "Personalized Design",
      "custom-solutions": "Custom Solutions",
      "tailored-approach": "Tailored Approach",
      "client-specific": "Client Specific",
      "unique-requirements": "Unique Requirements",
      "special-requests": "Special Requests",
      "bespoke-creations": "Bespoke Creations",
      "made-to-order": "Made to Order",

      // Project Management - EVERY WORD
      "project-planning": "Project Planning",
      "timeline-management": "Timeline Management",
      "budget-control": "Budget Control",
      "quality-control": "Quality Control",
      "resource-management": "Resource Management",
      "risk-management": "Risk Management",
      "stakeholder-coordination": "Stakeholder Coordination",
      "progress-tracking": "Progress Tracking",

      // Site Preparation - EVERY WORD
      "site-assessment": "Site Assessment",
      "preparation-work": "Preparation Work",
      "safety-measures": "Safety Measures",
      "material-delivery": "Material Delivery",
      "equipment-setup": "Equipment Setup",
      "work-area-preparation": "Work Area Preparation",
      "protective-measures": "Protective Measures",
      "cleanup-process": "Cleanup Process",

      // Final Touches - EVERY WORD
      "final-inspection": "Final Inspection",
      "quality-check": "Quality Check",
      "client-walkthrough": "Client Walkthrough",
      "handover-process": "Handover Process",
      "documentation": "Documentation",
      "warranty-information": "Warranty Information",
      "maintenance-guidance": "Maintenance Guidance",
      "aftercare-support": "Aftercare Support",
      // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        // Logo
        'logo-text': 'Mualim Interiors',
        
        // Hero Section
        'about-page-title': 'A Tradition of Excellence, Built Above All',
        'about-page-subtitle': 'Discover our story of craftsmanship, innovation, and unwavering commitment to quality.',
        
        // Story Section
        'about-story-title': 'Our Story',
        'about-story-description': 'Mualim Interiors was founded with a singular vision — to elevate interior design from a mere structural component to a masterpiece of protection and art. From humble beginnings in the heart of Makkah, our brand has evolved into a global symbol of durability and prestige.',
        'about-story-description-2': 'With every project we undertake, we renew our vow to quality and client satisfaction. Our team of designers, engineers, and craftsmen work in harmony, combining age-old interior design techniques with the most advanced global innovations.',
        'about-story-description-3': 'We believe a roof is the crown of every home, and its construction must reflect strength, precision, and timeless beauty. We focus on high-quality materials, personalised designs, and customer-driven solutions. Every detail — from insulation to installation — is handled with a perfectionist\'s eye.',
        'about-story-image-alt': 'Our Team',
        
        // Mission Section
        'mission-title': 'Our Mission',
        'mission-description': 'To offer interior design that lasts generations. We believe a roof is the crown of every home, and its construction must reflect strength, precision, and timeless beauty.',
        
        // Vision Section
        'vision-title': 'Our Vision',
        'vision-description': 'To become the global benchmark for interior design excellence, setting new standards in quality, innovation, and aesthetic sophistication.',
        
        // Core Values Section
        'values-title': 'Our Core Values',
        'values-subtitle': 'The principles that guide every action we take.',
        
        // Value Cards
        'value-1-title': 'Integrity',
        'value-1-description': 'We honor our commitments with transparency and honesty, building relationships based on trust.',
        
        'value-2-title': 'Innovation',
        'value-2-description': 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions.',
        
        'value-3-title': 'Excellence',
        'value-3-description': 'We pursue perfection in every aspect of our work, from the smallest detail to the grandest vision.',
        
        // CEO Section
        'ceo-title': 'Meet Our CEO',
        'ceo-subtitle': 'The visionary behind Mualim Interiors',
        'ceo-name': 'Muzamil',
        'ceo-position': 'Founder & Chief Executive Officer',
        'ceo-experience': '13+ Years of Industry Experience',
        'ceo-bio': 'Muzamil is a visionary leader with over 13 years of experience in the interior design and construction industry. His passion for excellence, innovation, and customer satisfaction has been the driving force behind Mualim Interiors\' success. Under his leadership, the company has grown from a small local business to a recognized regional leader in premium interior design solutions.',
        'ceo-bio-2': 'With a deep understanding of market trends and a commitment to sustainable practices, Muzamil continues to push the boundaries of what\'s possible in interior design, ensuring that every project reflects the highest standards of quality and craftsmanship.',
        'ceo-image-alt': 'CEO Muzamil',
        
        // Process Section
        'about-process-title': 'Our Process',
        'about-process-subtitle': 'How we bring your vision to life',
        
        // Process Steps
        'about-process-step-1-title': 'Discovery & Consultation',
        'about-process-step-1-description': 'We listen to your needs, understand your vision, and assess your space to create a tailored solution.',
        
        'about-process-step-2-title': 'Design & Planning',
        'about-process-step-2-description': 'Our expert designers create detailed plans and 3D visualizations to bring your vision to life.',
        
        'about-process-step-3-title': 'Material Selection',
        'about-process-step-3-description': 'We guide you through premium material options that balance aesthetics, durability, and budget.',
        
        'about-process-step-4-title': 'Expert Installation',
        'about-process-step-4-description': 'Our skilled craftsmen execute the project with precision, ensuring flawless results.',
        
        'about-process-step-5-title': 'Quality Assurance',
        'about-process-step-5-description': 'We conduct thorough inspections to ensure every detail meets our exacting standards.',
        
        // Team Section
        'team-title': 'Meet Our Team',
        'team-subtitle': 'The experts behind our exceptional craftsmanship.',
        
        // Team Members
        'team-member-1-name': 'Ahmed Al-Fahad',
        'team-member-1-position': 'Founder & CEO',
        'team-member-1-description': 'With over 25 years in the industry, Ahmed founded Mualim Interiors with a vision to redefine interior design excellence in the region.',
        'team-member-1-alt': 'CEO',
        
        'team-member-2-name': 'Fatima Al-Rashid',
        'team-member-2-position': 'Chief Technical Officer',
        'team-member-2-description': 'Fatima brings innovative interior design technologies and sustainable practices to every project we undertake.',
        'team-member-2-alt': 'CTO',
        
        'team-member-3-name': 'Khalid Al-Mansour',
        'team-member-3-position': 'Head of Design',
        'team-member-3-description': 'Khalid\'s artistic vision and technical expertise ensure that every interior we create is both beautiful and functional.',
        'team-member-3-alt': 'Head Designer',
        
        // CTA Section
        'about-cta-title': 'Join Our Journey of Excellence',
        'about-cta-subtitle': 'Experience the Mualim Interiors difference for yourself.',
        'about-cta-btn-contact': 'Get In Touch',
        'about-cta-btn-projects': 'View Our Work',
        
        // Footer Section
        'footer-description': 'Your Home, Crowned with Excellence. Premium interior design solutions for those who demand the very best.',
        'footer-quick-links': 'Quick Links',
        'footer-services': 'Services',
        'footer-contact': 'Contact Info',
        'footer-rights': 'All Rights Reserved.',
        
        // Footer Services
        'footer-service-1': 'Residential Interiors',
        'footer-service-2': 'Commercial Interiors',
        'footer-service-3': 'Industrial Interiors',
        'footer-service-4': 'Interior Repairs & Maintenance',
        'footer-service-5': 'Custom Interior Design',
        
        // Footer Contact Info
        'footer-address': 'Al-Masjid Road, Makkah, Saudi Arabia',
        'footer-phone': '+966 58 245 3791',
        'footer-email': 'support@mualiminteriors.com',
        'footer-hours': 'Saturday – Thursday | 9:00 AM – 7:00 PM',
        
        // Accessibility
        'aria-label-toggle-theme': 'Toggle theme',
        'aria-label-toggle-language': 'Toggle language',
        'aria-label-toggle-mobile-menu': 'Toggle mobile menu',
        'aria-label-facebook': 'Facebook',
        'aria-label-twitter': 'Twitter',
        'aria-label-instagram': 'Instagram',
        'aria-label-linkedin': 'LinkedIn'
    },
    ar: {
      // Loading Screen - EVERY WORD
      "loading-text": "جاري التحميل...",
      "loading-logo": "معلم الديكور الداخلي",
      "loading-title": "معلم الديكور الداخلي",
      "loading-subtitle": "جاري التحميل...",

      // Navigation - EVERY WORD
      "logo-text": "معلم الديكور الداخلي",
      "nav-home": "الرئيسية",
      "nav-about": "من نحن",
      "nav-services": "خدماتنا",
      "nav-projects": "مشاريعنا",
      "nav-contact": "اتصل بنا",
      "nav-portfolio": "معرض الأعمال",

      // Header Controls - EVERY WORD
      "theme-toggle": "تبديل السمة",
      "lang-toggle": "تبديل اللغة",
      "mobile-menu": "تبديل قائمة الجوال",
      "current-lang-en": "EN",
      "current-lang-ar": "AR",

      // Hero Sections - EVERY WORD
      "hero-title": "نصنع التميز فوق كل منزل",
      "hero-subtitle": "حيث تلتقي الدقة والحرفية والابتكار لخلق روائع معمارية تثبت جدارتها عبر الزمن.",
      "hero-btn-services": "خدماتنا",
      "hero-btn-consultation": "استشارة مجانية",

      // Home Page Intro - EVERY WORD
      "intro-title": "مرحباً بكم في معلم الديكور الداخلي",
      "intro-subtitle": "نحن لسنا مجرد مصممي ديكور داخلي؛ نحن أمناء على الحماية والجمال والأداء طويل الأمد.",
      "intro-description": "مع كل بلاطة ولوح وورقة معدنية، ننحت الموثوقية، ونعيد تعريف الجمال، ونعزز الثقة. يمثل معلم الديكور الداخلي ذروة التميز في التصميم الداخلي - رمزاً للتحمل والأناقة والبراعة الهندسية. تمتد خبرتنا عبر القطاعات التجارية والسكنية والصناعية، مما يجعلنا الخيار المتميز لأولئك الذين يؤمنون بأن منازلهم تستحق أكثر من مجرد مأوى - تستحق تصريحاً بالتميز.",
      "intro-btn-learn-more": "اعرف المزيد عنا",
      "intro-image-alt": "تصميم داخلي فاخر",

      // Features Section - EVERY WORD
      "features-title": "لماذا تختار معلم الديكور الداخلي",
      "features-subtitle": "اختبر الفرق الذي يمكن أن تحدده المواد المتميزة والحرفية الخبيرة والتصميم المبتكر.",
      "feature-1-title": "مواد متميزة",
      "feature-1-description": "نحن نختار أجود المواد من جميع أنحاء العالم، مما يضمن المتانة والجمال والأداء الذي يتجاوز معايير الصناعة.",
      "feature-2-title": "حرفية خبيرة",
      "feature-2-description": "فريقنا من الحرفيين المهرة يجلب عقوداً من الخبرة إلى كل مشروع، مما يضمن الدقة والاهتمام بالتفاصيل في كل تركيب.",
      "feature-3-title": "حلول مبتكرة",
      "feature-3-description": "نحن نبقى في طليعة تكنولوجيا التصميم الداخلي، وندمج أحدث الابتكارات لتقديم حلول جميلة ووظيفية في آن واحد.",
      "feature-4-title": "ممارسات مستدامة",
      "feature-4-description": "نحن ملتزمون بالمسؤولية البيئية، ونستخدم مواد موفرة للطاقة وطرق تركيب مستدامة لحماية منزلك وكوكبنا.",

      // Services Preview - EVERY WORD
      "services-preview-title": "خدماتنا المتميزة",
      "services-preview-subtitle": "من الملاذات السكنية إلى المعالم التجارية، نسلم التميز في كل قطاع.",
      "service-1-title": "التصميم الداخلي السكني",
      "service-1-description": "أناقة خالدة وحماية لمنزلك. من البلاط التقليدي إلى الألواح الشمسية الحديثة.",
      "service-1-image-alt": "التصميم الداخلي السكني",
      "service-2-title": "التصميم الداخلي التجاري",
      "service-2-description": "مهندسة للشركات التي تتطلب التميز. أنظمتنا تتحمل الظروف القاسية مع الحفاظ على الجاذبية الجمالية.",
      "service-2-image-alt": "التصميم الداخلي التجاري",
      "service-3-title": "التصميم الداخلي الصناعي",
      "service-3-description": "حلول متينة للمصانع والمستودعات. نركز على السلامة الهيكلية والأداء التشغيلي.",
      "service-3-image-alt": "التصميم الداخلي الصناعي",
      "service-learn-more": "اعرف المزيد",
      "services-view-all": "عرض جميع الخدمات",

      // Projects Preview - EVERY WORD
      "projects-preview-title": "المشاريع الحديثة",
      "projects-preview-subtitle": "لمحة في محفظتنا من الروائع المعمارية.",
      "project-1-title": "فيلا جدة الفاخرة",
      "project-1-category": "سكني",
      "project-1-image-alt": "فيلا جدة الفاخرة",
      "project-2-title": "برج الرياض التجاري",
      "project-2-category": "تجاري",
      "project-2-image-alt": "برج الرياض التجاري",
      "project-3-title": "مجمع دبي السكني",
      "project-3-category": "سكني",
      "project-3-image-alt": "مجمع دبي السكني",
      "projects-view-all": "عرض جميع المشاريع",

      // Testimonials - EVERY WORD
      "testimonials-title": "آراء العملاء",
      "testimonials-heading": "ماذا يقول عملاؤنا",
      "testimonial-1-text": "حول معلم الديكور الداخلي مساحة مكتبنا إلى ما هو أبعد من توقعاتنا. اهتمامهم بالتفاصيل وحرفيتهم لا مثيل له. موصى به بشدة!",
      "testimonial-2-text": "استأجرنا معلم الديكور الداخلي لتجديد منزلنا ولم نكن أكثر سعادة. عمل ألواح الجبس في أسقفنا مذهل تماماً. فريق محترف من البداية إلى النهاية.",
      "testimonial-3-text": "الواجهة GRC التي قاموا بتركيبها على مبنانا التجاري غيرت مظهره بالكامل. عمل عالي الجودة وإدارة مشروع ممتازة.",
      "testimonial-4-text": "خدمة استثنائية! أكمل الفريق تصميم فيلاتنا الداخلي في الموعد المحدد وفي حدود الميزانية. تجاوزت جودة المواد والإتقان توقعاتنا.",
      "testimonial-5-text": "تعامل معلم الديكور الداخلي مع مشروع مستودعنا الصناعي بدقة واحترافية. كانت حلول العزل والعزل المائي مثالية لعملياتنا.",
      "testimonial-6-text": "التصميم الداخلي المخصص الذي أنشأوه لمركزنا التجاري جميل absolutely. يكمل علامتنا التجارية بشكل مثالي وأثار إعجاب جميع عملائنا.",
      "testimonial-7-text": "خدمة صيانة ممتازة! حددوا المشكلات في مبنانا الداخلي وأصلحوها بسرعة لم نكن نعرف عنها حتى. شامل ومحترف للغاية.",
      "testimonial-8-text": "لقد عملنا مع معلم الديكور الداخلي في مشاريع متعددة. اتساقهم في الجودة والموثوقية لا مثيل له. هم شريكنا المفضل لجميع احتياجات التصميم الداخلي.",
      "testimonial-9-text": "عمل العزل المائي والعزل الحراري الذي قاموا به في قصرنا استثنائي. لم نواجه أي مشاكل مع الرطوبة أو التحكم في درجة الحرارة. راضون للغاية عن الاستثمار.",
      "testimonial-10-text": "من الاستشارة إلى الإنجاز، قدم معلم الديكور الداخلي خدمة استثنائية. فريقهم ملم، مهذب، ويقدم نتائج تتحدث عن نفسها.",

      // Testimonial Names and Positions - EVERY WORD
      "testimonial-1-name": "أحمد الرشيد",
      "testimonial-1-position": "الرئيس التنفيذي، حلول التقنية",
      "testimonial-2-name": "فاطمة عبدالله",
      "testimonial-2-position": "مالكة منزل",
      "testimonial-3-name": "خالد المنصور",
      "testimonial-3-position": "مطور عقاري",
      "testimonial-4-name": "محمد العتيبي",
      "testimonial-4-position": "مالك فيلا، جدة",
      "testimonial-5-name": "سارة الدوسري",
      "testimonial-5-position": "مديرة العمليات، مركز لوجستي",
      "testimonial-6-name": "نور الشمري",
      "testimonial-6-position": "مديرة تجارية، مركز مكة",
      "testimonial-7-name": "حسن القحطاني",
      "testimonial-7-position": "مدير المبنى، برج الرياض",
      "testimonial-8-name": "ليلى الحربي",
      "testimonial-8-position": "مديرة المشروع، شركة بناء",
      "testimonial-9-name": "أميرة السعود",
      "testimonial-9-position": "مالكة منزل، المدينة",
      "testimonial-10-name": "عمر الزهراني",
      "testimonial-10-position": "مالك عمل، دبي",

      // CTA Sections - EVERY WORD
      "cta-title": "هل أنت مستعد لتحويل ممتلكاتك؟",
      "cta-subtitle": "اتصل بنا اليوم للحصول على استشارة مجانية ودعنا نحضر رؤيتك إلى الحياة.",
      "cta-btn-contact": "تواصل معنا",
      "cta-btn-call": "اتصل بنا الآن",

      // About Page - EVERY WORD
      "about-page-title": "تقليد من التميز، مبني فوق الجميع",
      "about-page-subtitle": "اكتشف قصتنا من الحرفية والابتكار والالتزام الثابت بالجودة.",

      "about-story-title": "قصتنا",
      "about-story-description": "تأسس معلم الديكور الداخلي برؤية واحدة - لرفع التصميم الداخلي من مجرد مكون هيكلي إلى تحفة فنية للحماية والفن. من بدايات متواضعة في قلب مكة المكرمة، تطورت علامتنا التجارية إلى رمز عالمي للمتانة والرقي.",
      "about-story-description-2": "مع كل مشروع نقوم به، نجدّد عهدنا بالجودة ورضا العملاء. يعمل فريقنا من المصممين والمهندسين والحرفيين بتناغم، جامعين بين تقنيات التصميم الداخلي القديمة وأحدث الابتكارات العالمية.",
      "about-story-description-3": "نحن نؤمن أن السقف هو تاج كل منزل، ويجب أن يعكس بناؤه القوة والدقة والجمال الخالد. نركز على المواد عالية الجودة والتصاميم المخصصة والحلول الموجهة للعميل. يتم التعامل مع كل تفصيل - من العزل إلى التثبيت - بعين الكمال.",
      "about-story-image-alt": "فريقنا",

      // Mission, Vision, Values - EVERY WORD
      "mission-title": "مهمتنا",
      "mission-description": "تقديم تصميم داخلي يدوم لأجيال. نحن نؤمن أن السقف هو تاج كل منزل، ويجب أن يعكس بناؤه القوة والدقة والجمال الخالد.",

      "vision-title": "رؤيتنا",
      "vision-description": "أن نصبح المعيار العالمي لتميز التصميم الداخلي، ووضع معايير جديدة في الجودة والابتكار والتطور الجمالي.",

      "values-title": "قيمنا الأساسية",
      "values-subtitle": "المبادئ التي توجه كل إجراء نتخذه.",
      "value-1-title": "النزاهة",
      "value-1-description": "نحن نفي بالتزاماتنا بشفافية وصدق، نبني علاقات قائمة على الثقة.",
      "value-2-title": "الابتكار",
      "value-2-description": "نحن نستكشف باستمرار التقنيات والمنهجيات الجديدة لتقديم حلول متطورة.",
      "value-3-title": "التميز",
      "value-3-description": "نسعى لتحقيق الكمال في كل جانب من جوانب عملنا، من أصغر تفصيل إلى أعظم رؤية.",

      // Team Section - EVERY WORD
      "team-title": "تعرف على فريقنا",
      "team-subtitle": "الخبراء وراء حرفيتنا الاستثنائية.",
      "team-member-1-name": "أحمد الفهد",
      "team-member-1-position": "المؤسس والرئيس التنفيذي",
      "team-member-1-description": "مع أكثر من 25 عاماً في الصناعة، أسس أحمد معلم الديكور الداخلي برؤية لإعادة تعريف التميز في التصميم الداخلي في المنطقة.",
      "team-member-1-alt": "الرئيس التنفيذي",
      "team-member-2-name": "فاطمة الرشيد",
      "team-member-2-position": "الرئيس التقني",
      "team-member-2-description": "تجلب فاطمة تقنيات التصميم الداخلي المبتكرة والممارسات المستدامة إلى كل مشروع نقوم به.",
      "team-member-2-alt": "الرئيس التقني",
      "team-member-3-name": "خالد المنصور",
      "team-member-3-position": "رئيس التصميم",
      "team-member-3-description": "تضمن الرؤية الفنية والخبرة التقنية لخالد أن كل تصميم داخلي ننشئه يكون جميلاً ووظيفياً في آن واحد.",
      "team-member-3-alt": "رئيس التصميم",

      // CEO Section - EVERY WORD
      "ceo-title": "تعرف على الرئيس التنفيذي",
      "ceo-subtitle": "الرؤية وراء معلم الديكور الداخلي",
      "ceo-name": "مزمل",
      "ceo-position": "المؤسس والرئيس التنفيذي",
      "ceo-experience": "13+ سنة من الخبرة في الصناعة",
      "ceo-image-alt": "الرئيس التنفيذي مزمل",
      "ceo-bio": "مزمل هو قائد رؤيوي يتمتع بأكثر من 13 سنة من الخبرة في صناعة التصميم الداخلي والبناء. كان شغفه بالتميز والابتكار ورضا العملاء هو القوة الدافعة وراء نجاح معلم الديكور الداخلي. تحت قيادته، نمت الشركة من عمل محلي صغير إلى قائد إقليمي معترف به في حلول التصميم الداخلي المتميزة.",
      "ceo-bio-2": "مع فهم عميق لاتجاهات السوق والالتزام بالممارسات المستدامة، يستمر مزمل في دفع حدود ما هو ممكن في التصميم الداخلي، مما يضمن أن كل مشروع يعكس أعلى معايير الجودة والحرفية.",

      // Process Section - EVERY WORD
      "about-process-title": "عملنا",
      "about-process-subtitle": "كيف نحضر رؤيتك إلى الحياة",
      "about-process-step-1-title": "الاكتشاف والاستشارة",
      "about-process-step-1-description": "نستمع إلى احتياجاتك، ونفهم رؤيتك، ونقيم مساحتك لإنشاء حل مخصص.",
      "about-process-step-2-title": "التصميم والتخطيط",
      "about-process-step-2-description": "يقوم مصممونا الخبراء بإنشاء خطط مفصلة وتصورات ثلاثية الأبعاد لإحضار رؤيتك إلى الحياة.",
      "about-process-step-3-title": "اختيار المواد",
      "about-process-step-3-description": "نرشدك خلال خيارات المواد المتميزة التي توازن بين الجماليات والمتانة والميزانية.",
      "about-process-step-4-title": "التثبيت الخبير",
      "about-process-step-4-description": "ينفذ حرفيونا الماهرون المشروع بدقة، مما يضمن نتائج خالية من العيوب.",
      "about-process-step-5-title": "ضمان الجودة",
      "about-process-step-5-description": "نجري عمليات تفتيش شاملة للتأكد من أن كل التفاصيل تلبي معاييرنا الصارمة.",

      "about-cta-title": "انضم إلى رحلتنا نحو التميز",
      "about-cta-subtitle": "جرب فرق معلم الديكور الداخلي بنفسك.",
      "about-cta-btn-contact": "تواصل معنا",
      "about-cta-btn-projects": "شاهد أعمالنا",

      // Services Page - EVERY WORD
      "services-page-title": "حيث تلتقي الوظيفة بالكمال الجمالي",
      "services-page-subtitle": "كل خدمة في معلم الديكور الداخلي مصممة لتجلب القيمة والأناقة والمتانة لممتلكاتك.",

      "services-overview-title": "خدماتنا المتميزة",
      "services-overview-subtitle": "في معلم الديكور الداخلي، نقدم طيفاً كاملاً من حلول التصميم الداخلي المتميزة المصممة لأولئك الذين يتوقعون الأفضل تماماً.",

      // Gypsum Services - EVERY WORD
      "service-gypsum-title": "واجهات ألواح الجبس GRC",
      "service-gypsum-description": "حلول واجهات ألواح الجبس وGRC المتميزة للتصميم الداخلي الحديث. خفيفة الوزن، متينة، ومتفوقة جمالياً للمساحات السكنية والتجارية.",
      "service-gypsum-alt": "ألواح الجبس",
      "service-gypsum-feature-1": "بناء خفيف الوزن",
      "service-gypsum-feature-2": "مواد مقاومة للحريق",
      "service-gypsum-feature-3": "عزل صوتي",
      "service-gypsum-feature-4": "تركيب سهل",

      "service-grc-install-title": "تركيب ألواح الجبس GRC",
      "service-grc-install-description": "تركيب خبير لألواح الجبس GRC بدقة واهتمام بالتفاصيل. يضمن حرفيونا المهرة تنفيذاً لا تشوبه شائبة لإنهاءات مثالية.",
      "service-grc-install-alt": "تركيب GRC",
      "service-grc-install-feature-1": "تركيب احترافي",
      "service-grc-install-feature-2": "ضمان الجودة",
      "service-grc-install-feature-3": "إنجاز في الوقت المحدد",
      "service-grc-install-feature-4": "تغطية الضمان",

      "service-cornice-title": "تصميم كورنيش وعمود ونافذة",
      "service-cornice-description": "تصاميم كورنيش وعمود وإطار نافذة أنيقة تعزز الجمال المعماري. حلول مخصصة للجماليات التقليدية والحديثة.",
      "service-cornice-alt": "تصميم كورنيش",
      "service-cornice-feature-1": "تصاميم مخصصة",
      "service-cornice-feature-2": "أناقة معمارية",
      "service-cornice-feature-3": "مواد متميزة",
      "service-cornice-feature-4": "إنهاءات متينة",

      "service-cement-title": "واجهات ألواح الأسمنت",
      "service-cement-description": "حلول واجهات ألواح الأسمنت المتينة للتطبيقات الخارجية والداخلية. مقاومة للطقس وطويلة الأمد لأقصى حماية.",
      "service-cement-alt": "ألواح الأسمنت",
      "service-cement-feature-1": "مقاومة للطقس",
      "service-cement-feature-2": "متانة طويلة الأمد",
      "service-cement-feature-3": "حماية من الرطوبة",
      "service-cement-feature-4": "تطبيقات متعددة",

      // Previous Services - EVERY WORD
      "service-1-title": "التصميم الداخلي السكني",
      "service-1-description": "تجلب حلول التصميم الداخلي السكني لدينا الأناقة الخالدة والحماية لمنزلك. سواء كنت تفضل البلاط التقليدي أو المعدن الحديث الأنيق أو الألواح الشمسية المبتكرة، فإننا نضمن أن كل تصميم داخلي يكون بياناً بالقوة والأناقة.",
      "service-1-image-alt": "التصميم الداخلي السكني",
      "service-1-feature-1": "اختيار مواد متميزة",
      "service-1-feature-2": "خيارات تصميم مخصصة",
      "service-1-feature-3": "حماية محسنة من الطقس",
      "service-1-feature-4": "حلول موفرة للطاقة",

      "service-2-title": "التصميم الداخلي التجاري",
      "service-2-description": "من الأبراج التجارية إلى المجمعات التجارية، تم تصميم أنظمة التصميم الداخلي التجارية لدينا لتحمل الظروف الجوية القاسية والأحمال الثقيلة مع الحفاظ على الجاذبية الجمالية وكفاءة الطاقة.",
      "service-2-image-alt": "التصميم الداخلي التجاري",
      "service-2-feature-1": "بناء متين",
      "service-2-feature-2": "حد أدنى من تعطيل الأعمال",
      "service-2-feature-3": "خيارات ضمان طويلة الأجل",
      "service-2-feature-4": "حلول هوية تجارية مخصصة",

      "service-3-title": "التصميم الداخلي الصناعي",
      "service-3-description": "نتخصص في التصميم الداخلي واسع النطاق للمصانع والمستودعات والمراكز اللوجستية. يضمن تركيزنا على السلامة الهيكلية وتنظيم درجة الحرارة والعزل الصوتي الأداء التشغيلي الأمثل.",
      "service-3-image-alt": "التصميم الداخلي الصناعي",
      "service-3-feature-1": "خيارات مواد متخصصة",
      "service-3-feature-2": "حلول عزل متقدمة",
      "service-3-feature-3": "أنظمة صرف مخصصة",
      "service-3-feature-4": "خيارات دمج المعدات",

      "service-4-title": "إصلاح وصيانة التصميم الداخلي",
      "service-4-description": "نحن نستعيد ونحافظ على التصميمات الداخلية بأقصى درجات العناية، باستخدام مواد عالية الجودة لإطالة عمرها الافتراضي. سواء كانت تسريبات طفيفة أو تجديدات كاملة، فإننا نتعامل معها بخبرة.",
      "service-4-image-alt": "إصلاح وصيانة التصميم الداخلي",
      "service-4-feature-1": "فحص شامل",
      "service-4-feature-2": "خطط صيانة وقائية",
      "service-4-feature-3": "خدمات إصلاح طارئة",
      "service-4-feature-4": "خيارات ضمان ممتدة",

      "service-5-title": "العزل المائي والحراري للتصميم الداخلي",
      "service-5-description": "تحمي أنظمة العزل المائي المتقدمة لدينا من الرطوبة وتغيرات درجة الحرارة، مما يخلق هياكل مستدامة واقتصادية ومقاومة للطقس.",
      "service-5-image-alt": "العزل المائي والحراري للتصميم الداخلي",
      "service-5-feature-1": "تقنية الأغشية المتقدمة",
      "service-5-feature-2": "خيارات العزل الحراري",
      "service-5-feature-3": "تحسينات كفاءة الطاقة",
      "service-5-feature-4": "حماية طويلة الأمد",

      "service-6-title": "تصميم داخلي مخصص",
      "service-6-description": "نحن نتعاون مع المهندسين المعماريين والمصممين لصنع تصميمات داخلية مخصصة تكمل الهندسة المعمارية الحديثة والكلاسيكية على حد سواء - مما يجلب الفردية إلى كل أفق.",
      "service-6-image-alt": "تصميم داخلي مخصص",
      "service-6-feature-1": "حلول تصميم حصرية",
      "service-6-feature-2": "خيارات تصور ثلاثي الأبعاد",
      "service-6-feature-3": "تجريب المواد",
      "service-6-feature-4": "عناصر معمارية فريدة",

      "service-cta": "احصل على عرض مجاني",

      // Process Section - EVERY WORD
      "process-title": "عملنا",
      "process-subtitle": "من المفهوم إلى الإنجاز، نضمن تجربة سلسة.",
      "process-step-1-title": "استشارة",
      "process-step-1-description": "نبدأ باستشارة شاملة لفهم احتياجاتك وتفضيلاتك وميزانيتك.",
      "process-step-2-title": "التصميم والتخطيط",
      "process-step-2-description": "ينشئ فريقنا تصاميم وخطط مفصلة مصممة خصيصاً لمتطلباتك الخاصة.",
      "process-step-3-title": "اختيار المواد",
      "process-step-3-description": "نساعدك في اختيار المواد المثالية التي توازن بين الجماليات والمتانة والميزانية.",
      "process-step-4-title": "التركيب",
      "process-step-4-description": "ينفذ حرفيونا المهرة التركيب بدقة واهتمام بالتفاصيل.",
      "process-step-5-title": "التفتيش النهائي",
      "process-step-5-description": "نجري تفتيشاً شاملاً لضمان أن كل جانب يلبي معاييرنا العالية.",

      "services-cta-title": "هل أنت مستعد لتحويل ممتلكاتك؟",
      "services-cta-subtitle": "اتصل بنا اليوم للحصول على استشارة مجانية ودعنا نحضر رؤيتك إلى الحياة.",
      "services-cta-btn-contact": "تواصل معنا",
      "services-cta-btn-projects": "شاهد أعمالنا",

      // Show More/Less - EVERY WORD
      "show-more": "عرض المزيد من الخدمات",
      "show-less": "عرض خدمات أقل",

      // Projects Page - EVERY WORD
      "projects-page-title": "عرض للإتقان والتصميم الحديث",
      "projects-page-subtitle": "كل مشروع من معلم الديكور الداخلي يحكي قصة - عن الابتكار والدقة والتصميم الخالد.",

      "filter-all": "جميع المشاريع",
      "filter-residential": "سكني",
      "filter-commercial": "تجاري",
      "filter-industrial": "صناعي",

      "project-1-title": "فيلا جدة الفاخرة",
      "project-1-category": "سكني",
      "project-1-description": "فيلا مذهلة مستوحاة من البحر الأبيض المتوسط تتميز ببلاط مخصص وألواح شمسية مدمجة لأقصى كفاءة في استخدام الطاقة.",
      "project-1-image-alt": "فيلا جدة الفاخرة",
      "project-2-title": "برج الرياض التجاري",
      "project-2-category": "تجاري",
      "project-2-description": "مجمع تجاري حديث مع تصميم داخلي معدني مبتكر مصمم لتحمل الظروف الجوية القاسية.",
      "project-2-image-alt": "برج الرياض التجاري",
      "project-3-title": "مجمع دبي السكني",
      "project-3-category": "سكني",
      "project-3-description": "مجمع سكني هادئ يتميز بحلول تصميم داخلي مخصصة تكمل التصميم المعماري الحديث.",
      "project-3-image-alt": "مجمع دبي السكني",
      "project-4-title": "مستودع الدمام الصناعي",
      "project-4-category": "صناعي",
      "project-4-description": "منشأة صناعية واسعة النطاق بتصميم داخلي متخصص مصمم لتنظيم درجة الحرارة الأمثل والمتانة.",
      "project-4-image-alt": "مستودع الدمام الصناعي",
      "project-5-title": "مركز مكة التجاري",
      "project-5-category": "تجاري",
      "project-5-description": "مجمع تجاري صاخب بتصميم داخلي مخصص يعزز الجاذبية الجمالية وكفاءة الطاقة.",
      "project-5-image-alt": "مركز مكة التجاري",
      "project-6-title": "قصر المدينة الفاخر",
      "project-6-category": "سكني",
      "project-6-description": "قصر رائع يتميز بتصميم داخلي مخصص بتفاصيل معقدة تعكس الهندسة المعمارية العربية التقليدية.",
      "project-6-image-alt": "قصر المدينة الفاخر",

      "project-view-details": "عرض التفاصيل",
      "pagination-prev": "السابق",
      "pagination-next": "التالي",

      "projects-cta-title": "هل ألهمك عملنا؟",
      "projects-cta-subtitle": "دعنا نخلق شيئاً استثنائياً معاً.",
      "projects-cta-btn-contact": "ابدأ مشروعك",
      "projects-cta-btn-services": "استكشف الخدمات",

      // Contact Page - EVERY WORD
      "contact-page-title": "دعنا نبني مشروعك الحلم معاً",
      "contact-page-subtitle": "نود أن نسمع منك. سواء كنت تخطط لتصميم داخلي جديد، أو سقف أنيق، أو تصميم جدار مخصص - فريقنا جاهز لجعله يحدث.",

      "contact-info-title": "تواصل معنا",
      "contact-info-subtitle": "تواصل معنا من خلال أي من القنوات التالية",
      "contact-address-title": "العنوان",
      "contact-address": "طريق المسجد الحرام، مكة المكرمة، المملكة العربية السعودية",
      "contact-phone-title": "الهاتف",
      "contact-phone": "+966 58 245 3791",
      "contact-email-title": "البريد الإلكتروني",
      "contact-email": "support@mualiminteriors.com",
      "contact-hours-title": "ساعات العمل",
      "contact-hours": "السبت - الخميس | 9:00 صباحاً - 7:00 مساءً",

      "contact-form-title": "أرسل لنا رسالة",
      "contact-form-subtitle": "املأ النموذج أدناه وسنعود إليك في أقرب وقت ممكن",
      "form-name-label": "الاسم الكامل",
      "form-email-label": "البريد الإلكتروني",
      "form-phone-label": "رقم الهاتف",
      "form-service-label": "الخدمة المهتم بها",
      "form-service-option-default": "اختر خدمة",
      "form-service-option-residential": "التصميم الداخلي السكني",
      "form-service-option-commercial": "التصميم الداخلي التجاري",
      "form-service-option-industrial": "التصميم الداخلي الصناعي",
      "form-service-option-repairs": "إصلاح وصيانة التصميم الداخلي",
      "form-service-option-waterproofing": "العزل المائي والحراري للتصميم الداخلي",
      "form-service-option-custom": "تصميم داخلي مخصص",
      "form-message-label": "الرسالة",
      "form-submit": "إرسال الرسالة",

      "map-title": "اعثر علينا",

      // FAQ Section - EVERY WORD
      "faq-title": "الأسئلة الشائعة",
      "faq-subtitle": "اعثر على إجابات لأسئلة شائعة حول خدماتنا",
      "faq-1-question": "كم من الوقت يستغرق مشروع التصميم الداخلي النموذجي؟",
      "faq-1-answer": "تعتمد مدة مشروع التصميم الداخلي على عوامل مختلفة بما في ذلك حجم المساحة والمواد المستخدمة والظروف الجوية. يستغرق مشروع التصميم الداخلي السكني النموذجي بين 3-7 أيام، بينما قد تستغرق المشاريع التجارية عدة أسابيع. نقدم جدولاً زمنياً مفصلاً خلال مرحلة الاستشارة.",
      "faq-2-question": "هل تقدمون ضمانات على خدمات التصميم الداخلي؟",
      "faq-2-answer": "نعم، نقدم ضمانات شاملة على جميع خدمات التصميم الداخلي. تعتمد شروط الضمان المحددة على المواد المستخدمة ونوع الخدمة المقدمة. عادةً، يتم تغطية عملنا لمدة 5-10 سنوات، بينما يمكن أن تتراوح ضمانات المواد من 20 عاماً إلى مدى الحياة، اعتماداً على المنتج.",
      "faq-3-question": "كيف أعرف ما إذا كان التصميم الداخلي يحتاج إلى إصلاح أو استبدال؟",
      "faq-3-answer": "عدة علامات تشير إلى أن التصميم الداخلي قد يحتاج إلى اهتمام، بما في ذلك البلاط المفقود أو التالف، والتسريبات، وبقع المياه على الجدران، والحبيبات في المزاريب، والترهل المرئي. يمكن لخبرائنا تقديم فحص شامل لتحديد ما إذا كان الإصلاح أو الاستبدال هو الخيار الأفضل لموقفك.",
      "faq-4-question": "هل تقدمون تقديرات مجانية؟",
      "faq-4-answer": "نعم، نقدم تقديرات مجانية وغير ملزمة لجميع خدماتنا. سيقوم فريقنا بتقييم احتياجات التصميم الداخلي الخاصة بك وتقديم عرض أسعار مفصل بأسعار شفافة. اتصل بنا اليوم لجدولة استشارتك المجانية.",

      "contact-cta-title": "هل أنت مستعد لتحويل ممتلكاتك؟",
      "contact-cta-subtitle": "اتصل بنا اليوم للحصول على استشارة مجانية ودعنا نحضر رؤيتك إلى الحياة.",
      "contact-cta-btn-call": "اتصل بنا الآن",
      "contact-cta-btn-projects": "شاهد أعمالنا",

      // Footer - EVERY WORD
      "footer-description": "منزلك، متوج بالتميز. حلول تصميم داخلي متميزة لأولئك الذين يطالبون بالأفضل تماماً.",
      "footer-quick-links": "روابط سريعة",
      "footer-services": "الخدمات",
      "footer-service-1": "التصميم الداخلي السكني",
      "footer-service-2": "التصميم الداخلي التجاري",
      "footer-service-3": "التصميم الداخلي الصناعي",
      "footer-service-4": "إصلاح وصيانة التصميم الداخلي",
      "footer-service-5": "تصميم داخلي مخصص",
      "footer-contact": "معلومات الاتصال",
      "footer-address": "طريق المسجد الحرام، مكة المكرمة، المملكة العربية السعودية",
      "footer-phone": "+966 58 245 3791",
      "footer-email": "support@mualiminteriors.com",
      "footer-hours": "السبت - الخميس | 9:00 صباحاً - 7:00 مساءً",
      "footer-rights": "جميع الحقوق محفوظة.",

      // Floating Buttons - EVERY WORD
      "whatsapp-title": "محادثة واتساب",
      "phone-title": "اتصل بنا",
      "back-to-top-title": "العودة للأعلى",

      // Social Media - EVERY WORD
      "social-facebook": "فيسبوك",
      "social-twitter": "تويتر",
      "social-instagram": "انستغرام",
      "social-linkedin": "لينكدإن",

      // Form Success Messages - EVERY WORD
      "form-success": "تم إرسال النموذج بنجاح! سنعود إليك قريباً.",
      "form-error": "يرجى ملء جميع الحقول المطلوبة.",

      // Rating Stars - EVERY WORD
      "rating-text": "التقييم",
      "stars-text": "نجوم",

      // Section Titles - EVERY WORD
      "section-title-decoration": "خط الزينة",
      "title-decoration": "زينة العنوان",

      // Video Elements - EVERY WORD
      "video-alt": "فيديو الخلفية",
      "video-description": "فيديو عرض الشركة",

      // Image Alt Texts - EVERY WORD
      "team-image-alt": "عضو الفريق",
      "project-image-alt": "صورة المشروع",
      "service-image-alt": "صورة الخدمة",
      "ceo-image-alt": "صورة الرئيس التنفيذي",
      "story-image-alt": "صورة قصتنا",
      "process-image-alt": "صورة العملية",
      "feature-image-alt": "صورة الميزة",

      // Button Texts - EVERY WORD
      "btn-primary": "زر أساسي",
      "btn-secondary": "زر ثانوي",
      "btn-link": "زر رابط",

      // Icon Labels - EVERY WORD
      "icon-crown": "أيقونة التاج",
      "icon-gem": "أيقونة الجوهرة",
      "icon-hammer": "أيقونة المطرقة",
      "icon-lightbulb": "أيقونة المصباح",
      "icon-leaf": "أيقونة الورقة",
      "icon-check": "أيقونة الاختيار",
      "icon-phone": "أيقونة الهاتف",
      "icon-email": "أيقونة البريد الإلكتروني",
      "icon-location": "أيقونة الموقع",
      "icon-clock": "أيقونة الساعة",
      "icon-quote": "أيقونة الاقتباس",
      "icon-star": "أيقونة النجمة",
      "icon-arrow": "أيقونة السهم",
      "icon-chevron": "أيقونة الشيفرون",
      "icon-menu": "أيقونة القائمة",
      "icon-close": "أيقونة الإغلاق",

      // Status Messages - EVERY WORD
      "active-status": "نشط",
      "inactive-status": "غير نشط",
      "loading-status": "جاري التحميل",
      "success-status": "نجاح",
      "error-status": "خطأ",
      "warning-status": "تحذير",

      // Navigation States - EVERY WORD
      "current-page": "الصفحة الحالية",
      "previous-page": "الصفحة السابقة",
      "next-page": "الصفحة التالية",
      "first-page": "الصفحة الأولى",
      "last-page": "الصفحة الأخيرة",

      // Time and Date - EVERY WORD
      "today": "اليوم",
      "yesterday": "أمس",
      "tomorrow": "غداً",
      "this-week": "هذا الأسبوع",
      "this-month": "هذا الشهر",
      "this-year": "هذه السنة",

      // Numbers and Quantities - EVERY WORD
      "items-count": "عناصر",
      "projects-count": "مشاريع",
      "services-count": "خدمات",
      "team-count": "أعضاء الفريق",
      "years-count": "سنوات",
      "clients-count": "عملاء",

      // Quality Indicators - EVERY WORD
      "excellent-quality": "ممتاز",
      "good-quality": "جيد",
      "average-quality": "متوسط",
      "poor-quality": "ضعيف",
      "premium-quality": "متميز",
      "standard-quality": "قياسي",

      // Business Terms - EVERY WORD
      "consultation": "استشارة",
      "quotation": "عرض سعر",
      "installation": "تركيب",
      "maintenance": "صيانة",
      "warranty": "ضمان",
      "guarantee": "تأكيد",
      "certification": "شهادة",
      "accreditation": "اعتماد",

      // Technical Terms - EVERY WORD
      "gypsum-board": "ألواح الجبس",
      "grc-facade": "واجهة GRC",
      "cement-board": "ألواح الأسمنت",
      "cornice-design": "تصميم كورنيش",
      "column-design": "تصميم عمود",
      "window-frame": "إطار نافذة",
      "waterproofing": "عزل مائي",
      "insulation": "عزل",
      "ventilation": "تهوية",
      "structural-integrity": "سلامة هيكلية",

      // Material Types - EVERY WORD
      "clay-tiles": "بلاط طيني",
      "metal-sheets": "ألواح معدنية",
      "solar-panels": "ألواح شمسية",
      "composite-materials": "مواد مركبة",
      "natural-materials": "مواد طبيعية",
      "synthetic-materials": "مواد صناعية",
      "fire-resistant": "مقاوم للحريق",
      "water-resistant": "مقاوم للماء",
      "weather-resistant": "مقاوم للطقس",

      // Service Categories - EVERY WORD
      "residential-services": "خدمات سكنية",
      "commercial-services": "خدمات تجارية",
      "industrial-services": "خدمات صناعية",
      "repair-services": "خدمات إصلاح",
      "maintenance-services": "خدمات صيانة",
      "custom-services": "خدمات مخصصة",
      "emergency-services": "خدمات طارئة",
      "preventive-services": "خدمات وقائية",

      // Project Types - EVERY WORD
      "villa-projects": "مشاريع فيلات",
      "apartment-projects": "مشاريع شقق",
      "office-projects": "مشاريع مكاتب",
      "retail-projects": "مشاريع تجارية",
      "warehouse-projects": "مشاريع مستودعات",
      "factory-projects": "مشاريع مصانع",
      "renovation-projects": "مشاريع تجديد",
      "new-construction": "بناء جديد",

      // Contact Methods - EVERY WORD
      "phone-contact": "اتصال هاتفي",
      "email-contact": "اتصال بريد إلكتروني",
      "whatsapp-contact": "اتصال واتساب",
      "visit-office": "زيارة المكتب",
      "online-consultation": "استشارة عبر الإنترنت",
      "site-visit": "زيارة موقع",

      // Payment Terms - EVERY WORD
      "free-consultation": "استشارة مجانية",
      "free-estimate": "تقدير مجاني",
      "flexible-payment": "دفع مرن",
      "installment-plan": "خطة تقسيط",
      "full-payment": "دفع كامل",
      "advance-payment": "دفعة مقدمة",

      // Timeframes - EVERY WORD
      "same-day": "نفس اليوم",
      "next-day": "اليوم التالي",
      "within-week": "خلال أسبوع",
      "within-month": "خلال شهر",
      "custom-timeline": "جدول زمني مخصص",
      "urgent-service": "خدمة عاجلة",
      "standard-timeline": "جدول زمني قياسي",

      // Warranty Terms - EVERY WORD
      "years-warranty": "ضمان سنوات",
      "lifetime-warranty": "ضمان مدى الحياة",
      "workmanship-warranty": "ضمان الإتقان",
      "material-warranty": "ضمان المواد",
      "extended-warranty": "ضمان ممتد",
      "comprehensive-warranty": "ضمان شامل",

      // Certification Types - EVERY WORD
      "quality-certification": "شهادة الجودة",
      "safety-certification": "شهادة السلامة",
      "environmental-certification": "شهادة بيئية",
      "industry-certification": "شهادة صناعية",
      "international-standards": "معايير دولية",
      "local-standards": "معايير محلية",

      // Additional Service Features - EVERY WORD
      "energy-efficiency": "كفاءة الطاقة",
      "sound-proofing": "عزل صوتي",
      "thermal-insulation": "عزل حراري",
      "moisture-control": "تحكم في الرطوبة",
      "temperature-regulation": "تنظيم درجة الحرارة",
      "air-quality": "جودة الهواء",
      "natural-lighting": "إضاءة طبيعية",
      "ventilation-system": "نظام تهوية",

      // Design Styles - EVERY WORD
      "modern-design": "تصميم حديث",
      "traditional-design": "تصميم تقليدي",
      "contemporary-design": "تصميم معاصر",
      "classic-design": "تصميم كلاسيكي",
      "minimalist-design": "تصميم بسيط",
      "luxury-design": "تصميم فاخر",
      "custom-design": "تصميم مخصص",
      "bespoke-design": "تصميم حصري",

      // Color Schemes - EVERY WORD
      "neutral-colors": "ألوان محايدة",
      "warm-colors": "ألوان دافئة",
      "cool-colors": "ألوان باردة",
      "earth-tones": "درجات أرضية",
      "bold-colors": "ألوان جريئة",
      "pastel-colors": "ألوان باستيل",
      "monochromatic": "أحادي اللون",
      "contrasting-colors": "ألوان متباينة",

      // Finish Types - EVERY WORD
      "matte-finish": "إنهاء غير لامع",
      "glossy-finish": "إنهاء لامع",
      "satin-finish": "إنهاء ساتان",
      "textured-finish": "إنهاء ملمس",
      "smooth-finish": "إنهاء ناعم",
      "natural-finish": "إنهاء طبيعي",
      "painted-finish": "إنهاء مطلي",
      "laminated-finish": "إنهاء مغلف",

      // Installation Methods - EVERY WORD
      "professional-installation": "تركيب احترافي",
      "quick-installation": "تركيب سريع",
      "precision-installation": "تركيب دقيق",
      "custom-installation": "تركيب مخصص",
      "standard-installation": "تركيب قياسي",
      "advanced-installation": "تركيب متقدم",

      // Maintenance Services - EVERY WORD
      "regular-maintenance": "صيانة منتظمة",
      "preventive-maintenance": "صيانة وقائية",
      "emergency-maintenance": "صيانة طارئة",
      "scheduled-maintenance": "صيانة مجدولة",
      "comprehensive-maintenance": "صيانة شاملة",
      "basic-maintenance": "صيانة أساسية",

      // Repair Services - EVERY WORD
      "minor-repairs": "إصلاحات طفيفة",
      "major-repairs": "إصلاحات رئيسية",
      "emergency-repairs": "إصلاحات طارئة",
      "structural-repairs": "إصلاحات هيكلية",
      "cosmetic-repairs": "إصلاحات تجميلية",
      "functional-repairs": "إصلاحات وظيفية",

      // Consultation Services - EVERY WORD
      "initial-consultation": "استشارة أولية",
      "design-consultation": "استشارة تصميم",
      "technical-consultation": "استشارة تقنية",
      "material-consultation": "استشارة مواد",
      "budget-consultation": "استشارة ميزانية",
      "project-consultation": "استشارة مشروع",

      // Additional Features - EVERY WORD
      "eco-friendly": "صديق للبيئة",
      "sustainable": "مستدام",
      "durable": "متين",
      "long-lasting": "طويل الأمد",
      "low-maintenance": "صيانة منخفضة",
      "high-performance": "أداء عالي",
      "cost-effective": "اقتصادي",
      "value-for-money": "قيمة مقابل المال",

      // Technical Specifications - EVERY WORD
      "dimensions": "أبعاد",
      "weight": "وزن",
      "thickness": "سمك",
      "density": "كثافة",
      "strength": "قوة",
      "flexibility": "مرونة",
      "hardness": "صلابة",
      "porosity": "مسامية",

      // Safety Features - EVERY WORD
      "fire-safety": "سلامة من الحرائق",
      "slip-resistance": "مقاومة الانزلاق",
      "impact-resistance": "مقاومة الصدمات",
      "weather-resistance": "مقاومة الطقس",
      "mold-resistance": "مقاومة العفن",
      "pest-resistance": "مقاومة الآفات",
      "chemical-resistance": "مقاومة المواد الكيميائية",
      "uv-resistance": "مقاومة الأشعة فوق البنفسجية",

      // Environmental Features - EVERY WORD
      "recyclable": "قابل لإعادة التدوير",
      "biodegradable": "قابل للتحلل",
      "low-voc": "منخفض المركبات العضوية المتطايرة",
      "energy-saving": "موفر للطاقة",
      "water-saving": "موفر للماء",
      "carbon-neutral": "محايد كربونياً",
      "sustainable-sourcing": "تزويد مستدام",
      "green-certified": "معتمد أخضر",

      // Installation Time - EVERY WORD
      "quick-process": "عملية سريعة",
      "efficient-installation": "تركيب كفء",
      "minimal-disruption": "حد أدنى من التعطيل",
      "clean-process": "عملية نظيفة",
      "organized-workflow": "سير عمل منظم",
      "professional-team": "فريق محترف",
      "quality-workmanship": "إتقان عالي الجودة",
      "attention-to-detail": "اهتمام بالتفاصيل",

      // After-Sales Service - EVERY WORD
      "after-sales-support": "دعم ما بعد البيع",
      "customer-care": "رعاية العملاء",
      "technical-support": "دعم فني",
      "maintenance-support": "دعم صيانة",
      "warranty-claims": "مطالبات الضمان",
      "service-calls": "مكالمات الخدمة",
      "emergency-response": "استجابة طارئة",
      "preventive-care": "رعاية وقائية",

      // Company Values - EVERY WORD
      "customer-satisfaction": "رضا العملاء",
      "quality-assurance": "ضمان الجودة",
      "timely-delivery": "تسليم في الوقت المحدد",
      "transparent-pricing": "أسعار شفافة",
      "professional-ethics": "أخلاقيات مهنية",
      "continuous-improvement": "تحسين مستمر",
      "innovation-driven": "مدفوع بالابتكار",
      "excellence-focused": "مركز على التميز",

      // Industry Recognition - EVERY WORD
      "awards-winning": "فائز بالجوائز",
      "industry-leader": "قائد في الصناعة",
      "customer-choice": "اختيار العملاء",
      "quality-excellence": "تميز الجودة",
      "service-excellence": "تميز الخدمة",
      "innovation-award": "جائزة الابتكار",
      "sustainability-award": "جائزة الاستدامة",
      "customer-satisfaction-award": "جائزة رضا العملاء",

      // Partnership Benefits - EVERY WORD
      "trusted-partner": "شريك موثوق",
      "reliable-service": "خدمة موثوقة",
      "long-term-relationship": "علاقة طويلة الأمد",
      "mutual-growth": "نمو متبادل",
      "shared-success": "نجاح مشترك",
      "collaborative-approach": "نهج تعاوني",
      "strategic-partnership": "شراكة استراتيجية",
      "value-creation": "خلق قيمة",

      // Technology Integration - EVERY WORD
      "smart-technology": "تكنولوجيا ذكية",
      "digital-solutions": "حلول رقمية",
      "automated-systems": "أنظمة آلية",
      "energy-management": "إدارة الطاقة",
      "climate-control": "تحكم مناخي",
      "security-systems": "أنظمة أمنية",
      "home-automation": "أتمتة المنزل",
      "building-management": "إدارة المباني",

      // Customization Options - EVERY WORD
      "personalized-design": "تصميم مخصص",
      "custom-solutions": "حلول مخصصة",
      "tailored-approach": "نهج مصمم خصيصاً",
      "client-specific": "مخصص للعميل",
      "unique-requirements": "متطلبات فريدة",
      "special-requests": "طلبات خاصة",
      "bespoke-creations": "إبداعات حصرية",
      "made-to-order": "مصنوع حسب الطلب",

      // Project Management - EVERY WORD
      "project-planning": "تخطيط المشروع",
      "timeline-management": "إدارة الجدول الزمني",
      "budget-control": "تحكم في الميزانية",
      "quality-control": "مراقبة الجودة",
      "resource-management": "إدارة الموارد",
      "risk-management": "إدارة المخاطر",
      "stakeholder-coordination": "تنسيق أصحاب المصلحة",
      "progress-tracking": "تتبع التقدم",

      // Site Preparation - EVERY WORD
      "site-assessment": "تقييم الموقع",
      "preparation-work": "عمل التحضير",
      "safety-measures": "إجراءات السلامة",
      "material-delivery": "تسليم المواد",
      "equipment-setup": "إعداد المعدات",
      "work-area-preparation": "تحضير منطقة العمل",
      "protective-measures": "إجراءات وقائية",
      "cleanup-process": "عملية التنظيف",

      // Final Touches - EVERY WORD
      "final-inspection": "التفتيش النهائي",
      "quality-check": "فحص الجودة",
      "client-walkthrough": "جولة العميل",
      "handover-process": "عملية التسليم",
      "documentation": "توثيق",
      "warranty-information": "معلومات الضمان",
      "maintenance-guidance": "إرشادات الصيانة",
      "aftercare-support": "دعم ما بعد الرعاية",
       // Navigation
        'nav-home': 'الرئيسية',
        'nav-about': 'من نحن',
        'nav-services': 'خدماتنا',
        'nav-projects': 'مشاريعنا',
        'nav-contact': 'اتصل بنا',
        
        // Logo
        'logo-text': 'معالم إنتريرز',
        
        // Hero Section
        'about-page-title': 'تقليد التميز، مبني فوق الجميع',
        'about-page-subtitle': 'اكتشف قصتنا في الحرفية والابتكار والالتزام الثابت بالجودة.',
        
        // Story Section
        'about-story-title': 'قصتنا',
        'about-story-description': 'تأسست معالم إنتريرز برؤية واحدة — لرفع التصميم الداخلي من مجرد مكون هيكلي إلى تحفة فنية للحماية والفن. من بدايات متواضعة في قلب مكة، تطورت علامتنا التجارية إلى رمز عالمي للمتانة والتميز.',
        'about-story-description-2': 'مع كل مشروع نقوم به، نجدّد عهدنا بالجودة ورضا العملاء. يعمل فريقنا من المصممين والمهندسين والحرفيين بتناغم، يجمع بين تقنيات التصميم الداخلي القديمة وأحدث الابتكارات العالمية.',
        'about-story-description-3': 'نحن نؤمن أن السقف هو تاج كل منزل، ويجب أن يعكس بناؤه القوة والدقة والجمال الخالد. نركز على المواد عالية الجودة والتصاميم الشخصية والحلول الموجهة للعميل. يتم التعامل مع كل تفصيل — من العزل إلى التثبيت — بعين الكمال.',
        'about-story-image-alt': 'فريقنا في العمل',
        
        // Mission Section
        'mission-title': 'مهمتنا',
        'mission-description': 'تقديم تصميم داخلي يدوم لأجيال. نحن نؤمن أن السقف هو تاج كل منزل، ويجب أن يعكس بناؤه القوة والدقة والجمال الخالد.',
        
        // Vision Section
        'vision-title': 'رؤيتنا',
        'vision-description': 'أن نكون المعيار العالمي لتميز التصميم الداخلي، ووضع معايير جديدة في الجودة والابتكار والرقي الجمالي.',
        
        // Core Values Section
        'values-title': 'قيمنا الأساسية',
        'values-subtitle': 'المبادئ التي توجه كل عمل نقوم به.',
        
        // Value Cards
        'value-1-title': 'النزاهة',
        'value-1-description': 'نحن نفي بالتزامنا بشفافية وأمانة، نبني علاقات قائمة على الثقة.',
        
        'value-2-title': 'الابتكار',
        'value-2-description': 'نستكشف باستمرار التقنيات والمنهجيات الجديدة لتقديم حلول متطورة.',
        
        'value-3-title': 'التميز',
        'value-3-description': 'نسعى للكمال في كل جانب من جوانب عملنا، من أصغر تفصيل إلى أعظم رؤية.',
        
        // CEO Section
        'ceo-title': 'تعرف على رئيسنا التنفيذي',
        'ceo-subtitle': 'صاحب الرؤية وراء معالم إنتريرز',
        'ceo-name': 'مزمل',
        'ceo-position': 'المؤسس والرئيس التنفيذي',
        'ceo-experience': 'أكثر من 13 سنة من الخبرة في المجال',
        'ceo-bio': 'مزمل هو قائد ذو رؤية مع أكثر من 13 سنة من الخبرة في صناعة التصميم الداخلي والبناء. شغفه بالتميز والابتكار ورضا العملاء كان القوة الدافعة وراء نجاح معالم إنتريرز. تحت قيادته، نمت الشركة من مشروع محلي صغير إلى قائد إقليمي معترف به في حلول التصميم الداخلي المتميزة.',
        'ceo-bio-2': 'مع فهم عميق لاتجاهات السوق والتزام بالممارسات المستدامة، يواصل مزمل دفع حدود الممكن في التصميم الداخلي، مما يضمن أن كل مشروع يعكس أعلى معايير الجودة والإتقان.',
        'ceo-image-alt': 'مزمل - الرئيس التنفيذي',
        
        // Process Section
        'about-process-title': 'عملنا',
        'about-process-subtitle': 'كيف نحقق رؤيتك على أرض الواقع',
        
        // Process Steps
        'about-process-step-1-title': 'الاكتشاف والاستشارة',
        'about-process-step-1-description': 'نستمع لاحتياجاتك، نفهم رؤيتك، ونقيم مساحتك لإنشاء حل مخصص.',
        
        'about-process-step-2-title': 'التصميم والتخطيط',
        'about-process-step-2-description': 'يصنع مصممونا الخبراء خططًا مفصلة وتصورات ثلاثية الأبعاد لتحقيق رؤيتك.',
        
        'about-process-step-3-title': 'اختيار المواد',
        'about-process-step-3-description': 'نرشدك عبر خيارات المواد المتميزة التي توازن بين الجماليات والمتانة والميزانية.',
        
        'about-process-step-4-title': 'التثبيت الاحترافي',
        'about-process-step-4-description': 'ينفذ حرفيوننا المهرة المشروع بدقة، مما يضمن نتائج لا تشوبها شائبة.',
        
        'about-process-step-5-title': 'ضمان الجودة',
        'about-process-step-5-description': 'نجري فحوصات شاملة لضمان أن كل تفصيل يلبي معاييرنا الدقيقة.',
        
        // Team Section
        'team-title': 'تعرف على فريقنا',
        'team-subtitle': 'الخبراء وراء حرفيتنا الاستثنائية.',
        
        // Team Members
        'team-member-1-name': 'أحمد الفهد',
        'team-member-1-position': 'المؤسس والرئيس التنفيذي',
        'team-member-1-description': 'مع أكثر من 25 سنة في المجال، أسس أحمد معالم إنتريرز برؤية لإعادة تعريف التميز في التصميم الداخلي في المنطقة.',
        'team-member-1-alt': 'أحمد الفهد - المؤسس والرئيس التنفيذي',
        
        'team-member-2-name': 'فاطمة الرشيد',
        'team-member-2-position': 'مديرة التقنية الرئيسية',
        'team-member-2-description': 'تجلب فاطمة تقنيات التصميم الداخلي المبتكرة والممارسات المستدامة إلى كل مشروع نقوم به.',
        'team-member-2-alt': 'فاطمة الرشيد - مديرة التقنية الرئيسية',
        
        'team-member-3-name': 'خالد المنصور',
        'team-member-3-position': 'رئيس قسم التصميم',
        'team-member-3-description': 'تضمن الرؤية الفنية والخبرة التقنية لخالد أن كل تصميم داخلي ننشئه يكون جميلاً وعملياً.',
        'team-member-3-alt': 'خالد المنصور - رئيس قسم التصميم',
        
        // CTA Section
        'about-cta-title': 'انضم إلى رحلتنا نحو التميز',
        'about-cta-subtitle': 'جرب فرق معالم إنتريرز بنفسك.',
        'about-cta-btn-contact': 'اتصل بنا',
        'about-cta-btn-projects': 'شاهد أعمالنا',
        
        // Footer Section
        'footer-description': 'منزلك، متوجًا بالتميز. حلول التصميم الداخلي المتميزة لأولئك الذين يطالبون بالأفضل.',
        'footer-quick-links': 'روابط سريعة',
        'footer-services': 'خدماتنا',
        'footer-contact': 'معلومات الاتصال',
        'footer-rights': 'جميع الحقوق محفوظة.',
        
        // Footer Services
        'footer-service-1': 'التصميم الداخلي السكني',
        'footer-service-2': 'التصميم الداخلي التجاري',
        'footer-service-3': 'التصميم الداخلي الصناعي',
        'footer-service-4': 'إصلاح وصيانة التصميم الداخلي',
        'footer-service-5': 'التصميم الداخلي المخصص',
        
        // Footer Contact Info
        'footer-address': 'طريق المسجد، مكة، المملكة العربية السعودية',
        'footer-phone': '+966 58 245 3791',
        'footer-email': 'support@mualiminteriors.com',
        'footer-hours': 'السبت – الخميس | 9:00 ص – 7:00 م',
        
        // Accessibility
        'aria-label-toggle-theme': 'تبديل السمة',
        'aria-label-toggle-language': 'تبديل اللغة',
        'aria-label-toggle-mobile-menu': 'تبديل قائمة الجوال',
        'aria-label-facebook': 'فيسبوك',
        'aria-label-twitter': 'تويتر',
        'aria-label-instagram': 'انستغرام',
        'aria-label-linkedin': 'لينكدإن'

    }
  }

  // Rest of the JavaScript code remains the same...
  const showMoreBtn = document.getElementById("show-more-btn")
  const servicesHidden = document.getElementById("services-hidden")
  let isExpanded = false

  if (showMoreBtn && servicesHidden) {
    showMoreBtn.addEventListener("click", () => {
      isExpanded = !isExpanded
      if (isExpanded) {
        servicesHidden.style.display = "block"
        showMoreBtn.setAttribute("data-translate", "show-less")
        applyLanguage(currentLang)
      } else {
        servicesHidden.style.display = "none"
        showMoreBtn.setAttribute("data-translate", "show-more")
        applyLanguage(currentLang)
      }
    })
  }

  // Get DOM elements
  const themeToggle = document.getElementById("theme-toggle")
  const langToggle = document.getElementById("lang-toggle")
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const contactForm = document.getElementById("contact-form")
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectItems = document.querySelectorAll(".project-item")
  const faqItems = document.querySelectorAll(".faq-item")
  const paginationNumbers = document.querySelectorAll(".page-number")
  const paginationBtns = document.querySelectorAll(".pagination-btn")

  const testimonialItems = document.querySelectorAll(".testimonial-item")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  let currentTestimonial = 0
  const mainNav = document.querySelector(".main-nav")

  function showTestimonial(index) {
    const track = document.querySelector(".testimonial-track")
    if (track) {
      // Ensure index wraps around
      if (index < 0) {
        currentTestimonial = testimonialItems.length - 1
      } else if (index >= testimonialItems.length) {
        currentTestimonial = 0
      } else {
        currentTestimonial = index
      }

      track.style.transform = `translateX(-${currentTestimonial * 100}%)`
    }
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      showTestimonial(currentTestimonial - 1)
    })

    nextBtn.addEventListener("click", () => {
      showTestimonial(currentTestimonial + 1)
    })

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
      showTestimonial(currentTestimonial + 1)
    }, 5000)
  }

  // Initialize theme and language from localStorage or set defaults
  let currentTheme = localStorage.getItem("theme") || "light"
  let currentLang = localStorage.getItem("lang") || "en"

  // Apply initial theme and language
  applyTheme(currentTheme)
  applyLanguage(currentLang)

  // Theme toggle functionality
  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light"
    applyTheme(currentTheme)
    localStorage.setItem("theme", currentTheme)
  })

  // Language toggle functionality
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en"
    applyLanguage(currentLang)
    localStorage.setItem("lang", currentLang)
  })

  // Mobile menu toggle
  mobileMenuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active")
    mobileMenuToggle.classList.toggle("active")
  })

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active")
      mobileMenuToggle.classList.remove("active")
    })
  })

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert(currentLang === 'en' ? "Form submitted successfully! We will get back to you soon." : "تم إرسال النموذج بنجاح! سنعود إليك قريباً.")
      contactForm.reset()
    })
  }

  // Project filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")
      projectItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      })
    })
  })

  // FAQ accordion functionality
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      item.classList.toggle("active")

      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active")
        }
      })
    })
  })

  // Pagination functionality
  paginationNumbers.forEach((number) => {
    number.addEventListener("click", function () {
      paginationNumbers.forEach((num) => num.classList.remove("active"))
      this.classList.add("active")

      const pageNumber = this.textContent
      console.log(`Loading page ${pageNumber}`)
    })
  })

  // Apply theme function
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme)
    const icon = themeToggle.querySelector("i")
    icon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun"
  }

  // Apply language function
  function applyLanguage(lang) {
    document.documentElement.setAttribute("lang", lang)
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr")

    langToggle.querySelector(".lang-current").textContent = lang === "en" ? "EN" : "العربية"

    // Translate all elements with data-translate attribute
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate")
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key]
      }
    })

    // Translate all alt attributes
    document.querySelectorAll("[data-translate-alt]").forEach((element) => {
      const key = element.getAttribute("data-translate-alt")
      if (translations[lang] && translations[lang][key]) {
        element.setAttribute("alt", translations[lang][key])
      }
    })

    // Translate all title attributes
    document.querySelectorAll("[data-translate-title]").forEach((element) => {
      const key = element.getAttribute("data-translate-title")
      if (translations[lang] && translations[lang][key]) {
        element.setAttribute("title", translations[lang][key])
      }
    })

    // Translate all placeholder attributes
    document.querySelectorAll("[data-translate-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-translate-placeholder")
      if (translations[lang] && translations[lang][key]) {
        element.setAttribute("placeholder", translations[lang][key])
      }
    })

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      if (targetId) {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Add scroll effect to header
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  const backToTopBtn = document.getElementById("back-to-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show")
    } else {
      backToTopBtn.classList.remove("show")
    }
  })

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
      }
    })
  }, observerOptions)

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el)
  })
})