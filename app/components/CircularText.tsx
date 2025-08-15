import { motion } from "motion/react";

export default function CircularText({ text = "HELLO WORLD • " }) {
  return (
    <motion.svg
      viewBox="0 0 150 150"    //Tweak to increase/reduce size
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 10,
      }}
      style={{ width: 100, height: 100 }}   //Tweak to increase/reduce size
    >
      <defs>
        <path
            id="circlePath"
            d="M 75, 75
                m -50, 0
                a 50,50 0 1,1 100,0
                a 50,50 0 1,1 -100,0"
        />
      </defs>
      <text fill="currentColor" fontSize="16" letterSpacing="3">
        <textPath xlinkHref="#circlePath">{text.repeat(4)}</textPath>
      </text>
    </motion.svg>
  );
}
