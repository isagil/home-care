import { motion } from 'motion/react';
import ServiceFinder from '../components/ServiceFinder';

interface CareFinderProps {
  key?: string;
}

export default function CareFinder({}: CareFinderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-0"
    >
      {/* Page Header */}
      <section className="bg-artistic-card border-b border-artistic-border py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-artistic-accent/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-mono tracking-widest text-artistic-accent uppercase bg-artistic-accent/10 px-3.5 py-1.5 rounded-full rounded-tl-none rounded-br-none font-bold">
            SMART MATCHING ALGORITUM
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-artistic-text tracking-tight leading-tight">
            Interactive Care Finder
          </h1>
          <p className="text-artistic-muted text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Answer a few quick questions to search, evaluate, and formulate customized clinical plans tailored for your family.
          </p>
        </div>
      </section>

      {/* Main Container carrying the diagnostic tool */}
      <section className="py-24 bg-artistic-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceFinder />
        </div>
      </section>
    </motion.div>
  );
}
