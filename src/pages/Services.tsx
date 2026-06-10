import { motion } from 'motion/react';
import {
  Heart,
  Stethoscope,
  Smile,
  Users,
  Clock,
  Shield,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  BookmarkCheck
} from 'lucide-react';

interface ServicesProps {
  key?: string;
  onOpenModal: () => void;
  onNavigate: (page: string) => void;
}

export default function Services({ onOpenModal, onNavigate }: ServicesProps) {
  const SERVICES_LIST = [
    {
      title: 'Residential Assistance Homecare',
      desc: 'We facilitate a comforting and warm residential feeling where clients receive assistance with daily chore lists, personal grooming, and nutritious meal preparation while staying safe at home.',
      bullets: [
        'Meal planning & balanced nutrition support',
        'Light housekeeping & linen care',
        'Local coordinates (grocery, appointments)',
        'Daily scheduling & routine coordination'
      ],
      icon: Heart,
      quote: '“Staying at home means staying happy. We align chores so they can focus on resting.”'
    },
    {
      title: 'Skilled Private Duty Nursing',
      desc: 'Our registered nursing group offers expert clinical support under MD directives, from advanced blood monitoring to complex post-operative therapy management.',
      bullets: [
        'Vitals tracking & biometric reporting',
        'Specialized medication administration',
        'Wound dressing & surgical healing coordination',
        'Direct communication with primary physicians'
      ],
      icon: Stethoscope,
      quote: '“Our RNs maintain strict clinical discipline so emergencies never catch families off guard.”'
    },
    {
      title: 'Compassionate Elderly Support',
      desc: 'We provide specialized senior support designed to maintain individual autonomy, safety, physical mobility, and beautiful mental engagement.',
      bullets: [
        'Falls prevention hazard check audits',
        'Passive range of motion exercises',
        'Gentle coordination of daily stretching',
        'Warm and respectful companion conversations'
      ],
      icon: Smile,
      quote: '“Growing older is a victory. We help seniors enjoy their days with high independence.”'
    },
    {
      title: 'Personal Care Assistance',
      desc: 'Dignified hygiene care managed with complete privacy and safety. Our professional aides support transfers, showering, and grooming with grace.',
      bullets: [
        'Safe tub/shower transfers & bathing help',
        'Attentive hair, oral, and skin grooming',
        'Dignified dressing and styling assistance',
        'Incontinence care & transfer schedules'
      ],
      icon: Users,
      quote: '“We handle personal hygiene issues with absolute modesty, respect, and zero awkwardness.”'
    },
    {
      title: 'Flexible Respite Care Caregivers',
      desc: 'Take a necessary breath. We provide temporary, hourly, or weekend caregiving shifts so family members can attend work or rest securely.',
      bullets: [
        'Flexible 4-hour to overnight coverage options',
        'Detailed hand-off protocol checklists',
        'Full communication of medicine regimes',
        'Guaranteed professional backup coordination'
      ],
      icon: Clock,
      quote: '“Caring is extremely demanding. We stand in so family caregivers can rest, recover, and return strong.”'
    },
    {
      title: 'Dementia & Specialized Memory Care',
      desc: 'Expert memory-loss care designed around cognitive stability and safety, relieving sundowning anxiety and tracking wandering risks with constant guidance.',
      bullets: [
        'Calm sensory routine tracking methods',
        'Memory recall games, puzzles, and storybooks',
        'Prevention of exit-wandering through safety rules',
        'Sundowning relief & calming music queues'
      ],
      icon: Shield,
      quote: '“We enter their reality with warmth, eliminating confusion through gentle consistency.”'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-0"
    >
      {/* Header Banner */}
      <section className="bg-artistic-card border-b border-artistic-border py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-artistic-accent/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-mono tracking-widest text-artistic-accent uppercase bg-artistic-accent/10 px-3.5 py-1.5 rounded-full rounded-tl-none rounded-br-none font-bold">
            TAILORED CLINICAL CARE OPTIONS
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-artistic-text tracking-tight leading-tight">
            Our Services
          </h1>
          <p className="text-artistic-muted text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Explore our specialized clinical, assistant, and companion programs tailored to deliver safety, compliance, and joy back to daily home life.
          </p>
        </div>
      </section>

      {/* Services Detailed Cards Content */}
      <section className="py-24 bg-artistic-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-artistic-card border border-artistic-border hover:border-artistic-accent/35 rounded-3xl rounded-tl-none rounded-br-none p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 relative group"
                >
                  <div className="space-y-6">
                    {/* Header icon row */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-artistic-accent/10 rounded-xl rounded-tl-none rounded-br-none flex items-center justify-center text-artistic-accent border border-artistic-accent/15 group-hover:bg-artistic-accent group-hover:text-white transition-all duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-artistic-muted font-bold block">
                        Compliant Care
                      </span>
                    </div>

                    {/* Text block */}
                    <div className="space-y-3 font-sans">
                      <h3 className="text-xl font-serif font-bold text-artistic-text group-hover:text-artistic-accent transition-colors duration-300">
                        {srv.title}
                      </h3>
                      <p className="text-artistic-muted text-xs leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>

                    {/* Check items */}
                    <div className="space-y-2 pt-4 border-t border-artistic-border/50 text-xs font-sans">
                      <span className="text-[9px] font-mono tracking-wider text-artistic-accent uppercase block font-bold">Core Support Features:</span>
                      <ul className="space-y-1.5 pl-0.5">
                        {srv.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-artistic-text">
                            <CheckCircle2 className="w-3.5 h-3.5 text-artistic-accent shrink-0 mt-0.5" />
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom quote & CTA triggers */}
                  <div className="pt-6 mt-8 border-t border-artistic-border/50 space-y-4">
                    <blockquote className="italic text-[11px] text-[#B45309] leading-relaxed border-l-2 border-[#DFD7C8] pl-3 py-0.5 font-serif">
                      {srv.quote}
                    </blockquote>
                    
                    <button
                      onClick={onOpenModal}
                      className="w-full py-3 bg-artistic-bg hover:bg-artistic-accent text-artistic-text hover:text-white border border-artistic-border/80 hover:border-artistic-accent text-xs font-bold rounded-xl rounded-tl-none rounded-br-none transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <span>Inquire About Program</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Help banner */}
          <div className="mt-16 bg-artistic-dark-bg text-white rounded-3xl rounded-tl-none rounded-br-none p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-artistic-accent/5 rounded-full blur-3xl" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full rounded-tl-none rounded-br-none text-white/90">
                  <Sparkles className="w-3.5 h-3.5 text-artistic-accent fill-current" />
                  <span className="text-[10px] uppercase font-mono tracking-widest font-bold">
                    DECISION ASSISTANCE PANEL
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                  Unsure which clinical program fits your health situation?
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xl font-light font-sans">
                  We built our custom, direct Care Finder system so families can input basic care, need frequency, and mobile restrictions to instantly calculate appropriate caregiver pairings.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  onClick={() => onNavigate('finder')}
                  className="w-full text-center py-4 px-6 bg-artistic-accent hover:bg-artistic-accent-hover text-white font-bold rounded-full rounded-tl-none rounded-br-none transition-all shadow-md text-xs cursor-pointer"
                >
                  Use Interactive Care Finder
                </button>
                <button
                  onClick={onOpenModal}
                  className="w-full text-center py-4 px-6 bg-white/10 hover:bg-white/15 text-white font-bold rounded-full rounded-tl-none rounded-br-none border border-white/20 transition-all text-xs cursor-pointer"
                >
                  Request Call From RN Director
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
