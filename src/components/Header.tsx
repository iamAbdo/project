import React from "react";
import { Globe, Moon, Sun } from "lucide-react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isDark, setIsDark] = React.useState(false);
  const [language, setLanguage] = React.useState("EN");

  return (
    <header className="fixed top-0 left-0 right-0 shadow-sm z-50">
      {/* Header Componant */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Website Logo" className="h-8 w-auto" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#top"
              className="text-gray-700 hover:text-secondary font-epilogue font-bold px-3 py-2 text-sm"
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-secondary font-epilogue font-bold px-3 py-2 text-sm"
            >
              Skills / Expertise
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-secondary font-epilogue font-bold px-3 py-2 text-sm"
            >
              Projects
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-secondary font-epilogue font-bold px-3 py-2 text-sm"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-secondary font-epilogue font-bold px-3 py-2 text-sm"
            >
              Contact
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-secondary" />
              ) : (
                <Moon className="w-5 h-5 text-secondary" />
              )}
            </button>
            <button
              onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-1"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-gray-700">
                {language}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
