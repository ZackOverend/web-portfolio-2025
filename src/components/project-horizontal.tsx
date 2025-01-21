'use client';

// import { useParallax } from "@/hooks/useParralax";
import { AnimatePresence, motion, useTime, useTransform } from 'framer-motion';
import { useState } from 'react';
import GradientButton from './gradient-button';
// import { useRef } from "react";

export default function ProjectView() {
  return (
    <>
      <div className='relative mx-32 flex justify-center space-x-8'>
        <RotatingGradientBox>
          <h2>Weather iOS Application</h2>
          <button>EXPAND</button>
        </RotatingGradientBox>
        <GradientButton>
          <p>Test</p>
        </GradientButton>
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

  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className='relative flex h-auto w-auto'>
        {/* Motion div that triggers the hover effect */}
        <motion.div
          className='w-80 items-center justify-center rounded-md border-[1px] bg-black p-8 text-center'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.02, y: -1 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered((prev) => !prev)}
          onClick={() => (modalOpen ? setModalOpen(false) : setModalOpen(true))}
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
                className='pointer-events-none absolute -inset-1 -z-20 rounded-md opacity-80 blur-[1rem]'
                style={{ background: rotatingBg }}
                initial={{ opacity: 0, scale: 1.0 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className='absolute top-40 h-auto w-screen content-center'>
        <AnimatePresence initial={false}>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.4,
                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
              }}
            >
              <div className='inline-flex h-80 w-96 flex-col items-start justify-center gap-9'>
                <div className="font-['Roboto Condensed'] text-5xl font-normal tracking-widest text-white">
                  Weather Application
                </div>
                <div className='h-0.5 self-stretch bg-[#d9d9d9]'></div>
                <div className="font-['Roboto Mono'] h-36 w-96 text-xl font-normal tracking-widest text-[#c3c3c3]">
                  A sleek and user-friendly weather application designed for iOS
                  that helps users track the temperature of their current
                  location as well as any other areas of interest. Includes
                  AI-driven descriptions, custom features, and admin
                  functionalities, and a widget.
                </div>
              </div>
              <div className='inline-flex h-80 flex-col items-start justify-start gap-5 overflow-hidden rounded-lg bg-black p-2.5'>
                <div className='w-96'>
                  <span className="font-['Roboto Condensed'] text-2xl font-bold tracking-widest text-white">
                    Dynamic AI Insights
                  </span>
                  <span className="font-['Roboto Condensed'] text-2xl font-normal tracking-widest text-white">
                    : Gemini AI generates concise, real-time weather
                    descriptions for each location.
                  </span>
                </div>
                <div className='w-96'>
                  <span className="font-['Roboto Condensed'] text-2xl font-bold tracking-widest text-white">
                    Personalized Experience
                  </span>
                  <span className="font-['Roboto Condensed'] text-2xl font-normal tracking-widest text-white">
                    : Track current weather, favorite multiple locations, and
                    access detailed forecasts, including “feels like”
                    temperatures.
                  </span>
                </div>
                <div className='w-96'>
                  <span className="font-['Roboto Condensed'] text-2xl font-bold tracking-widest text-white">
                    User-Friendly Design
                  </span>
                  <span className="font-['Roboto Condensed'] text-2xl font-normal tracking-widest text-white">
                    : SwiftUI-powered interface with a custom app icon, widgets,
                    and intuitive navigation.
                  </span>
                </div>
                <div className='w-96'>
                  <span className="font-['Roboto Condensed'] text-2xl font-bold tracking-widest text-white">
                    Secure Authentication
                  </span>
                  <span className="font-['Roboto Condensed'] text-2xl font-normal tracking-widest text-white">
                    : Encrypted Firebase database for user sign-in and
                    validation.
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
