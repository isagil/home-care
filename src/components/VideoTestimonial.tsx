import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, X, Volume2, Quote, ArrowRight, Heart } from 'lucide-react';
import { SUCCESS_STORIES } from '../data';
import { Testimonial } from '../types';

export default function VideoTestimonial() {
  const [selectedStory, setSelectedStory] = useState<Testimonial | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [playbackProgress, setPlaybackProgress] = useState(0);

  // Simulate video playback of subtitles/transcript
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && selectedStory && selectedStory.transcript) {
      interval = setInterval(() => {
        setPlaybackProgress((prev) => {
          if (prev >= 100) {
            // Move to next transcript line
            if (currentLineIdx < selectedStory.transcript!.length - 1) {
              setCurrentLineIdx((prevIdx) => prevIdx + 1);
              return 0;
            } else {
              // Loop back or stop
              setIsPlaying(false);
              setCurrentLineIdx(0);
              return 0;
            }
          }
          return prev + 2.5; // Increments progress
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedStory, currentLineIdx]);

  const handleOpenVideo = (story: Testimonial) => {
    setSelectedStory(story);
    setIsPlaying(true);
    setCurrentLineIdx(0);
    setPlaybackProgress(0);
  };

  const handleCloseVideo = () => {
    setSelectedStory(null);
    setIsPlaying(false);
    setCurrentLineIdx(0);
    setPlaybackProgress(0);
  };

  return (
    <div className="space-y-12">
      {/* Testimonials Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {SUCCESS_STORIES.map((story) => (
          <div
            key={story.id}
            className="group bg-artistic-card rounded-3xl rounded-tl-none rounded-br-none border border-artistic-border hover:border-artistic-accent/30 shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Soft decorative visual backdrop */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-artistic-accent/5 rounded-bl-full pointer-events-none group-hover:bg-artistic-accent/10 transition-colors" />

            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-start">
                <div className="flex gap-1 text-artistic-accent text-lg">
                  {'★'.repeat(story.rating)}
                </div>
                <div className="p-2 bg-artistic-bg text-artistic-accent/25 rounded-full rounded-tl-none rounded-br-none">
                  <Quote className="w-5 h-5 fill-current opacity-25" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-serif font-bold text-artistic-text group-hover:text-artistic-accent transition-colors">
                  "{story.title}"
                </h4>
                <p className="text-artistic-muted text-sm leading-relaxed italic animate-fade-in">
                  {story.text}
                </p>
              </div>

              {/* Before and After Journey Visual blocks */}
              <div className="pt-4 border-t border-artistic-border space-y-3">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-artistic-bg p-3 rounded-xl rounded-tl-none rounded-br-none border border-dashed border-artistic-border">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-artistic-muted block mb-1 font-bold">
                      BEFORE AMBIANCE JOY:
                    </span>
                    <p className="text-artistic-text/90 leading-normal font-semibold">
                      {story.beforeCare}
                    </p>
                  </div>
                  <div className="bg-artistic-accent/5 p-3 rounded-xl rounded-tl-none rounded-br-none border border-artistic-accent/20">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-artistic-accent block mb-1 font-bold">
                      AFTER AMBIANCE JOY:
                    </span>
                    <p className="text-artistic-text leading-normal font-serif font-bold">
                      {story.afterCare}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Preview Clickable Box */}
            <div className="mt-8 pt-6 border-t border-artistic-border flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full rounded-tl-none rounded-br-none overflow-hidden border border-artistic-border">
                  <img
                    src={story.videoThumbnail}
                    alt={story.author}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div>
                  <h5 className="text-sm font-serif font-bold text-artistic-text">{story.author}</h5>
                  <p className="text-xs text-artistic-muted font-medium">{story.relation}</p>
                </div>
              </div>

              <button
                onClick={() => handleOpenVideo(story)}
                className="px-4 py-2.5 bg-artistic-accent hover:bg-artistic-accent-hover text-artistic-bg rounded-full rounded-tl-none rounded-br-none text-xs font-bold flex items-center gap-2 shadow-sm transition-all duration-300 ease-in-out cursor-pointer group-hover:scale-[1.03]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Video Journey ({story.videoDuration})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cinematic Modal Video Simulation */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-artistic-dark-bg/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-artistic-dark-card border border-white/5 rounded-3xl rounded-tl-none rounded-br-none w-full max-w-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Top Banner */}
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2 text-artistic-accent">
                  <Heart className="w-4 h-4 text-artistic-accent fill-current" />
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                    Real Family Story Video
                  </span>
                </div>
                <button
                  onClick={handleCloseVideo}
                  aria-label="Close narrative video"
                  className="p-1.5 hover:bg-white/10 rounded-full rounded-tl-none rounded-br-none text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Subdued Cinematic Player Window */}
              <div className="bg-black aspect-video relative flex flex-col justify-between p-6 overflow-hidden">
                {/* Simulated visual video stream frame - abstract gentle wave */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-artistic-accent/30 via-artistic-dark-bg to-black pointer-events-none" />
                
                {/* Audio Waves bars */}
                {isPlaying && (
                  <div className="absolute top-6 left-6 flex items-end gap-1 px-3 py-1.5 bg-black/40 border border-white/5 rounded-full rounded-tl-none rounded-br-none text-[10px] font-mono text-artistic-accent font-bold">
                    <Volume2 className="w-3 h-3 text-artistic-accent animate-pulse mr-1" />
                    <span className="mr-2">AUDIO ACTIVE</span>
                    <div className="flex items-end gap-0.5 h-3 w-6">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-artistic-accent w-[2px] rounded-full"
                          style={{
                            height: `${Math.floor(Math.random() * 100) + 10}%`,
                            animation: `bounce 0.8s ease-in-out infinite alternate`,
                            animationDelay: `${i * 0.15}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Speaker Watermark in player corner */}
                <div className="absolute top-6 right-6 font-mono text-[10px] text-white/50 bg-black/50 px-3 py-1 rounded rounded-tl-none rounded-br-none border border-white/10">
                  REC: {selectedStory.author}
                </div>

                <div className="flex-1 flex items-center justify-center relative">
                  {/* Big Play Overlay if paused */}
                  {!isPlaying && (
                    <button
                      onClick={() => setIsPlaying(true)}
                      aria-label="Play narrative video"
                      className="w-16 h-16 bg-artistic-accent text-artistic-bg hover:bg-artistic-accent-hover rounded-full rounded-tl-none rounded-br-none flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 border-4 border-artistic-dark-card cursor-pointer"
                    >
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </button>
                  )}
                </div>

                {/* Subtitle Line Bar */}
                <div className="bg-black/60 border border-white/5 py-4 px-6 rounded-2xl rounded-tl-none rounded-br-none backdrop-blur-sm shadow-xl min-h-[5.5rem] flex flex-col justify-between relative z-10">
                  <p className="text-slate-100 text-sm md:text-base font-serif font-semibold text-center italic leading-relaxed">
                    {selectedStory.transcript ? selectedStory.transcript[currentLineIdx] : selectedStory.text}
                  </p>

                  {/* Playback Sub-Progress bar for current subtitle chunk */}
                  <div className="w-full bg-white/10 h-[2px] rounded-full rounded-tl-none rounded-br-none overflow-hidden mt-3">
                    <div
                      className="bg-artistic-accent h-full transition-all duration-100"
                      style={{ width: `${isPlaying ? playbackProgress : (currentLineIdx / (selectedStory.transcript?.length || 1)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Lower Controls & Before/After Recap */}
              <div className="p-6 bg-black/40 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="p-3 bg-white/10 hover:bg-white/15 text-white rounded-full rounded-tl-none rounded-br-none transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block select-none">
                      {isPlaying ? 'Streaming Client Interview' : 'Consultation Narrative Paused'}
                    </span>
                    <span className="text-[10px] text-white/50 font-mono">
                      Line {currentLineIdx + 1} of {selectedStory.transcript?.length || 1}
                    </span>
                  </div>
                </div>

                {/* Quick Care Impact summary summary */}
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl rounded-tl-none rounded-br-none border border-white/10 text-xs">
                  <span className="text-white/40">Impact:</span>
                  <span className="text-artistic-accent font-bold flex items-center gap-1.5">
                    100% Safety Restored <ArrowRight className="w-3 h-3 text-white/30" /> At-Home Freedom
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styled inline animation block for simulated wave */}
      <style>{`
        @keyframes bounce {
          0% { height: 10%; }
          100% { height: 100%; }
        }
      `}</style>
    </div>
  );
}
