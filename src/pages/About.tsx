import { motion } from 'motion/react';
import {
  Phone,
  Shield,
  Award,
  Sparkles,
  Check,
  Star,
  Users,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { EXCELLENT_CAREGIVERS } from '../data';

interface AboutProps {
  key?: string;
  onOpenModal: () => void;
}

export default function About({ onOpenModal }: AboutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-0"
    >
      {/* Editorial Header */}
      <section className="bg-artistic-card border-b border-artistic-border py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-artistic-accent/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-mono tracking-widest text-artistic-accent uppercase bg-artistic-accent/10 px-3.5 py-1.5 rounded-full rounded-tl-none rounded-br-none font-bold">
            ESTABLISHED ON TRUST & QUALITY
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-artistic-text tracking-tight leading-tight">
            About Us
          </h1>
          <p className="text-artistic-muted text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Delivering high-quality skill-care, custom schedules, and deep restorative laughter directly inside local family residences.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-artistic-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono tracking-widest text-artistic-accent uppercase bg-artistic-accent/10 px-3 py-1 rounded-full rounded-tl-none rounded-br-none font-bold w-fit block">
                WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-artistic-text tracking-tight leading-tight">
                Our Story: Why We Serve
              </h2>
              <div className="space-y-4 text-artistic-text text-sm md:text-base leading-relaxed font-light">
                <p>
                  Ambiance Joy Nursing Services is a premium care provider committed to delivering customized medical, personal, and companionship assistance. We recognize that every individual’s physical configuration and family timeline are entirely unique.
                </p>
                <p>
                  Founded by healthcare coordinators who experienced first-hand the challenges of organizing senior care, we built Ambiance Joy around a central clinical idea: <strong>home health is happiest when directed by registered clinicians but driven by deep companion chemistry.</strong>
                </p>
                <p>
                  We are not just a registry. We are an aligned service family that audits medications, prevents hazardous falls, coordinates with physician teams, and ensures seniors enjoy daily comfort, security, and independent lifestyles.
                </p>
              </div>

              <div className="pt-6 border-t border-artistic-border grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-artistic-muted font-semibold">
                <div className="flex items-center gap-2">
                  <span className="text-artistic-accent font-bold">●</span>
                  <span>Licensed Clinical RN Oversight</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-artistic-accent font-bold">●</span>
                  <span>100% FBI Background Checks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-artistic-accent font-bold">●</span>
                  <span>Continuous Stroke Response Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-artistic-accent font-bold">●</span>
                  <span>Daily Accountability Session Reports</span>
                </div>
              </div>
            </div>

            {/* Right Brand Quote Card */}
            <div className="lg:col-span-1" />
            <div className="lg:col-span-4 bg-artistic-card border border-artistic-border rounded-3xl rounded-tl-none rounded-br-none p-8 md:p-10 shadow-lg relative overflow-hidden self-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-artistic-accent/5 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-artistic-accent bg-artistic-accent/10 px-2.5 py-1 rounded-full rounded-tl-none rounded-br-none font-bold w-fit block">
                  SERVICE STATEMENT
                </span>
                <p className="text-artistic-accent font-serif font-bold text-2xl italic leading-snug">
                  “Providing Care with Compassion, Comfort, and Joy.”
                </p>
                <p className="text-artistic-muted text-xs leading-relaxed font-sans">
                  "Because every single person deserves to feel entirely at home, safe, respected, and valued."
                </p>
                <div className="pt-4">
                  <button
                    onClick={onOpenModal}
                    className="px-6 py-3 bg-artistic-accent hover:bg-artistic-accent-hover text-white rounded-full rounded-tl-none rounded-br-none text-xs font-bold transition-all shadow-md hover:shadow-artistic-accent/15 cursor-pointer"
                  >
                    Connect With Us Today
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision, Mission, and Values section */}
      <section className="py-24 bg-artistic-card border-y border-artistic-border relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-artistic-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono tracking-widest text-artistic-accent uppercase bg-artistic-accent/10 px-3.5 py-1.5 rounded-full rounded-tl-none rounded-br-none font-bold">
              FOUNDATION OF CARE
            </span>
            <h2 className="text-3xl md:text-4.5xl font-serif font-bold text-artistic-text tracking-tight">
              Our Vision & Beliefs
            </h2>
            <p className="text-artistic-muted text-sm font-sans">
              Our culture is governed by extreme alignment with patient well-being, strict medical compliance, and absolute dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch font-sans text-xs">
            {/* Mission Card */}
            <div className="bg-artistic-bg border border-artistic-border rounded-2xl rounded-tl-none rounded-br-none p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-artistic-accent" />
              <div className="space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-artistic-accent font-bold">OUR PURPOSE</span>
                <h3 className="text-xl font-serif font-bold text-artistic-text">Our Mission</h3>
                <p className="text-artistic-text leading-relaxed font-light text-xs leading-[1.6]">
                  To provide exceptional nursing and residential care that promotes health, dignity, comfort, and joy for every individual we serve.
                </p>
              </div>
              <div className="pt-4 border-t border-artistic-border/40 mt-6 text-[10px] text-artistic-muted font-mono flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-artistic-accent" />
                <span>Standardized Care Directive</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-artistic-bg border border-artistic-border rounded-2xl rounded-tl-none rounded-br-none p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-artistic-muted" />
              <div className="space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#B45309] font-bold">OUR TARGET</span>
                <h3 className="text-xl font-serif font-bold text-artistic-text">Our Vision</h3>
                <p className="text-artistic-text leading-relaxed font-light text-xs leading-[1.6]">
                  To be a leading provider of compassionate care services, recognized for excellence, trust, and positive impact on the lives of residents and their families.
                </p>
              </div>
              <div className="pt-4 border-t border-artistic-border/40 mt-6 text-[10px] text-artistic-muted font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-artistic-accent" />
                <span>Industry Leading Standard</span>
              </div>
            </div>

            {/* Core Values Card */}
            <div className="bg-artistic-bg border border-artistic-border rounded-2xl rounded-tl-none rounded-br-none p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-artistic-accent" />
              <div className="space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-artistic-accent font-bold">GUIDING PRINCIPLES</span>
                <h3 className="text-xl font-serif font-bold text-artistic-text">Our Core Values</h3>
                
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  {[
                    'Compassion',
                    'Respect',
                    'Integrity',
                    'Excellence',
                    'Professionalism',
                    'Accountability',
                    'Dignity'
                  ].map((val, vIdx) => (
                    <div key={vIdx} className="flex items-center gap-1.5 font-bold font-mono text-artistic-text">
                      <span className="text-artistic-accent">•</span>
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-artistic-border/40 mt-6 text-[10px] text-artistic-muted font-mono flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-artistic-accent" />
                <span>Ethical Nursing Guidelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET OUR CAREGIVERS SECTION */}
      <section className="py-24 bg-artistic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 animate-none">
            <span className="text-xs font-mono tracking-widest text-artistic-accent uppercase bg-artistic-accent/10 px-3.5 py-1.5 rounded-full rounded-tl-none rounded-br-none font-bold">
              OUR CLINICAL STANDARDS IN PRACTICE
            </span>
            <h2 className="text-3xl md:text-4.5xl font-serif font-bold text-artistic-text tracking-tight">
              Meet Our Care Professionals
            </h2>
            <p className="text-artistic-muted text-sm leading-relaxed font-sans max-w-xl mx-auto">
              Our caregiver selection process is exceptionally rigorous. We focus heavily on clinical proficiency, clear empathy markers, continuous drug screening, and complete bonding.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {EXCELLENT_CAREGIVERS.map((cg) => (
              <div
                key={cg.id}
                className="bg-artistic-card rounded-3xl rounded-tl-none rounded-br-none overflow-hidden border border-artistic-border shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col sm:flex-row gap-8 items-start relative group"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-artistic-accent/3 rounded-bl-full group-hover:bg-artistic-accent/8 transition-colors pointer-events-none" />

                {/* Profile Picture Frame */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl rounded-tl-none rounded-br-none overflow-hidden border border-artistic-border shrink-0 relative bg-artistic-bg shadow-sm">
                  <img
                    src={cg.photoUrl}
                    alt={cg.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  />
                  <div className="absolute bottom-2 left-2 bg-artistic-accent text-white px-2 py-0.5 text-[8px] font-mono rounded tracking-widest uppercase font-bold border border-white/10 shadow">
                    🏆 CERTIFIED
                  </div>
                </div>

                {/* Bio Data Card */}
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-artistic-text tracking-tight">{cg.name}</h3>
                    <p className="text-xs text-artistic-accent font-mono tracking-widest font-bold uppercase mt-0.5">{cg.title}</p>
                    <div className="flex gap-0.5 text-amber-500 text-xs mt-1">
                      {Array.from({ length: cg.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-artistic-text text-xs italic leading-relaxed bg-artistic-bg p-4 rounded-xl rounded-tl-none rounded-br-none border border-artistic-border/80 font-serif font-semibold">
                    {cg.introduction}
                  </p>

                  <div className="space-y-3 text-xs text-artistic-text font-sans">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-artistic-muted block mb-1 font-bold flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5" />
                        Credentials & Qualifications:
                      </span>
                      <ul className="space-y-1 pl-0.5">
                        {cg.qualifications.map((q, idx) => (
                           <li key={idx} className="flex items-start gap-1.5 text-artistic-text/90 text-xs">
                            <span className="text-artistic-accent font-bold">✓</span>
                            <span>{q}</span>
                           </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-artistic-muted block mb-1 font-bold flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        Clinical Focus Specialties:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {cg.specialties.map((spec, idx) => (
                          <span key={idx} className="text-[10px] bg-artistic-bg px-2.5 py-0.5 rounded-full rounded-tl-none rounded-br-none font-bold text-artistic-text border border-artistic-border">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <p className="text-center text-xs text-artistic-muted mt-16 italic max-w-xl mx-auto leading-relaxed border-t border-artistic-border pt-8 font-serif font-semibold">
            "Every lead provider in our group participates in monthly stroke emergency drills, memory therapy exercises, and dynamic home risk check-ins."
          </p>

        </div>
      </section>
    </motion.div>
  );
}
