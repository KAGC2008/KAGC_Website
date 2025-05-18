import { useState } from "react";
import headerData from "@data/header.json";

const Header = () => {
  const { menuItems, preHeader } = headerData;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <p className="py-2 bg-[var(--text-color)] text-white max-md:hidden">{preHeader.text}</p>
      <div className="sticky top-0 z-20 bg-white shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 py-4 flex md:justify-center md:items-center">
          <div
            className="md:hidden text-2x focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </div>

          <div className="max-md:hidden items-center">
            <div className="flex gap-10 font-medium">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="text-[var(--text-color)] transition-colors duration-200 hover:text-[var(--primary-color)] border-b-2 border-transparent hover:border-[var(--primary-color)]"
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
    </>
  );
};

export default Header;
