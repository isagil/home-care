import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ClipboardList, ArrowRight, ArrowLeft, Phone, User, Calendar, ShieldCheck, HelpCircle } from 'lucide-react';
import { RECOMMENDATIONS } from '../data';
import { ConsultationRequest } from '../types';

export default function ServiceFinder() {
  const [step, setStep] = useState(1);
  const [recipient, setRecipient] = useState('');
  const [need, setNeed] = useState('');
  const [frequency, setFrequency] = useState('');
  
  // Form submission state
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleReset = () => {
    setStep(1);
    setRecipient('');
    setNeed('');
    setFrequency('');
    setContactName('');
    setPhone('');
    setEmail('');
    setParentName('');
    setCustomMessage('');
    setIsSubmitted(false);
  };

  // Logic to determine which recommendation fits best
  const getRecommendationKey = () => {
    if (need === 'medical' || need === 'recovery') return 'nursing';
    if (need === 'dementia') return 'dementia';
    if (need === 'daily' || need === 'mobility') return 'personal';
    return 'companionship';
  };

  const recKey = getRecommendationKey();
  const rec = RECOMMENDATIONS[recKey] || RECOMMENDATIONS.companionship;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!phone || !contactName) return;

    setSubmitLoading(true);
    setTimeout(() => {
      const code = 'AJ-' + Math.floor(100000 + Math.random() * 900000);
      setRefCode(code);
      setSubmitLoading(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div id="service-finder-section" className="bg-artistic-card text-artistic-text rounded-3xl rounded-tl-none rounded-br-none p-8 md:p-12 shadow-xl relative overflow-hidden max-w-4xl mx-auto border border-artistic-border">
      {/* Decorative Elegant Soft Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-artistic-accent/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-br from-artistic-accent/5 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-artistic-border pb-6 mb-8 gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-artistic-accent uppercase bg-artistic-accent/10 px-3 py-1 rounded-full rounded-tl-none rounded-br-none font-bold">
              INTERACTIVE CONCIERGE
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-artistic-text mt-2">
              What Type of Care Do You Need?
            </h3>
            <p className="text-artistic-muted text-sm mt-1">
              Answer 3 brief questions to receive our expert clinical recommendations instantly.
            </p>
          </div>
          <div className="flex items-center gap-1.5 self-end md:self-center font-mono text-xs text-artistic-accent bg-artistic-bg px-4 py-2 border border-artistic-border rounded-full rounded-tl-none rounded-br-none select-none font-bold">
            <ClipboardList className="w-4 h-4" />
            <span>Step {step === 4 ? 'Analysis' : `${step} of 3`}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-serif font-semibold text-artistic-text">
                1. Who is the care for?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'parent', label: 'My Parent or Grandparent', desc: 'Supporting home safety with respectful care' },
                  { id: 'spouse', label: 'My Spouse or Partner', desc: 'Sharing the daily load with absolute respect' },
                  { id: 'myself', label: 'Myself', desc: 'Ensuring personal comfort and daily assistance' },
                  { id: 'someone_else', label: 'Another relative or neighbor', desc: 'Guiding specialized clinical recovery' }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setRecipient(option.id);
                      handleNextStep();
                    }}
                    className={`text-left p-5 rounded-2xl rounded-tl-none rounded-br-none border transition-all duration-300 group hover:scale-[1.01] ${
                      recipient === option.id
                        ? 'border-artistic-accent bg-artistic-accent/10 text-artistic-text shadow-[0_0_15px_rgba(139,38,53,0.15)] font-medium'
                        : 'border-artistic-border bg-artistic-bg text-artistic-text/90 hover:border-artistic-accent/30 hover:bg-artistic-card-hover/45'
                    }`}
                  >
                    <div className="font-serif font-bold text-base mb-1 flex justify-between items-center">
                      <span className="group-hover:text-artistic-accent transition-colors">{option.label}</span>
                      <span className={`w-4 h-4 rounded-full rounded-tl-none rounded-br-none border flex items-center justify-center ${
                        recipient === option.id ? 'border-artistic-accent bg-artistic-accent' : 'border-artistic-border'
                      }`}>
                        {recipient === option.id && <Check className="w-3 h-3 text-artistic-bg" />}
                      </span>
                    </div>
                    <span className="text-xs text-artistic-muted block leading-relaxed">{option.desc}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-serif font-semibold text-artistic-text">
                2. What are the key care requirements?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'medical', label: 'Skilled Nursing & Diagnostics', desc: 'Injections, vitals, and professional clinical monitoring' },
                  { id: 'daily', label: 'Daily Hygiene & Bathing', desc: 'Assistance with bathing, clothing, and routines' },
                  { id: 'dementia', label: 'Memory & Dementia Companionship', desc: 'Gentle stimulation, routine easing, and safe habits' },
                  { id: 'companionship', label: 'Companionship & Activities', desc: 'Active conversation, card games, and outdoor walks' },
                  { id: 'recovery', label: 'Post-Surgery/Hospital Healing', desc: 'Medication tracking and focused physical recovery guidance' },
                  { id: 'mobility', label: 'Transferring & Fall Prevention', desc: 'Active mobility support, transfer safety, and exercises' }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setNeed(option.id);
                      handleNextStep();
                    }}
                    className={`text-left p-5 rounded-2xl rounded-tl-none rounded-br-none border transition-all duration-300 group hover:scale-[1.01] ${
                      need === option.id
                        ? 'border-artistic-accent bg-artistic-accent/10 text-artistic-text shadow-[0_0_15px_rgba(139,38,53,0.15)] font-medium'
                        : 'border-artistic-border bg-artistic-bg text-artistic-text/90 hover:border-artistic-accent/30 hover:bg-artistic-card-hover/45'
                    }`}
                  >
                    <div className="font-serif font-bold text-base mb-1 flex justify-between items-center">
                      <span className="group-hover:text-artistic-accent transition-colors">{option.label}</span>
                      <span className={`w-4 h-4 rounded-full rounded-tl-none rounded-br-none border flex items-center justify-center ${
                        need === option.id ? 'border-artistic-accent bg-artistic-accent' : 'border-artistic-border'
                      }`}>
                        {need === option.id && <Check className="w-3 h-3 text-artistic-bg" />}
                      </span>
                    </div>
                    <span className="text-xs text-artistic-muted block leading-relaxed">{option.desc}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-6 py-2.5 rounded-full rounded-tl-none rounded-br-none border border-artistic-border text-artistic-text flex items-center gap-2 hover:bg-artistic-card hover:border-artistic-accent hover:text-artistic-accent transition-all text-sm font-semibold cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-serif font-semibold text-artistic-text">
                3. What is the preferred care frequency?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'hourly', label: 'A Few Hours Per Week', desc: 'Light companion visits and safety check-ins' },
                  { id: 'part_time', label: 'Daily Part-Time Support', desc: 'Daytime assistance with meals and personal care' },
                  { id: 'full_time', label: '24/7 Round-the-clock Live-In', desc: 'Continuous professional live-in support and coordination' },
                  { id: 'overnight', label: 'Overnight Care Only', desc: 'Support with safe night transfers and overnight observation' }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setFrequency(option.id);
                      handleNextStep();
                    }}
                    className={`text-left p-5 rounded-2xl rounded-tl-none rounded-br-none border transition-all duration-300 group hover:scale-[1.01] ${
                      frequency === option.id
                        ? 'border-artistic-accent bg-artistic-accent/10 text-artistic-text shadow-[0_0_15px_rgba(139,38,53,0.15)] font-medium'
                        : 'border-artistic-border bg-artistic-bg text-artistic-text/90 hover:border-artistic-accent/30 hover:bg-artistic-card-hover/45'
                    }`}
                  >
                    <div className="font-serif font-bold text-base mb-1 flex justify-between items-center">
                      <span className="group-hover:text-artistic-accent transition-colors">{option.label}</span>
                      <span className={`w-4 h-4 rounded-full rounded-tl-none rounded-br-none border flex items-center justify-center ${
                        frequency === option.id ? 'border-artistic-accent bg-artistic-accent' : 'border-artistic-border'
                      }`}>
                        {frequency === option.id && <Check className="w-3 h-3 text-artistic-bg" />}
                      </span>
                    </div>
                    <span className="text-xs text-artistic-muted block leading-relaxed">{option.desc}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-6 py-2.5 rounded-full rounded-tl-none rounded-br-none border border-artistic-border text-artistic-text flex items-center gap-2 hover:bg-artistic-card hover:border-artistic-accent hover:text-artistic-accent transition-all text-sm font-semibold cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Recommendation Presentation Card */}
              <div className="bg-artistic-bg rounded-2xl rounded-tl-none rounded-br-none border border-artistic-border p-6 md:p-8 shadow-inner relative">
                <div className="absolute top-4 right-4 bg-artistic-accent/10 text-artistic-accent font-mono text-[10px] tracking-widest px-3 py-1 rounded-full rounded-tl-none rounded-br-none border border-artistic-accent/25 font-bold">
                  CLINICAL ANALYSIS MATCH COMPLETE
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="p-3 bg-artistic-accent/10 rounded-xl rounded-tl-none rounded-br-none border border-artistic-accent/15 text-artistic-accent self-start">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-artistic-muted font-bold">RECOMMENDED PROGRAM</span>
                    <h5 className="text-xl md:text-2xl font-serif font-bold text-artistic-accent mt-0.5">{rec.title}</h5>
                    <p className="text-artistic-text mt-1 text-sm md:text-base font-semibold">{rec.sub}</p>
                  </div>
                </div>

                <div className="space-y-4 font-sans text-sm border-t border-artistic-border pt-6">
                  <p className="text-artistic-muted leading-relaxed text-sm">
                    {rec.description}
                  </p>

                  <div className="mt-4">
                    <span className="text-xs font-mono text-artistic-accent uppercase tracking-widest block mb-3 font-bold">KEY SERVICES INCLUDED:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {rec.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-artistic-text">
                          <span className="text-artistic-accent font-bold mt-0.5 select-none">✓</span>
                          <span className="text-xs leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-artistic-border bg-artistic-card-hover -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-6 rounded-b-2xl rounded-b-tr-none rounded-bl-none">
                    <div>
                      <span className="text-[10px] font-mono text-artistic-muted uppercase tracking-widest block font-bold">BEST FIT FOR:</span>
                      <p className="text-xs text-artistic-text mt-1 font-semibold">{rec.bestFor}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-artistic-muted uppercase tracking-widest block font-bold">ESTIMATED CAREGIVER PAIRING:</span>
                      <p className="text-xs text-artistic-accent mt-1 font-bold font-serif">{rec.caregiverRecommendation}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Booking Form - Simple and clean */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 bg-artistic-bg p-6 md:p-8 rounded-2xl rounded-tl-none rounded-br-none border border-artistic-border">
                  <div className="border-b border-artistic-border pb-3">
                    <h5 className="text-lg font-serif text-artistic-text font-bold">
                      Request Your Immediate Free Consultation
                    </h5>
                    <p className="text-xs text-artistic-muted mt-1">
                      Our Director of Care will call you within 2 hours to confirm details and coordinate next steps.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label id="lbl-parent-name" className="text-xs font-mono text-artistic-muted block font-bold">LOVED ONE'S NAME (OPTIONAL)</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-artistic-muted" />
                        <input
                          aria-labelledby="lbl-parent-name"
                          type="text"
                          placeholder="e.g. Richard Peterson"
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          className="w-full bg-artistic-card border border-artistic-border hover:border-artistic-accent/30 focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none py-2.5 pl-10 pr-4 text-sm text-artistic-text focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label id="lbl-contact-name" className="text-xs font-mono text-artistic-muted block font-bold">YOUR NAME (REQUIRED)</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-artistic-muted" />
                        <input
                          aria-labelledby="lbl-contact-name"
                          required
                          type="text"
                          placeholder="e.g. Sarah Peterson"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full bg-artistic-card border border-artistic-border hover:border-artistic-accent/30 focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none py-2.5 pl-10 pr-4 text-sm text-artistic-text focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label id="lbl-phone" className="text-xs font-mono text-artistic-muted block font-bold">CONTACT PHONE (REQUIRED)</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-artistic-muted" />
                        <input
                          aria-labelledby="lbl-phone"
                          required
                          type="tel"
                          placeholder="e.g. (832) 555-0199"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-artistic-card border border-artistic-border hover:border-artistic-accent/30 focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none py-2.5 pl-10 pr-4 text-sm text-artistic-text focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label id="lbl-email" className="text-xs font-mono text-artistic-muted block font-bold">EMAIL ADDRESS (OPTIONAL)</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-artistic-muted" />
                        <input
                          aria-labelledby="lbl-email"
                          type="email"
                          placeholder="yourname@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-artistic-card border border-artistic-border hover:border-artistic-accent/30 focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none py-2.5 pl-10 pr-4 text-sm text-artistic-text focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label id="lbl-message" className="text-xs font-mono text-artistic-muted block font-bold">SPECIAL NOTES OR HEALTH DIAGNOSIS (OPTIONAL)</label>
                    <textarea
                      aria-labelledby="lbl-message"
                      rows={2}
                      placeholder="e.g. Has recently struggled with morning transfers from bed, or need post-stroke physical recovery."
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      className="w-full bg-artistic-card border border-artistic-border hover:border-artistic-accent/30 focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none p-3 text-sm text-artistic-text focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-artistic-muted hover:text-artistic-accent font-mono py-2 bg-transparent border-0 underline transition-colors cursor-pointer"
                    >
                      Restart Assessment
                    </button>
                    <button
                      type="submit"
                      disabled={submitLoading}
                      className="w-full sm:w-auto px-8 py-3.5 bg-artistic-accent hover:bg-artistic-accent-hover text-artistic-bg font-bold rounded-full rounded-tl-none rounded-br-none transition-all duration-300 shadow-md disabled:opacity-50 text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-artistic-bg border-t-transparent rounded-full animate-spin" />
                          Processing Matching Care Plan...
                        </>
                      ) : (
                        <>
                          Request Free Clinical Review
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-artistic-accent/10 border border-artistic-accent/25 p-8 rounded-2xl rounded-tl-none rounded-br-none text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-artistic-accent text-artistic-bg rounded-full rounded-tl-none rounded-br-none flex items-center justify-center mx-auto text-2xl font-serif font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="text-xs font-mono text-artistic-accent uppercase tracking-widest block font-bold">CONSULTATION CONFIRMED</span>
                    <h5 className="text-2xl font-serif font-bold text-artistic-text mt-1">Thank you, {contactName}!</h5>
                    <p className="text-artistic-muted text-sm max-w-lg mx-auto mt-2 leading-relaxed">
                      We have matched your customized assessment with our lead clinician. A care coordinator will call you shortly at <span className="text-artistic-accent font-semibold">{phone}</span> to discuss your personalized care schedule.
                    </p>
                  </div>

                  <div className="bg-artistic-bg p-4 rounded-xl rounded-tl-none rounded-br-none max-w-sm mx-auto border border-artistic-border font-mono text-xs">
                    <span className="text-artistic-muted uppercase font-bold text-[10px]">CARE INITIATION CODE:</span>
                    <div className="text-lg font-bold text-artistic-accent tracking-wider mt-1">{refCode}</div>
                    <div className="text-[10px] text-artistic-muted mt-2 font-semibold">Available 24/7 for support: Call (832) 814-7008</div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 px-6 py-2 border border-artistic-border hover:border-artistic-accent hover:bg-artistic-card rounded-full rounded-tl-none rounded-br-none text-artistic-text transition-colors text-xs font-semibold cursor-pointer"
                  >
                    Start New Assessment
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
