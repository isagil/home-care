import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Sparkles,
  ArrowRight,
  Clock,
  Check,
  CheckCircle2,
  Users
} from 'lucide-react';
import { KEY_STATISTICS, COMMUNITY_PROGRAMS } from '../data';
import VideoTestimonial from '../components/VideoTestimonial';

interface HomeProps {
  key?: string;
  onNavigate: (page: string) => void;
  onOpenModal: () => void;
}

export default function Home({ onNavigate, onOpenModal }: HomeProps) {
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consultName, setConsultName] = useState('');
  const [consultPhone, setConsultPhone] = useState('');
  const [consultService, setConsultService] = useState('General Consultation');

  const TIMELINE_STEPS = [
    {
      title: 'Free Consultation',
      sub: 'Complimentary assessment',
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
      description: 'We listen to your story, understand medical requirements, map home hazards, and answer safety questions.',
      milestones: [
        'Assessment of daily & cognitive needs',
        'Home safety hazard checklist',
        'Physician team alignment check',
        'Care plan budget consultation'
      ]
    },
    {
      title: 'Personalized Care Plan',
      sub: 'Custom-designed regimen',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
      description: 'Our clinical team designs a personalized medical and companion regimen with clear medication and lifestyle tracking.',
      milestones: [
        'Customised medical tracking protocol',
        'Detailed block schedule checklist',
        'Quick emergency escalation design',
        'Secure family status dashboard'
      ]
    },
    {
      title: 'Caregiver Matching',
      sub: 'The perfect care fit',
      imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
      description: 'We match clients with our professional staff based on healthcare requirements, personality, and shared interests.',
      milestones: [
        'Clinically aligned caregiver match',
        'Complimentary meet & greet session',
        'Comfort & chemistry check',
        'Backup staff standby placement'
      ]
    },
    {
      title: 'Ongoing Support',
      sub: 'Continuous nurse oversight',
      imageUrl: 'https://images.unsplash.com/photo-1516307364728-22f127ec3102?auto=format&fit=crop&q=80&w=800',
      description: 'Daily activity checklists, secure coordinator updates, and proactive supervisor check-ins.',
      milestones: [
        'Daily health checklists sync',
        'Regular QA supervisor visits',
        '24/7 direct phone line support',
        'Flexible plan updates as health changes'
      ]
    }
  ];

  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveTimelineStep((prev) => (prev + 1) % 4);
    }, 8000);
    return () => clearInterval(cycle);
  }, []);

  const handleHeroSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!consultName || !consultPhone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-0"
    >
      {/* HERO SECTION */}
      <section className="relative min-h-[820px] lg:min-h-[750px] bg-artistic-dark-bg text-white flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/src/assets/images/hero_caregiver_1780951501948.png"
            alt="Compassionate Caregiver Helping Elder"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20 scale-102 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-artistic-dark-bg via-artistic-dark-bg/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-artistic-dark-bg to-transparent" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-artistic-dark-bg to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Block */}
            <div className="lg:col-span-7 space-y-6 lg:max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full rounded-tl-none rounded-br-none text-white/90 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-artistic-accent fill-current" />
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold">
                  PREMIUM MEDICALLY GUIDED HOME HEALTH
                </span>
              </div>
 
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
                  Welcome to <br />
                  <span className="text-artistic-accent italic font-normal">Ambiance Joy Nursing Services</span>
                </h1>
                
                <p className="text-white/85 text-base sm:text-lg leading-relaxed font-light font-sans">
                  At Ambiance Joy Nursing Services, we are dedicated to providing compassionate, professional, and personalized care in a safe and comfortable environment. Our mission is to enhance the quality of life for individuals who require assistance with daily living while maintaining their dignity, independence, and well-being.
                </p>
              </div>
 
              {/* Action Buttons Group */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 bg-artistic-accent hover:bg-artistic-accent-hover text-white font-bold rounded-full rounded-tl-none rounded-br-none text-center hover:shadow-xl hover:shadow-artistic-accent/20 transition-all duration-300 group flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
 
                <button
                  onClick={onOpenModal}
                  className="px-7 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-full rounded-tl-none rounded-br-none text-center border border-white/20 hover:border-white/35 transition-all text-sm backdrop-blur-sm cursor-pointer"
                >
                  Schedule Free Assessment
                </button>
              </div>

              {/* Quality Badges */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 text-xs font-mono text-white/60">
                <div className="flex items-center gap-2">
                  <span className="text-artistic-accent font-bold">✓</span>
                  <span>Licensed clinically under RN oversight</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-artistic-accent font-bold">✓</span>
                  <span>Fully vetted, bonded & background-checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-artistic-accent font-bold">✓</span>
                  <span>Custom caregiver matching system</span>
                </div>
              </div>
            </div>

            {/* Right Ambient Glass Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl rounded-tl-none rounded-br-none p-8 backdrop-blur-md shadow-2xl relative">
                <div className="absolute -top-3 -right-3 bg-artistic-accent text-white font-mono text-[9px] font-bold px-3 py-1 rounded-full rounded-tl-none rounded-br-none uppercase tracking-widest shadow-lg">
                  ● LIVE COORDINATION
                </div>
 
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-white/80 font-mono text-[10px] tracking-wider uppercase font-bold block">PRIORITY ENROLLMENT</span>
                    <h3 className="text-xl font-serif font-bold text-slate-100">Need immediate assistance?</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Timing is critical after hospital discharge or health shifts. Complete the fields below for a rapid priority callback.
                    </p>
                  </div>
 
                  {/* Immediate fast registration inside hero */}
                  <form onSubmit={handleHeroSubmit} className="space-y-3">
                    <input
                      required
                      type="text"
                      placeholder="Your Full Name"
                      value={consultName}
                      onChange={(e) => setConsultName(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Your Phone Number"
                      value={consultPhone}
                      onChange={(e) => setConsultPhone(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <select
                      value={consultService}
                      onChange={(e) => setConsultService(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none px-4 py-2.5 text-xs text-slate-100 focus:outline-none transition-colors"
                    >
                      <option value="General Consultation">General Consultation Review</option>
                      <option value="Advanced Nursing">Skilled Clinical Nursing</option>
                      <option value="Dementia Care">Dementia/Memory Assistance</option>
                      <option value="Personal Hygiene">Hygiene & Companion Care</option>
                    </select>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-artistic-accent hover:bg-artistic-accent-hover text-white font-bold rounded-xl rounded-tl-none rounded-br-none text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg active:scale-98"
                    >
                      {isSubmitting ? 'Securing Priority...' : 'Secure Callback Priority'}
                    </button>
                  </form>
 
                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl rounded-tl-none rounded-br-none text-xs text-emerald-200 mt-2 space-y-2 text-center"
                      >
                        <p className="font-bold">Callback Priority Registered!</p>
                        <p className="text-white/80 leading-normal font-sans">
                          Director of Nursing will call you promptly. Reference requested under Priority AJD-708.
                        </p>
                        <button
                          type="button"
                          onClick={() => setIsSubmitted(false)}
                          className="text-artistic-accent hover:underline tracking-tight scale-90 mx-auto block mt-1 font-bold"
                        >
                          Send another inquiry
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
 
                  <div className="pt-4 border-t border-white/10 text-center">
                    <span className="text-[10px] text-white/50 block uppercase tracking-wider">OR CALL OUR TRIAGE PANEL DIRECTLY:</span>
                    <a href="tel:8328147008" className="text-lg font-bold text-artistic-accent block hover:underline mt-1 font-serif">
                      (832) 814-7008
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATISTICS COUNTERS */}
      <section className="bg-artistic-card border-y border-artistic-border py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-artistic-accent/2 opacity-30 pattern-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {KEY_STATISTICS.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2 group">
                <span className="text-4xl md:text-5xl font-serif font-bold text-artistic-text block tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.value}{stat.suffix}
                </span>
                <span className="text-xs text-artistic-accent font-mono tracking-widest uppercase block font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS TIMELINE SECTION */}
      <section className="py-24 bg-artistic-bg relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-artistic-accent/3 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-mono tracking-widest text-artistic-accent uppercase bg-artistic-accent/10 px-3.5 py-1.5 rounded-full rounded-tl-none rounded-br-none font-bold">
              SAFE ONBOARDING ROADMAP
            </span>
            <h2 className="text-3xl md:text-5.5xl font-serif font-bold text-artistic-text tracking-tight">
              Our Compassionate Process
            </h2>
            <p className="text-artistic-muted text-sm md:text-base leading-relaxed font-sans">
              We design home care to be comfortable, orderly, and zero stress. From your first initial assessment to matching the perfect supervisor, we walk with your family every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column - Steps selector */}
            <div className="lg:col-span-5 space-y-4 font-sans">
              <span className="text-xs font-mono text-artistic-muted uppercase tracking-widest block mb-1">
                SELECT STEP FOR MILESTONES:
              </span>
              
              {TIMELINE_STEPS.map((stepItem, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTimelineStep(index)}
                  className={`w-full text-left p-6 rounded-2xl rounded-tl-none rounded-br-none border transition-all duration-300 flex items-start gap-4 cursor-pointer hover:scale-[1.01] ${
                    activeTimelineStep === index
                      ? 'border-artistic-accent bg-artistic-card text-artistic-text shadow-md shadow-artistic-accent/5'
                      : 'border-artistic-border bg-artistic-bg text-artistic-muted hover:border-artistic-accent/30'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg rounded-tl-none rounded-br-none font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                    activeTimelineStep === index ? 'bg-artistic-accent text-white' : 'bg-artistic-card border border-artistic-border text-artistic-muted'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`font-serif font-bold text-base ${activeTimelineStep === index ? 'text-artistic-text font-bold' : 'text-artistic-text/80'}`}>
                      {stepItem.title}
                    </h3>
                    <p className="text-xs text-artistic-muted font-mono mt-0.5">{stepItem.sub}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column - Visual Detailed Card */}
            <div className="lg:col-span-7">
              <div className="bg-artistic-dark-card text-white rounded-3xl rounded-tl-none rounded-br-none p-8 md:p-10 border border-white/5 shadow-2xl relative h-full flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-artistic-accent/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-6 relative z-10">
                  {/* Dynamic Step Photo */}
                  <div className="relative h-44 w-full rounded-2xl rounded-tl-none rounded-br-none overflow-hidden shadow-inner select-none pointer-events-none mb-6 border border-white/5 bg-artistic-dark-bg">
                    <img
                      src={TIMELINE_STEPS[activeTimelineStep].imageUrl}
                      alt={TIMELINE_STEPS[activeTimelineStep].title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-artistic-dark-card/95 via-transparent to-transparent" />
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-white/95 bg-white/5 px-3 py-1 rounded-full rounded-tl-none rounded-br-none uppercase tracking-wider font-bold border border-white/10">
                      MILESTONES & PROCESS PLEDGES
                    </span>
                    <span className="text-xs font-mono text-white/40">
                      Step {activeTimelineStep + 1} of 4
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-white">
                      {TIMELINE_STEPS[activeTimelineStep].title}
                    </h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      {TIMELINE_STEPS[activeTimelineStep].description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 space-y-3 font-sans">
                    <span className="text-xs font-mono text-white/50 tracking-wider uppercase block">
                      CORE ACTIONS TAKEN DURING THIS STAGE:
                    </span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {TIMELINE_STEPS[activeTimelineStep].milestones.map((milestone, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2.5">
                          <div className="p-0.5 bg-artistic-accent/20 rounded rounded-tl-none rounded-br-none border border-artistic-accent/30 text-artistic-accent mt-0.5">
                            <Check className="w-3 h-3 text-artistic-accent" />
                          </div>
                          <span className="text-xs text-white/90 leading-normal font-medium">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 relative z-10">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <Clock className="w-4 h-4 text-white/40" />
                    <span>Average duration: Tailored around client preference</span>
                  </div>
                  
                  <button
                    onClick={onOpenModal}
                    className="w-full sm:w-auto px-6 py-3 bg-artistic-accent hover:bg-artistic-accent-hover text-white font-bold rounded-full rounded-tl-none rounded-br-none text-xs transition-colors cursor-pointer text-center shadow-lg hover:shadow-artistic-accent/15"
                  >
                    Initiate This Step Today
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-artistic-bg/25 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-[#B45309] uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full rounded-tl-none rounded-br-none font-bold">
              HEARTWARMING REVIEWS
            </span>
            <h2 className="text-3xl md:text-5.5xl font-serif font-bold text-slate-900 tracking-tight">
              Real Families. True Outcomes.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              Read how Ambiance Joy brings restorative care, absolute safety, and cheerful companionship back to homes in the Houston area.
            </p>
          </div>

          <VideoTestimonial />

        </div>
      </section>

      {/* COMMUNITY INVOLVEMENT SECTION */}
      <section className="py-24 bg-artistic-card border-t border-artistic-border relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-artistic-accent/2 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-mono tracking-widest text-artistic-accent uppercase bg-artistic-accent/10 px-3.5 py-1.5 rounded-full rounded-tl-none rounded-br-none font-bold">
              COMMUNITY STEWARDSHIP & WELLNESS
            </span>
            <h2 className="text-3xl md:text-5.5xl font-serif font-bold text-artistic-text tracking-tight animate-none">
              Compassion Beyond the Home
            </h2>
            <p className="text-artistic-muted text-sm leading-relaxed max-w-xl mx-auto">
              We focus on health and socialization in every context. Ambiance Joy coordinates public seminars, caregiver supports, and restorative groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMMUNITY_PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="bg-artistic-bg rounded-2xl rounded-tl-none rounded-br-none border border-artistic-border p-8 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-artistic-accent/25 transition-all duration-300 relative group"
              >
                <div className="space-y-4 font-sans">
                  <div className="w-12 h-12 bg-artistic-accent/10 rounded-xl rounded-tl-none rounded-br-none flex items-center justify-center text-artistic-accent border border-artistic-accent/15 group-hover:bg-artistic-accent group-hover:text-white transition-all duration-350">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-artistic-accent block font-bold">
                      {program.tagline}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-artistic-text mt-1 group-hover:text-artistic-accent transition-colors">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-artistic-muted text-xs leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {program.metrics && (
                  <div className="pt-6 mt-6 border-t border-artistic-border/50 flex items-center justify-between text-xs font-mono">
                    <span className="text-artistic-muted">IMPACT METRIC:</span>
                    <span className="text-artistic-text font-serif font-bold">{program.metrics}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL MOTIVATION BANNER ACTION */}
      <section className="py-24 bg-artistic-dark-bg text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-artistic-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-mono text-white/70 tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full rounded-tl-none rounded-br-none w-fit mx-auto block font-bold">
            RESTORE CHEER & HARMONY
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Give Your Loved One the <span className="text-artistic-accent italic font-normal">Ambiance & Joy</span> They Deserve
          </h2>
          <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light font-sans">
            Our assessment provides absolute peace of mind. Let’s sit down together to design a tailored security and assistance routine that aligns with your home configuration.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('finder')}
              className="px-8 py-4 bg-artistic-accent hover:bg-artistic-accent-hover text-white font-bold rounded-full rounded-tl-none rounded-br-none shadow-lg text-sm transition-all duration-300 transform hover:scale-102 cursor-pointer flex items-center gap-2"
            >
              <span>Use Free Care Finder Tool</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:8328147008"
              className="px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/25 text-white font-bold rounded-full rounded-tl-none rounded-br-none text-sm transition-colors cursor-pointer flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-artistic-accent" />
              <span>Call Triage Hotline</span>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
