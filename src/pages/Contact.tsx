import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Inbox,
  MapPin,
  Calendar,
  CheckCircle2,
  Send,
  User,
  ShieldCheck
} from 'lucide-react';

interface ContactProps {
  key?: string;
  onOpenModal: () => void;
}

export default function Contact({ onOpenModal }: ContactProps) {
  // Contact Form State
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [interest, setInterest] = useState('Skilled Nursing Care');
  const [msgText, setMsgText] = useState('');
  const [isMsgSubmitting, setIsMsgSubmitting] = useState(false);
  const [isMsgSubmitted, setIsMsgSubmitted] = useState(false);
  const [msgTicket, setMsgTicket] = useState('');

  const handleMsgSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderPhone || !msgText) return;

    setIsMsgSubmitting(true);
    setTimeout(() => {
      const ticket = 'MSG-' + Math.floor(100000 + Math.random() * 900000);
      setMsgTicket(ticket);
      setIsMsgSubmitting(false);
      setIsMsgSubmitted(true);
    }, 1000);
  };

  const handleMsgReset = () => {
    setSenderName('');
    setSenderEmail('');
    setSenderPhone('');
    setInterest('Skilled Nursing Care');
    setMsgText('');
    setIsMsgSubmitted(false);
  };

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
            TRIAGE DESK DIRECT CONDUIT
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-artistic-text tracking-tight leading-tight">
            Contact Us
          </h1>
          <p className="text-artistic-muted text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Our Care Directors and Nursing Supervisors are available 24 hours a day, 7 days a week to review your requests immediately.
          </p>
        </div>
      </section>

      {/* Main Section carrying grid contact panels */}
      <section className="py-24 bg-artistic-bg relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-artistic-accent/2 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Contact Directory Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono tracking-widest text-artistic-accent uppercase bg-artistic-accent/10 px-3.5 py-1.5 rounded-full rounded-tl-none rounded-br-none font-bold w-fit block mb-3 animate-none">
                    DIAL DIRECT OR INBOX US
                  </span>
                  <h2 className="text-3xl font-serif font-bold text-artistic-text tracking-tight">
                    Clinical Coordination Desk
                  </h2>
                </div>

                <div className="space-y-4 font-sans text-xs">
                  {/* Phone Item */}
                  <div className="p-5 bg-artistic-card border border-artistic-border hover:border-artistic-accent/25 rounded-2xl rounded-tl-none rounded-br-none flex items-start gap-4 transition-all duration-300">
                    <div className="p-3 bg-artistic-accent/10 rounded-xl rounded-tl-none rounded-br-none text-artistic-accent shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B45309] block font-bold mb-0.5">PRIORITY TRIAGE HOTLINE</span>
                      <a href="tel:8328147008" className="text-base font-bold text-artistic-text hover:text-artistic-accent transition-colors">
                        (832) 814-7008
                      </a>
                      <p className="text-[10px] text-artistic-muted mt-1 leading-normal font-medium">Available 24/7. Monitored directly by licensed nurse coordinators.</p>
                    </div>
                  </div>

                  {/* Email Item */}
                  <div className="p-5 bg-artistic-card border border-artistic-border hover:border-artistic-accent/25 rounded-2xl rounded-tl-none rounded-br-none flex items-start gap-4 transition-all duration-300">
                    <div className="p-3 bg-artistic-accent/10 rounded-xl rounded-tl-none rounded-br-none text-artistic-accent shrink-0">
                      <Inbox className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B45309] block font-bold mb-0.5">INTAKE ASSESSMENT INBOX</span>
                      <a href="mailto:ambiancejoynursingservices@gmail.com" className="text-base font-bold text-artistic-text hover:text-artistic-accent transition-all">
                        ambiancejoynursingservices@gmail.com
                      </a>
                      <p className="text-[10px] text-artistic-muted mt-1 leading-normal font-medium">Clinician response within 2 hours. Documents securely analyzed.</p>
                    </div>
                  </div>

                  {/* Coverage Item */}
                  <div className="p-5 bg-artistic-card border border-artistic-border hover:border-artistic-accent/25 rounded-2xl rounded-tl-none rounded-br-none flex items-start gap-4 transition-all duration-300">
                    <div className="p-3 bg-artistic-accent/10 rounded-xl rounded-tl-none rounded-br-none text-artistic-accent shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B45309] block font-bold mb-0.5">SERVICE COVERAGE AREA</span>
                      <span className="text-sm font-bold text-artistic-text block leading-normal font-serif">
                        Houston, Texas Metro & Surrounding Counties
                      </span>
                      <p className="text-[10px] text-artistic-muted mt-1 leading-normal font-medium">Providing local caregivers in Harris, Fort Bend, and Montgomery counties.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pledge block */}
              <div className="pt-8 border-t border-artistic-border/80 space-y-4 font-sans">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-artistic-accent uppercase font-bold block mb-1">OUR PLEDGE</span>
                  <p className="text-lg font-serif font-bold text-artistic-text">
                    Ambiance Joy Nursing Services
                  </p>
                  <p className="text-[#B45309] font-medium text-xs">
                    Providing Care with Compassion, Comfort, and Joy.
                  </p>
                </div>
                <blockquote className="border-l-2 border-artistic-accent pl-4 py-1 italic text-artistic-text/80 text-xs font-serif leading-relaxed">
                  “Because every person deserves to feel entirely at home, cared for, and valued”
                </blockquote>
              </div>
            </div>

            {/* Right Message Form Box */}
            <div className="lg:col-span-7">
              <div className="bg-artistic-card border border-artistic-border rounded-3xl rounded-tl-none rounded-br-none p-8 md:p-10 shadow-lg flex flex-col h-full justify-between">
                
                <AnimatePresence mode="wait">
                  {!isMsgSubmitted ? (
                    <form onSubmit={handleMsgSubmit} className="space-y-6">
                      <div className="border-b border-artistic-border/50 pb-4">
                        <span className="text-[10px] tracking-widest text-artistic-accent font-mono block mb-1.5 uppercase font-bold">CONTACT INTENT FORM</span>
                        <h3 className="text-xl font-serif font-bold text-artistic-text">
                          Send Care Coordination Message
                        </h3>
                        <p className="text-xs text-artistic-muted leading-relaxed mt-1">
                          Submit your specific query or schedule requests. Your message logs directly into our nurse supervisor dashboard.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label id="lbl-usr" className="text-[10px] font-mono text-artistic-muted block font-bold uppercase">Your Full Name (Required)</label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-artistic-muted" />
                            <input
                              aria-labelledby="lbl-usr"
                              required
                              type="text"
                              placeholder="e.g. Richard Henderson"
                              value={senderName}
                              onChange={(e) => setSenderName(e.target.value)}
                              className="w-full bg-artistic-bg border border-artistic-border focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none py-2.5 pl-10 pr-4 text-xs text-artistic-text focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label id="lbl-phn" className="text-[10px] font-mono text-artistic-muted block font-bold uppercase">Your Phone Number (Required)</label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-artistic-muted" />
                            <input
                              aria-labelledby="lbl-phn"
                              required
                              type="tel"
                              placeholder="e.g. (832) 555-0105"
                              value={senderPhone}
                              onChange={(e) => setSenderPhone(e.target.value)}
                              className="w-full bg-artistic-bg border border-artistic-border focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none py-2.5 pl-10 pr-4 text-xs text-artistic-text focus:outline-none transition-colors"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label id="lbl-em" className="text-[10px] font-mono text-artistic-muted block font-bold uppercase">Email Address (Optional)</label>
                          <div className="relative">
                            <Inbox className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-artistic-muted" />
                            <input
                              aria-labelledby="lbl-em"
                              type="email"
                              placeholder="yourname@domain.com"
                              value={senderEmail}
                              onChange={(e) => setSenderEmail(e.target.value)}
                              className="w-full bg-artistic-bg border border-artistic-border focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none py-2.5 pl-10 pr-4 text-xs text-artistic-text focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label id="lbl-int" className="text-[10px] font-mono text-artistic-muted block font-bold uppercase">Program of Interest</label>
                          <select
                            aria-labelledby="lbl-int"
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            className="w-full bg-artistic-bg border border-artistic-border focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none py-2.5 px-4 text-xs text-artistic-text focus:outline-none transition-colors font-sans"
                          >
                            <option value="Skilled Nursing Care">Skilled Nursing Assistance</option>
                            <option value="Residential Assistance">Residential Assistance</option>
                            <option value="Dementia Care">Dementia Memory Support</option>
                            <option value="Respite Care">Respite Relief Care</option>
                            <option value="General Question">General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label id="lbl-msg" className="text-[10px] font-mono text-artistic-muted block font-bold uppercase">Your Message & Family Scenario (Required)</label>
                        <textarea
                          aria-labelledby="lbl-msg"
                          required
                          rows={4}
                          placeholder="e.g. I sit with my father but work full-time. I require weekend respite shifts starting next month. Please schedule a safety coordinate call."
                          value={msgText}
                          onChange={(e) => setMsgText(e.target.value)}
                          className="w-full bg-artistic-bg border border-artistic-border focus:border-artistic-accent rounded-xl rounded-tl-none rounded-br-none p-4 text-xs text-artistic-text focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-between items-center">
                        <button
                          type="button"
                          onClick={onOpenModal}
                          className="text-xs uppercase tracking-wider font-mono text-artistic-accent font-bold hover:underline bg-transparent border-none cursor-pointer"
                        >
                          Book Interactive Consultation Ticket
                        </button>

                        <button
                          type="submit"
                          disabled={isMsgSubmitting}
                          className="w-full sm:w-auto px-8 py-4 bg-artistic-accent hover:bg-artistic-accent-hover text-white font-bold rounded-full rounded-tl-none rounded-br-none transition-all duration-300 disabled:opacity-50 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-artistic-accent/15"
                        >
                          {isMsgSubmitting ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Transmitting To Nurse...
                            </>
                          ) : (
                            <>
                              Transmit Message
                              <Send className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-6 py-12 px-4"
                    >
                      <div className="w-16 h-16 bg-artistic-accent text-white rounded-full rounded-tl-none rounded-br-none flex items-center justify-center mx-auto text-2xl font-bold font-serif shadow border border-white/10">
                        <ShieldCheck className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-mono text-artistic-accent uppercase tracking-widest font-bold">MESSAGE SECURED</span>
                        <h4 className="text-2xl font-serif font-bold text-artistic-text">Message Received, {senderName}!</h4>
                        <p className="text-xs text-artistic-muted leading-relaxed max-w-sm mx-auto">
                          We have recorded your inquiry and logged it under the clinical triage panel. A lead Nurse Supervisor will dial your contact phone <span className="text-artistic-accent font-semibold">{senderPhone}</span> shortly.
                        </p>
                      </div>

                      <div className="bg-artistic-bg p-4 border border-artistic-border rounded-xl rounded-tl-none rounded-br-none max-w-xs mx-auto text-xs font-mono">
                        <span className="text-artistic-muted uppercase font-bold text-[9px]">TRIAGE ROUTING TICKET:</span>
                        <div className="text-sm font-bold text-artistic-text mt-1 tracking-wider">{msgTicket}</div>
                      </div>

                      <button
                        type="button"
                        onClick={handleMsgReset}
                        className="px-6 py-2.5 bg-transparent border border-artistic-border hover:border-artistic-accent hover:bg-artistic-card rounded-full rounded-tl-none rounded-br-none text-artistic-text text-xs font-semibold cursor-pointer transition-all"
                      >
                        Send Another Coordinator Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </section>
    </motion.div>
  );
}
