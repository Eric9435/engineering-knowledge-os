"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

export default function WelcomeIntro() {
  const [show, setShow] = useState(false);
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("eko-welcome-intro-v2-shown");

    if (!alreadyShown) {
      setShow(true);
    }
  }, []);

  function enterSystem() {
    setEntering(true);

    setTimeout(() => {
      sessionStorage.setItem("eko-welcome-intro-v2-shown", "true");
      setShow(false);
    }, 1800);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999999] overflow-hidden bg-[#020617]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(20px)",
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* animated background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.22), transparent 40%)",
                "radial-gradient(circle at 80% 30%, rgba(59,130,246,0.18), transparent 42%)",
                "radial-gradient(circle at 50% 80%, rgba(147,197,253,0.12), transparent 38%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          {/* grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* glowing orb */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />

          <div className="relative z-10 flex h-full items-center justify-center px-6">
            <motion.div
              className="w-full max-w-5xl text-center"
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* logo */}
              <motion.div
                className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl"
                initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <BrainCircuit className="h-14 w-14 text-blue-300" />
              </motion.div>

              {/* title */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 1 }}
              >
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-black tracking-[0.25em] text-blue-200 uppercase backdrop-blur-xl">
                  Engineering Knowledge OS
                </div>

                <h1 className="mt-10 text-7xl font-black tracking-tight text-white">
                  မင်္ဂလာပါ
                </h1>

                <h2 className="mt-5 text-6xl font-black tracking-tight text-blue-200">
                  Aung Phone Myat
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-2xl font-semibold leading-10 text-slate-300">
                  Professional Engineering Knowledge Platform
                </p>

                <p className="mt-4 text-lg text-slate-500">
                  Building Services · Scientific Computing · Automation · Engineering Systems
                </p>
              </motion.div>

              {/* button */}
              <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 1 }}
              >
                <motion.button
                  onClick={enterSystem}
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-blue-400/30 bg-blue-500 px-12 py-5 text-lg font-black text-white shadow-[0_0_80px_rgba(59,130,246,0.45)]"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.8 }}
                  />

                  <span className="relative z-10">
                    {entering ? "Entering System..." : "Log in"}
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* transition flash */}
          <AnimatePresence>
            {entering && (
              <motion.div
                className="absolute inset-0 z-[999999] bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
