import React from "react";

const links = [
  { label: "Support Center", href: "#" },
  { label: "Invoicing", href: "#" },
  { label: "Contract", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "FAQ,s", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-0">
        {/* Logo */}
        <a
          href="/"
          className="font-serif text-3xl font-semibold tracking-wide text-neutral-700"
        >
          FASCO
        </a>

        {/* Links */}
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] text-neutral-600 lg:gap-x-10">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <p className="pb-4 text-center text-xs text-neutral-700">
        Copyright © 2022 Xpro . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;