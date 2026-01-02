import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Window({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") !== "light" // default dark
  );

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);

    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div
      className="
    w-[1200px] h-[620px]
    rounded-2xl
    bg-app dark:bg-appDark
    shadow-[0_30px_80px_rgba(0,0,0,0.18)]
    border border-border dark:border-transparent
    overflow-hidden
    flex flex-col
      "
    >
      {/* Top Bar */}
      <div className="h-12 flex-shrink-0 flex items-center px-4 gap-2">
        {/* macOS window dots */}
        <span className="w-3 h-3 rounded-full bg-[#ff605c]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd44]" />
        <span className="w-3 h-3 rounded-full bg-[#00ca4e]" />

        {/* Title */}
        <p className="mx-auto text-sm font-medium text-accent">
          Sweedal Masih — Notes
        </p>

        {/* Right controls */}
        <div className="ml-auto flex items-center gap-2">
          {/* ⌘K Hint */}
          <div
            className="
              hidden sm:flex items-center gap-2
              text-xs px-2.5 py-1 rounded-md
              bg-panelMuted dark:bg-panelMutedDark
              text-textMuted dark:text-textMutedDark
            "
          >
            <span>Search</span>
            <span className="font-medium">⌘ K</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              p-1.5 rounded-md
              hover:bg-panelMuted dark:hover:bg-panelMutedDark
              transition-colors
            "
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={16} className="text-textMutedDark" />
            ) : (
              <Moon size={16} className="text-textMuted" />
            )}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px flex-shrink-0 bg-border/60 dark:bg-panelMutedDark" />

      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
}
