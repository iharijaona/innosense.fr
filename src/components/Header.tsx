"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navigationVariants = {
  open: { opacity: 1, height: "auto", transition: { duration: .5 }},
  closed: { opacity:0, height: 8, transition: { duration: .5 }},
};

const Header = () => {
  const [isNavigationOpen, openNavigation] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const navigationAnimationStart = (animation: string) => {
    if (animation === 'closed') {
      setTimeout(() => { setShowHeader(true) }, 350)
    }
    else {
      setShowHeader(false)
    }
  }
  return (
    <header>
      <AnimatePresence>{showHeader ? (
        <motion.div className="absolute left-0 right-0 top-2 z-40 pt-14" >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="flex items-center justify-between">
                <a aria-label="Home" href="/">
                  <img
                    alt="INNOSENSE LOGO"
                    className="w-36 sm:w-48"
                    src="innosene-logo.svg"
                  />
                </a>
                <div className="flex items-center gap-x-4 sm:gap-x-8">
                  <a 
                    style={{ cursor: "pointer" }} 
                    className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                    href="#contact" >
                    Contactez-nous
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      openNavigation((currentValue) => !currentValue)
                    }
                    className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700"
                    >
                      <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}</AnimatePresence>
      <motion.nav
        animate={isNavigationOpen ? "open" : "closed"}
        variants={navigationVariants}
        initial="closed"
        onAnimationStart={navigationAnimationStart}
      >
        <div
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
        >
          <div
            className="bg-neutral-800"
            style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
          >
            <div className="bg-neutral-950 pb-16 pt-14">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="flex items-center justify-between">
                    <a aria-label="Home" href="/">
                      <img
                        alt="INNOSENSE LOGO"
                        className="w-36 sm:w-48"
                        src="innosene-logo-light.svg"
                      />
                    </a>
                    <div className="flex items-center gap-x-4 sm:gap-x-8">
                      <a
                        style={{ cursor: "pointer" }}
                        className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
                        href="#contact"
                      >
                        <span className="relative top-px">Contactez-nous</span>
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          openNavigation((currentValue) => !currentValue)
                        }
                        aria-expanded="true"
                        className="group -m-2.5 rounded-full p-2.5 transition hover:bg-white/10"
                        aria-label="Toggle navigation"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 fill-white group-hover:fill-neutral-200"
                        >
                          <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"></path>
                          <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
              <div className="even:mt-px sm:bg-neutral-950">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                        href="#about"
                      >
                        A propos
                        <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                      </a>
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                        href="#services"
                      >
                        Nos Services
                        <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="even:mt-px sm:bg-neutral-950">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                        href="#expertises"
                      >
                        Nos Expertises
                        <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                      </a>
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                        href="#clients"
                      >
                        Nos Clients
                        <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                    <div>
                      <h2 className="font-display text-base font-semibold text-white">
                        Notre bureau
                      </h2>
                      <ul
                        role="list"
                        className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                      >
                        <li>
                          <address className="text-sm not-italic text-neutral-300">
                            <strong className="text-white">2 rue Maurice Ravel</strong>
                            <br />
                            78390, Bois d'Arcy, France
                          </address>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
