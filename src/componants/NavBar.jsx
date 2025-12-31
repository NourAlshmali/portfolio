import React, { useEffect, useRef, useState } from "react";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { useWindowScroll } from "react-use";

function Nav() {
  const { y } = useWindowScroll();
  const scroll = y > 50;

  const [activeTab, setActiveTab] = useState("home");
  const lineRef = useRef(null);
  const tabsRef = useRef({});

  const NavTabs = [
    { id: 1, icon: <FaHome />, Tab: "Home", target: "home" },
    { id: 2, icon: <FaUserAlt />, Tab: "About", target: "about" },
    { id: 3, icon: <FaProjectDiagram />, Tab: "Projects", target: "projects" },
    { id: 4, icon: <FaEnvelope />, Tab: "Contact", target: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = NavTabs.map((t) => document.getElementById(t.target));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

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
      <div className="flex justify-between items-center pt-7 pb-[30px] pr-[5%] pl-12">
        <div className="text-[#c77dffff] font-JetBrains font-bold
         text-2xl">
          Nour Al-Shamali
        </div>

        <ul className="relative flex space-x-10">
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
                  className={`transition ${
                    activeTab === tab.target ? "text-white" : "text-[#c77dffff]"
                  }`}
                >
                  {tab.icon}
                </span>
                <span
                  className={`font-JetBrains text-[22px] transition ${
                    activeTab === tab.target ? "text-white" : "text-[#c77dffff]"
                  }`}
                >
                  {tab.Tab}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
