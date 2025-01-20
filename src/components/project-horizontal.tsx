"use client";

// import { useParallax } from "@/hooks/useParralax";
import { AnimatePresence, motion, useTime, useTransform} from "framer-motion";
import { useState } from "react";
// import { useRef } from "react";

export default function ProjectView() {
  return (
    <>
      <div className="flex mx-32 space-x-8 justify-center relative"> 
        <RotatingGradientBox>
          <h2>Weather iOS Application</h2>
          <button>EXPAND</button>
        </RotatingGradientBox>
      </div>
    </>

  );
}

// Reusable RotatingGradientBox function
function RotatingGradientBox({ children }: { children: React.ReactNode }) {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #AEFFE1, #AEBCFF, #AEFFE1)`;
  });

  const [isHovered, setIsHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex relative w-auto h-auto">
        {/* Motion div that triggers the hover effect */}
        <motion.div
          className="bg-black p-8 w-80 text-center items-center justify-center rounded-md border-[1px] "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.02, y: -1}}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered((prev) => !prev)}
          onClick={() => (modalOpen ?  setModalOpen(false) : setModalOpen(true))}
          >
          Hover over me
        </motion.div>

        {/* AnimatePresence handles the visibility of the additional object */}
        <AnimatePresence>
          {isHovered && (
            <>
              {/* <motion.div
              className="absolute scale-150 rounded-md -z-10"
              style={{background: rotatingBg}}
              initial={{ opacity: 0, scale: 1.0 }}
              animate={modalOpen ? { scale: 1.5 } : { scale: 1.5 }}
              exit={{ opacity: 0}}
              transition={{ duration: 0.2 }}
              >
              </motion.div> */}
              <motion.div
              className="absolute -inset-1 rounded-md -z-20 blur-[1rem] opacity-80 pointer-events-none"
              style={{background: rotatingBg}}
              initial={{ opacity: 0, scale: 1.0 }}
              animate={{ opacity: 1, scale: 1.1}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.5 }}
              >
              </motion.div>
              </>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute w-screen h-auto top-40 content-center">
        <AnimatePresence initial={false}>
        {modalOpen && (
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{opacity: 0, scale: 0}}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
          }}
          >
            <div className="w-96 h-80 flex-col justify-center items-start gap-9 inline-flex">
            <div className="text-white text-5xl font-normal font-['Roboto Condensed'] tracking-widest">Weather Application</div>
            <div className="self-stretch h-0.5 bg-[#d9d9d9]"></div>
            <div className="w-96 h-36 text-[#c3c3c3] text-xl font-normal font-['Roboto Mono'] tracking-widest">A sleek and user-friendly weather application designed for iOS that helps users track the temperature of their current location as well as any other areas of interest. Includes AI-driven descriptions, custom features, and admin functionalities, and a widget.</div>
            </div>
            <div className="h-80 p-2.5 bg-black rounded-lg flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
            <div className="w-96"><span className="text-white text-2xl font-bold font-['Roboto Condensed'] tracking-widest">Dynamic AI Insights</span><span className="text-white text-2xl font-normal font-['Roboto Condensed'] tracking-widest">: Gemini AI generates concise, real-time weather descriptions for each location.</span></div>
            <div className="w-96"><span className="text-white text-2xl font-bold font-['Roboto Condensed'] tracking-widest">Personalized Experience</span><span className="text-white text-2xl font-normal font-['Roboto Condensed'] tracking-widest">: Track current weather, favorite multiple locations, and access detailed forecasts, including “feels like” temperatures.</span></div>
            <div className="w-96"><span className="text-white text-2xl font-bold font-['Roboto Condensed'] tracking-widest">User-Friendly Design</span><span className="text-white text-2xl font-normal font-['Roboto Condensed'] tracking-widest">: SwiftUI-powered interface with a custom app icon, widgets, and intuitive navigation.</span></div>
            <div className="w-96"><span className="text-white text-2xl font-bold font-['Roboto Condensed'] tracking-widest">Secure Authentication</span><span className="text-white text-2xl font-normal font-['Roboto Condensed'] tracking-widest">: Encrypted Firebase database for user sign-in and validation.</span></div>
            </div>
          </motion.div>
        )}

        </AnimatePresence>
      </div>
    </>
  );
}
