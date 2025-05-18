import React from "react";
import footerData from "@data/footer.json";

const Footer = () => {
  const { text, links } = footerData;

  return (
    <footer className="bg-gray-100 py-6 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className="mb-4 md:mb-0">{text}</p>
        <div className="hidden">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-500">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
