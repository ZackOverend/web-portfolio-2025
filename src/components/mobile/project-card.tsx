import Image from 'next/image';

export function ProjectCard({
  title,
  subtitle,
  onClick,
}: {
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className='z-20 flex cursor-pointer flex-row items-center justify-between rounded-lg bg-white p-4 text-black shadow-lg transition hover:scale-[1.02]'
    >
      <div>
        <h3 className='text-xl font-bold italic'>{title}</h3>
        <p className='text-sm'>{subtitle}</p>
      </div>
      <div>
        <Image
          src={'/images/chevron.svg'}
          width={20}
          height={2}
          alt='chevron'
        />
      </div>
    </div>
  );
}
