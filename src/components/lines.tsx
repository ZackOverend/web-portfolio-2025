import { motion } from 'framer-motion';

export default function Lines() {
  const lines = [
    { y: 0, delay: 0 }, // First line (no delay)
    { y: 25, delay: 0.4 }, // More delay
    { y: 50, delay: 0.8 }, // New line (more delay)
    { y: 75, delay: 1.2 }, // Further delayed
    { y: 100, delay: 1.6 }, // New line (even further delayed)
  ];

  return (
    <div className='top-[75 rem] absolute left-[100rem] h-full w-screen scale-150'>
      <motion.svg
        width='400'
        height='200'
        viewBox='0 0 400 200'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          transform: 'rotate(-15deg)',
          transformOrigin: 'center',
        }} // Apply rotation
      >
        {lines.map((line, index) => (
          <motion.line
            key={index}
            x1='50'
            x2='500'
            y1={line.y}
            y2={line.y}
            stroke='white'
            strokeWidth='1'
            strokeLinecap='round'
            strokeDasharray='500 500'
            strokeDashoffset='500'
            animate={{ strokeDashoffset: [500, 0] }} // Shoots across
            transition={{
              duration: 2, // Adjust speed
              ease: 'easeIn',
              delay: line.delay, // Add delay for staggered effect
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
