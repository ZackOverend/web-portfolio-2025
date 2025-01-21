'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';

const ChipTabs = ({
  tabs,
}: {
  tabs: { title: string; content: React.ReactNode }[];
}) => {
  const [selected, setSelected] = useState(tabs[0].title);

  const selectedTabContent = tabs.find(
    (tab) => tab.title === selected
  )?.content;

  return (
    <div className='relative flex flex-col justify-start gap-4 px-4 py-14'>
      <div className='relative ml-8 inline-flex w-max gap-4 rounded-md border-[1px] border-slate-800 p-2 text-xl font-semibold'>
        {tabs.map((tab) => (
          <Chip
            text={tab.title}
            selected={selected === tab.title}
            setSelected={setSelected}
            key={tab.title}
          />
        ))}
      </div>
      <div className='relative w-full'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='absolute inset-0'
          >
            {selectedTabContent || <div>No content available</div>}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <motion.button
      onClick={() => setSelected(text)}
      whileHover={!selected ? { scale: 1.05 } : {}}
      transition={{}}
      className={`${
        selected
          ? 'text-black'
          : 'text-white hover:bg-gradient-to-r hover:from-[#AEBCFF]/10 hover:to-[#AEFFE1]/10'
      } relative rounded-md px-2.5 py-0.5 transition-colors`}
    >
      <span className='relative z-10'>{text}</span>
      {selected && (
        <motion.span
          layoutId='pill-tab'
          transition={{ type: 'spring', duration: 0.75 }}
          className='absolute inset-0 z-0 whitespace-normal rounded-md bg-white'
        ></motion.span>
      )}
    </motion.button>
  );
};

export default ChipTabs;
