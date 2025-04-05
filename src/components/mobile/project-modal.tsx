import { motion } from 'framer-motion';

export function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='w-11/12 max-w-md rounded-2xl bg-white p-6 text-black shadow-xl'
      >
        <h2 className='mb-2 text-xl font-bold'>{title}</h2>
        <p className='mb-4'>{description}</p>
        <button
          onClick={onClose}
          className='mt-4 rounded bg-black px-4 py-2 text-white'
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
