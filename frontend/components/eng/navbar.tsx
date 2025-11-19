"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  // Available languages with corresponding root paths
  const languages = [
    { code: "EN", path: "/en" },
    { code: "KZ", path: "/kz" },
    { code: "RU", path: "/rus" },
  ];

  // Navigation links (same names for simplicity)
  const links = [
    { name: "Home", href: "/home" },
    { name: "About", href: "#about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "#contact" },
  ];

  // Determine current language based on path
  const currentLang =
    languages.find((lang) => pathname.startsWith(lang.path))?.code || "EN";

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-2 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href={`/${currentLang.toLowerCase()}/home`}
          className="flex items-center gap-3 text-2xl ml-0 lg:ml-40 font-bold text-[var(--text-selected-color)]"
        >
          <Image
            src="/Logo.png"
            alt="MyNewsSite logo"
            width={160}
            height={80}
            className="h-16 w-32 lg:h-20 lg:w-40"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 mr-0 lg:mr-40">

          {links.map((link) => {
            // Full href includes language prefix
            const href = `/${currentLang.toLowerCase()}${link.href}`;
            const active = pathname === href;
            return (
              <a
                key={href}
                href={href}
                className={`relative py-1 text-xl font-medium transition-colors ${
                  active ? "text-[var(--text-selected-color)]" : "text-[var(--text-unselected-color)] hover:text-[var(--text-selected-color)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.name}
                {/* <span
                  className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all ${
                    active ? "w-full bg-blue-600" : "w-0 bg-blue-600"
                  }`}
                /> */}
              </a>
            );
          })}

          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-3 py-1 border text-xl text-[var(--text-unselected-color)] rounded hover:bg-gray-50 transition"
            >
              {currentLang}
              <ChevronDown size={16} />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded shadow-md w-24 z-50">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={lang.path}
                    className={`w-full block px-3 py-2 text-xl hover:bg-gray-100 ${
                      lang.code === currentLang ? "font-semibold text-[var(--text-selected-color)]" : "text-[var(--text-unselected-color)]"
                    }`}
                  >
                    {lang.code}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 sm:px-6 pb-4">
          <div className="flex flex-col">
            {links.map((link) => {
              const href = `/${currentLang.toLowerCase()}${link.href}`;
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`py-3 border-b border-gray-100 last:border-b-0 text-xl font-medium transition-colors ${
                    active ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          {/* Mobile language selector */}
          <div className="mt-4 border-t border-gray-200 pt-4">
            <p className="font-medium mb-2">Language</p>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={lang.path}
                  className={`px-3 py-1 rounded border text-xl font-medium transition-colors ${
                    lang.code === currentLang
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {lang.code}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
