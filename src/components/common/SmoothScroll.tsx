import { ReactLenis } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import { useEffect, useRef, PropsWithChildren } from 'react';
import type { LenisRef } from 'lenis/react';

export default function SmoothScroll({ children }: PropsWithChildren) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    // Sync Lenis scroll with Framer Motion's update loop
    // 'true' ensures it runs at the end of the frame (read/write separation)
    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
