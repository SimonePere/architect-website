import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const closeMenuOnOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const closeMenuOnLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", closeMenuOnOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", closeMenuOnOutsideClick);
    };
  }, []);

  return (
    <nav
      className={"sticky top-0 z-50 transition-all duration-300"}
      style={{
        backgroundColor: isScrolled
          ? "var(--foreground)" // Colore di sfondo chiaro quando scrollato
          : "var(--background)", // Colore di sfondo scuro quando non scrollato
      }}
    >
      <div
        className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center"
        ref={menuRef}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`logo ${
              isScrolled ? "text-[#1c1c1c]" : "text-[#f2f4f7]"
            }`}
          >
            Davide Mele
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 ${
                    isScrolled ? "text-[#1c1c1c]" : "text-[#f2f4f7]"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 ${
                    isScrolled ? "text-[#1c1c1c]" : "text-[#f2f4f7]"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        

        {/* mettere dropdown per vedere tutti i progetti */}
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen
              ? "translate-x-0 opacity-100"
              : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
          style={{
            backgroundColor: isScrolled
              ? "var(--foreground)" // Colore di sfondo chiaro quando scrollato
              : "var(--background)", // Colore di sfondo scuro quando non scrollato
          }}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            {[
              { name: "Progetti", href: "/project-case-study" },
              // { name: "Servizi", href: "/services" },
              { name: "About", href: "/about" },
              { name: "Contatti", href: "/contact" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`my-2 transition-all duration-300 transform md:mx-4 md:my-0 ${
                  isScrolled ? "text-[#1c1c1c] font-semibold" : "text-[#f2f4f7]"
                } hover:underline hover:underline-offset-4 hover:text-[#fe7f2d]`}
                onClick={closeMenuOnLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
