import React, { useEffect, useRef, useState } from "react";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { useWindowScroll } from "react-use";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
  const { y } = useWindowScroll();
  const scroll = y > 50;

  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const lineRef = useRef(null);
  const tabsRef = useRef({});

  const NavTabs = [
    { id: 1, icon: <FaHome />, Tab: "Home", target: "home" },
    { id: 2, icon: <FaUserAlt />, Tab: "About", target: "about" },
    { id: 3, icon: <FaProjectDiagram />, Tab: "Projects", target: "projects" },
    { id: 4, icon: <FaEnvelope />, Tab: "Contact", target: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* Observe sections */
  useEffect(() => {
    const sections = NavTabs.map((t) => document.getElementById(t.target));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Underline animation */
  useEffect(() => {
    const currentTab = tabsRef.current[activeTab];
    if (currentTab && lineRef.current) {
      lineRef.current.style.width = `${currentTab.offsetWidth}px`;
      lineRef.current.style.transform = `translateX(${currentTab.offsetLeft}px)`;
    }
  }, [activeTab]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scroll ? "bg-white/10 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center pt-7 pb-[30px] pr-[5%] pl-12">
        <div className="text-[#c77dffff] font-JetBrains font-bold text-2xl">
          Nour Al-Shamali
        </div>

        {/* Desktop Nav */}
        <ul className="relative hidden md:flex space-x-10">
          <span
            ref={lineRef}
            className="absolute -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800
            shadow-[0_0_10px_rgba(155,0,255,0.5),0_0_20px_rgba(155,0,255,0.4),0_0_30px_rgba(155,0,255,0.3)]
            transition-all duration-300"
          />

          {NavTabs.map((tab) => (
            <li
              key={tab.id}
              ref={(el) => (tabsRef.current[tab.target] = el)}
              onClick={() => scrollToSection(tab.target)}
              className="cursor-pointer px-2 py-1"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`${
                    activeTab === tab.target ? "text-white" : "text-[#c77dffff]"
                  }`}
                >
                  {tab.icon}
                </span>
                <span
                  className={`font-JetBrains text-[22px] ${
                    activeTab === tab.target ? "text-white" : "text-[#c77dffff]"
                  }`}
                >
                  {tab.Tab}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-[#c77dffff] text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-black/90 backdrop-blur-xl z-50 px-8 py-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#c77dffff] text-3xl absolute top-6 right-6"
              >
                ✕
              </button>

              <ul className="flex flex-col gap-8 mt-16">
                {NavTabs.map((tab) => (
                  <motion.li
                    key={tab.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: tab.id * 0.05 }}
                    onClick={() => {
                      scrollToSection(tab.target);
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-4 cursor-pointer"
                  >
                    <span
                      className={`text-xl ${
                        activeTab === tab.target
                          ? "text-white"
                          : "text-[#c77dffff]"
                      }`}
                    >
                      {tab.icon}
                    </span>
                    <span
                      className={`font-JetBrains text-2xl ${
                        activeTab === tab.target
                          ? "text-white"
                          : "text-[#c77dffff]"
                      }`}
                    >
                      {tab.Tab}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;
