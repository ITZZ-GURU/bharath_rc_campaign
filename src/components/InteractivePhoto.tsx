import { motion } from 'motion/react';

export default function InteractivePhoto() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Rotating decorative pattern */}
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 opacity-25 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-amber-500"
        >
          <circle
            cx="100"
            cy="100"
            r="85"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="100"
            cy="100"
            r="75"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="100"
            cy="100"
            r="65"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="1 3"
          />

          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 100 + Math.cos(angle) * 30;
            const y1 = 100 + Math.sin(angle) * 30;
            const x2 = 100 + Math.cos(angle) * 75;
            const y2 = 100 + Math.sin(angle) * 75;

            return (
              <path
                key={i}
                d={`M ${x1} ${y1} Q ${
                  100 + Math.cos(angle + 0.15) * 55
                } ${100 + Math.sin(angle + 0.15) * 55} ${x2} ${y2} Q ${
                  100 + Math.cos(angle - 0.15) * 55
                } ${100 + Math.sin(angle - 0.15) * 55} ${x1} ${y1}`}
                stroke="currentColor"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </motion.div>

      {/* Main portrait frame */}
      <div
        id="campaign-portrait"
        className="relative group w-72 h-96 md:w-80 md:h-[420px] rounded-lg overflow-hidden bg-brand-maroon/40 p-0 shadow-[16px_16px_0px_#722f37] border-4 border-brand-gold transition-all duration-300 hover:shadow-[20px_20px_0px_#722f37]"
      >
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-brand-cream/60 z-10" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-brand-cream/60 z-10" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-brand-cream/60 z-10" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-brand-cream/60 z-10" />

        <div className="relative w-full h-full overflow-hidden bg-brand-maroon">
          <img
            src={`${import.meta.env.BASE_URL}images/bharat.png`}
            alt="Yemineni Bharath Kumar"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/80 via-transparent to-black/15" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}