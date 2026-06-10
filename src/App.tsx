import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Shield,
  Clock,
  Sparkles,
  MapPin,
  Calendar,
  X,
  Menu,
  Stethoscope,
  Inbox,
  CheckCircle2
} from 'lucide-react';

// Import our cohesive modular components & pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CareFinder from './pages/CareFinder';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Custom consultation modal request state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consultName, setConsultName] = useState('');
  const [consultPhone, setConsultPhone] = useState('');
  const [consultService, setConsultService] = useState('General Consultation');

  // Multi-page navigation trigger
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConsultSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!consultName || !consultPhone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const resetConsultForm = () => {
    setConsultName('');
    setConsultPhone('');
    setConsultService('General Consultation');
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-artistic-bg text-artistic-text font-sans selection:bg-artistic-accent/20 selection:text-artistic-accent scroll-smooth">

      {/* STICKY MULTIPAGE NAVIGATION HEADER */}
      <header className="bg-artistic-bg/95 backdrop-blur-md border-b border-artistic-border/60 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Clinical Brand */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none text-left bg-transparent border-none p-0"
          >
            <div className="w-11 h-11 bg-artistic-accent text-white rounded-xl rounded-tl-none rounded-br-none flex items-center justify-center shadow-sm border border-white/10 group-hover:bg-artistic-accent-hover transition-colors duration-300">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-serif font-bold text-base md:text-lg text-artistic-text tracking-tight block group-hover:text-artistic-accent transition-colors duration-300">
                Ambiance Joy
              </span>
              <span className="text-[9px] uppercase tracking-widest font-mono text-artistic-accent block -mt-1 font-bold">
                Nursing Services
              </span>
            </div>
          </button>

          {/* Elegant Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8 lg:ml-20 mr-auto">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Our Services' },
              { id: 'finder', label: 'Care Finder' },
              { id: 'contact', label: 'Contact Us' }
            ].map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`relative py-1 text-sm font-serif capitalize tracking-wide transition-all duration-300 font-semibold group cursor-pointer bg-transparent border-none ${
                    isActive ? 'text-artistic-accent font-bold' : 'text-artistic-muted hover:text-artistic-accent'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-artistic-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              );
            })}
          </nav>

          {/* Action Trigger Buttons */}
          <div className="flex items-center gap-3">
            <a
              id="header-cta-phone"
              href="tel:8328147008"
              className="px-4 py-2 text-xs text-artistic-text font-bold bg-artistic-card hover:bg-artistic-card-hover rounded-full rounded-tl-none rounded-br-none hidden md:flex items-center gap-2 border border-artistic-border transition-all hover:scale-103 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-artistic-accent" />
              <span>Call (832) 814-7008</span>
            </a>
            
            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="px-5 py-2.5 text-xs font-bold bg-artistic-accent hover:bg-artistic-accent-hover text-white rounded-full rounded-tl-none rounded-br-none shadow-sm hover:shadow transition-all duration-350 transform active:scale-95 cursor-pointer hidden sm:block"
            >
              Book Consultation
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-artistic-text hover:text-artistic-accent hover:bg-artistic-card rounded-full rounded-tl-none rounded-br-none transition-all border border-transparent focus:outline-none cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Animated Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-artistic-bg/98 border-t border-artistic-border overflow-hidden"
            >
              <div className="px-4 py-6 space-y-3.5 max-w-md mx-auto">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About Us' },
                  { id: 'services', label: 'Our Services' },
                  { id: 'finder', label: 'Care Finder' },
                  { id: 'contact', label: 'Contact Us' }
                ].map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => navigateTo(link.id)}
                      className={`block w-full text-left px-4 py-3 text-base font-serif capitalize rounded-xl rounded-tl-none rounded-br-none transition-all font-semibold min-h-[44px] ${
                        isActive ? 'text-artistic-accent bg-artistic-accent/10 font-bold' : 'text-artistic-text/90 hover:text-artistic-accent hover:bg-artistic-card'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
                
                {/* Mobile Call CTA */}
                <div className="pt-4 border-t border-artistic-border/65 flex flex-col gap-3">
                  <a
                    href="tel:8328147008"
                    className="w-full py-3 px-4 bg-artistic-card hover:bg-artistic-card-hover border border-artistic-border rounded-xl rounded-tl-none rounded-br-none text-xs font-bold text-artistic-text flex items-center justify-center gap-2 transition-all min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-artistic-accent" />
                    <span>Call (832) 814-7008</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsConsultModalOpen(true);
                    }}
                    className="w-full py-3 px-4 bg-artistic-accent hover:bg-artistic-accent-hover text-white text-xs font-bold rounded-xl rounded-tl-none rounded-br-none transition-all shadow-sm active:scale-95 text-center min-h-[44px]"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN CONTAINER SUPPORTING TRANSITIONS BETWEEN PAGES */}
      <main className="min-h-[70vh]">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <Home
              key="home"
              onNavigate={navigateTo}
              onOpenModal={() => setIsConsultModalOpen(true)}
            />
          )}

          {currentPage === 'about' && (
            <About
              key="about"
              onOpenModal={() => setIsConsultModalOpen(true)}
            />
          )}

          {currentPage === 'services' && (
            <Services
              key="services"
              onOpenModal={() => setIsConsultModalOpen(true)}
              onNavigate={navigateTo}
            />
          )}

          {currentPage === 'finder' && (
            <CareFinder key="finder" />
          )}

          {currentPage === 'contact' && (
            <Contact
              key="contact"
              onOpenModal={() => setIsConsultModalOpen(true)}
            />
          )}
        </AnimatePresence>
      </main>

      {/* STANDARD CORPORATE FOOTER */}
      <footer className="bg-artistic-dark-card border-t border-white/5 text-white/55 py-16 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 font-sans tracking-wide">
          
          {/* Brand/Logo Statement block */}
          <div className="space-y-4 font-sans">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-artistic-dark-bg text-artistic-accent rounded-xl rounded-tl-none rounded-br-none flex items-center justify-center shadow-md border border-white/10">
                <Stethoscope className="w-5 h-5 text-artistic-accent" />
              </div>
              <div>
                <span className="font-serif font-bold text-base text-white tracking-tight block">
                  Ambiance Joy
                </span>
                <span className="text-[9px] uppercase tracking-widest font-mono text-artistic-accent block -mt-1 font-bold">
                  Nursing Services
                </span>
              </div>
            </div>

            <p className="text-white/60 text-xs leading-relaxed leading-[1.6]">
              A premium, medically-guided care team dedicated to bringing comfort, security, and restoration back to the hearts of local seniors and families.
            </p>

            <span className="text-[10px] font-mono text-white/40 block">
              © 2026 Ambiance Joy Nursing Services. All Rights Reserved.
            </span>
          </div>

          {/* Quick Contacts */}
          <div className="space-y-4 font-sans">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest font-semibold">
              Clinical Coordinates
            </h4>
            
            <ul className="space-y-3.5 text-xs text-white/70">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/40 shrink-0" />
                <a href="tel:8328147008" className="hover:text-artistic-accent transition-colors">
                  (832) 814-7008
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Inbox className="w-4 h-4 text-white/40 shrink-0" />
                <a href="mailto:ambiancejoynursingservices@gmail.com" className="hover:text-artistic-accent transition-colors block break-all">
                  ambiancejoynursingservices@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <span>
                  Primary Intake Office Panel<br />
                  Houston, Texas Metro Area
                </span>
              </li>
            </ul>
          </div>

          {/* Dynamic Navigation page routing */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest font-semibold">
              Bespoke Pages
            </h4>
            
            <ul className="space-y-2.5 text-xs text-white/65">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-artistic-accent bg-transparent border-none p-0 cursor-pointer">
                  Site Homepage
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-artistic-accent bg-transparent border-none p-0 cursor-pointer">
                  About Us & Team
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-artistic-accent bg-transparent border-none p-0 cursor-pointer">
                  Clinical Services
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('finder')} className="hover:text-artistic-accent bg-transparent border-none p-0 cursor-pointer">
                  Interactive Care Finder
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-artistic-accent bg-transparent border-none p-0 cursor-pointer">
                  Coordinate Desk Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Regulatory block */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest font-semibold">
              Legal Compliance
            </h4>
            <div className="space-y-2.5 text-[11px] text-white/45 font-mono leading-relaxed">
              <p>HIPAA Fully Compliant private channels.</p>
              <p>Licensed, bonded, and clinical insurance protected under State of Texas directives.</p>
              <p>All care coordinates reported directly to primary state doctors.</p>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING ACTION EMERGENCY CONTACT BOX */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          id="floating-emergency-badge"
          href="tel:8328147008"
          className="bg-artistic-accent hover:bg-artistic-accent-hover text-white p-4 rounded-full rounded-tl-none rounded-br-none shadow-2xl flex items-center justify-center border border-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Direct Priority Hotline"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* FLYOUT MODAL FOR RESERVED REGISTRATIONS */}
      <AnimatePresence>
        {isConsultModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-artistic-dark-bg/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 font-sans"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-artistic-card rounded-3xl rounded-tl-none rounded-br-none w-full max-w-lg overflow-hidden shadow-2xl border border-artistic-border relative"
            >
              
              <button
                onClick={() => setIsConsultModalOpen(false)}
                aria-label="Close consultation modal"
                className="absolute top-4 right-4 p-2 text-artistic-muted hover:text-artistic-accent hover:bg-artistic-accent/10 rounded-full rounded-tl-none rounded-br-none cursor-pointer transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-artistic-accent tracking-widest uppercase block font-bold">
                    DIRECT CLINICAL REQUEST
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-artistic-text">
                    Request Assessment Review
                  </h3>
                  <p className="text-xs text-artistic-muted">
                    We coordinate with families around Dallas-Houston metros to define comfortable, safe care routines inside private residences.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleConsultSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label id="lbl-consult-nm" className="text-xs font-mono text-artistic-text/70 block uppercase font-bold">Your Name (Required)</label>
                      <input
                        aria-labelledby="lbl-consult-nm"
                        required
                        type="text"
                        placeholder="e.g. Sarah Peterson"
                        value={consultName}
                        onChange={(e) => setConsultName(e.target.value)}
                        className="w-full bg-artistic-bg border border-artistic-border focus:border-artistic-accent-hover rounded-xl rounded-tl-none rounded-br-none px-4 py-3 text-sm text-artistic-text focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label id="lbl-consult-ph" className="text-xs font-mono text-artistic-text/70 block uppercase font-bold">Your Phone Number (Required)</label>
                      <input
                        aria-labelledby="lbl-consult-ph"
                        required
                        type="tel"
                        placeholder="e.g. (832) 814-7008"
                        value={consultPhone}
                        onChange={(e) => setConsultPhone(e.target.value)}
                        className="w-full bg-artistic-bg border border-artistic-border focus:border-artistic-accent-hover rounded-xl rounded-tl-none rounded-br-none px-4 py-3 text-sm text-artistic-text focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label id="lbl-consult-sv" className="text-xs font-mono text-artistic-text/70 block uppercase font-bold">Primary Focus Area</label>
                      <select
                        aria-labelledby="lbl-consult-sv"
                        value={consultService}
                        onChange={(e) => setConsultService(e.target.value)}
                        className="w-full bg-artistic-bg border border-artistic-border focus:border-artistic-accent-hover rounded-xl rounded-tl-none rounded-br-none px-4 py-3 text-sm text-artistic-text focus:outline-none transition-colors"
                      >
                        <option value="General Consultation">General Consult Overview</option>
                        <option value="Advanced Nursing">Registered Nurse Clinical Support</option>
                        <option value="Dementia Care">Specialized memory support</option>
                        <option value="Personal Support">Certified hygiene grooming support</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2.5 bg-artistic-accent/5 p-4 rounded-xl rounded-tl-none rounded-br-none border border-artistic-accent/10 text-[11px] text-artistic-text font-serif leading-relaxed">
                      <Shield className="w-4 h-4 text-artistic-accent shrink-0" />
                      <span>We guarantee absolute privacy under legal HIPAA standard guidelines.</span>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-artistic-accent hover:bg-artistic-accent-hover text-white font-bold rounded-xl rounded-tl-none rounded-br-none text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting Intake Ticket...
                          </>
                        ) : (
                          'Request Custom Consultation'
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-full rounded-tl-none rounded-br-none flex items-center justify-center mx-auto text-2xl font-bold border border-emerald-200">
                      ✓
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-artistic-text font-serif">Intake Registered Successfully!</h4>
                      <p className="text-xs text-artistic-muted max-w-sm mx-auto leading-relaxed">
                        Thank you! Your inquiry has been routed directly to our lead intake panel. We will call you within two hours to design your customized comfort roadmap.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        resetConsultForm();
                        setIsConsultModalOpen(false);
                      }}
                      className="px-6 py-2.5 bg-artistic-accent hover:bg-artistic-accent-hover text-white rounded-xl rounded-tl-none rounded-br-none text-xs font-bold cursor-pointer transition-colors"
                    >
                      Return to Website
                    </button>
                  </div>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
