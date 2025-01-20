import { useTime, useTransform } from 'motion/react';

export default function GradientButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #AEFFE1, #AEBCFF, #AEFFE1)`;
  });
}
