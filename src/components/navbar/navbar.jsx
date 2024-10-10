import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import logo from "../../assets/mdrn-logo-side.png"; // Adjust the path to your logo
import { navLinks } from "../../data/data";
import "./navbar.css";

const Navbar = ({ navItems, scrolled, navOpen, toggleNavbar }) => {
  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl z-50 transition-all duration-300 opacity-[0.98] ${
        scrolled
          ? "bg-[#F5F6F6] shadow-lg rounded-2xl p-2 top-4 border border-borderSoft translate-y-6 outline-0 !py-1.5 lg:!py-2 pr-3 pl-4 sm:pl-6 !bg-fill lg:!w-[940px] 2xl:!w-[1040px] h-13"
          : "bg-transparent top-0 border border-transparent py-2 sm:py-3 xl:py-4 h-13"
      }`}
    >
      <div
        className={`flex flex-col lg:flex-row items-center justify-between text-xl transition-all duration-300 ${
          scrolled ? "gap-1 p-2" : "gap-3 p-2"
        }`}
      >
        <img src={logo} alt="logo's png" className="w-45 max-w-xs h-auto" />
        <div className="hidden lg:flex items-center justify-center">
          <a
            href="https://discord.gg/cWwp2w2GwZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`group rounded-full transition-all duration-300 transform ${
                scrolled
                  ? "bg-gradient-to-r from-indigo-900 to-violet-700 py-4 px-6 text-lg items-center gap-2 cursor-pointer transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-white focus:border bg-surface border-borderSoft hover:contrast-75 flex ml-auto lg:ml-0 w-48 h-12"
                  : "bg-white group py-4 px-6 rounded-full text-lg items-center gap-2 cursor-pointer transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-black focus:border bg-surface border-borderSoft hover:contrast-75 flex ml-auto lg:ml-0 w-48 h-12"
              }`}
            >
              <FaDiscord className="mr-1" />
              Join us
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </a>
        </div>
      </div>
      <div
        className={`lg:hidden flex justify-center transition-all duration-300 transform ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <a
          href="https://discord.gg/cWwp2w2GwZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`group rounded-full transition-all duration-300 transform bg-gradient-to-r from-indigo-900 to-violet-700 py-4 px-6 text-lg items-center gap-2 cursor-pointer transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-white focus:border bg-surface border-borderSoft hover:contrast-75 flex ml-auto lg:ml-0 w-48 h-12`}
          >
            <FaDiscord className="mr-1" />
            Join us
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function toggleNavbar(navOpen) {
    setNavOpen(!navOpen);
    console.log(navOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      navItems={navLinks}
      scrolled={scrolled}
      navOpen={navOpen}
      toggleNavbar={toggleNavbar}
    />
  );
}
