import "./styles/missionprofile.css";
import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, text }: { id: number; text: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div className="img-section" ref={ref}>
        <img src={`/${id}.png`} alt={`image ${id}`} />
      </div>
      <div className="text-section">
        <motion.h2 style={{ y }}>{text}</motion.h2>
      </div>
    </section>
  );
}

export default function MissionProfile() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const texts = [
    "1. Spacecraft is loaded onto any capable launch vehicle and launched either through a rideshare or dedicated mission.",
    "2. Launch vehicle releases spacecraft into Low Earth Orbit.",
    "3. Experiment phase: duration of orbit depends on requirements of experiments on board.",
    "4. Spacecraft fires de-orbit engines and begins deorbiting phase and experiances high temparatures during re-entry.",
    "5. Spacecraft autonomously navigates to and lands gently on a runway.",
  ];

  return (
    <>
      {texts.map((text, index) => (
        <Image key={index} id={index + 1} text={text} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
