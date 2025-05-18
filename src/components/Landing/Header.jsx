import React, { useState } from "react";
import headerData from "@data/header.json";

const Header = () => {
  const { logo, menuItems } = headerData;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-[24px] md:text-[32px] font-bold text-[var(--primary-color)]">{logo}</h1>

        <div
          className="md:hidden text-2x focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        <div className="max-md:hidden">
          <div className="flex gap-4 font-medium">
            {menuItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="text-[var(--text-color)] transition-colors duration-200"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 absolute left-0 w-full bg-white transition-all">
          <div className="flex flex-col font-medium">
            {menuItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 text-[var(--text-color)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
