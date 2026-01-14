export function Footer() {
  return (
    <footer className="mt-24 md:mt-90">
      <div className="max-w-6xl mx-auto p-6 border-t border-white/10 flex flex-col items-center gap-6">

        {/* ICONS */}
        <div className="flex gap-6 text-gray-400">
          <button aria-label="Code" className="hover:text-white transition">
            {"</>"}
          </button>

          <button aria-label="Save" className="hover:text-white transition">
            {"💾"}
          </button>

          <button aria-label="Close" className="hover:text-white transition">
            {"✕"}
          </button>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Pedroni. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
