"use client";
import { useState } from "react";
import { Blocks, Code2, Sparkles, Menu } from "lucide-react";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector";
import HeaderProfileBtn from "./HeaderProfileBtn";

interface HeaderProps {
  LanguageSelector: React.ComponentType<{ hasAccess: boolean }>; // Type for the LanguageSelector component
  convexUser: any; // Define type of convexUser (could be more specific based on your data)
}

function Header({ LanguageSelector, convexUser }: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer visibility

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative z-10">
      <div className="flex items-center lg:justify-between justify-between p-6 mb-4 rounded-lg bg-[#0a0a0f]/80 backdrop-blur-xl">
        {/* Logo & Navigation for Desktop */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            {/* Logo hover effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            {/* Logo */}
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
              <Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            {/* Text */}
            <div className="flex flex-col">
              <span className="block text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                CodeX
              </span>
              <span className="block text-xs text-blue-400/60 font-medium">
                Interactive Code Editor
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation (Hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-3">
            <ThemeSelector />
            <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />
          </div>
          <div className="flex gap-4 pl-3 border-l border-gray-800">
            <nav className="flex items-center space-x-1">
              <Link
                href="/snippets"
                className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
                <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                  Snippets
                </span>
              </Link>
            </nav>
            <HeaderProfileBtn />
          </div>
        </div>

        {/* Mobile Drawer Toggle Button */}
        <button
          onClick={toggleDrawer}
          className="lg:hidden p-2 text-white rounded-md"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer (Visible on mobile) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-all duration-300 ${
          isDrawerOpen ? "block" : "hidden"
        }`}
        onClick={toggleDrawer}
      >
        {/* Drawer Content */}
        <div
          className={`fixed inset-y-0 right-0 w-3/4 max-w-xs bg-[#0a0a0f] p-6 rounded-l-lg transition-transform transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } shadow-lg`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <HeaderProfileBtn />
            <button
              className="p-2 text-gray-400 hover:text-white"
              onClick={toggleDrawer}
              aria-label="Close Drawer"
            >
              <span className="sr-only">Close</span>
              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6">
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Code2 className="w-5 h-5 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                Snippets
              </span>
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />
            </div>

            {/* Theme Selector */}
            <div className="relative">
              <ThemeSelector />
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-auto pt-8">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} CodeX.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
