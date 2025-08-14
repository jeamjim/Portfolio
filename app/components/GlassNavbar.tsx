export default function GlassNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Brand */}
        <a href="#" className="text-lg font-semibold text-white">
          GlassBrand
        </a>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-white/80 hover:text-white transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </a>
          </li>
        </ul>

        {/* Button */}
        <a
          href="#get-started"
          className="hidden md:inline-block bg-white/20 text-white font-medium px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
