import { motion } from "framer-motion";
import { User, Briefcase, Folder, Wrench, FileText, Mail } from "lucide-react";

const items = [
  { label: "About Me", icon: User },
  { label: "Experience", icon: Briefcase },
  { label: "Projects", icon: Folder },
  { label: "Skills", icon: Wrench },
  { label: "Resume", icon: FileText },
  { label: "Contact", icon: Mail },
];

export default function Sidebar({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (item: string) => void;
}) {
  return (
    <div
      className="
        w-[260px] p-3
        bg-panel dark:bg-panelDark
        transition-colors
      "
    >
      {/* Section label */}
      <p
        className="
          px-3 py-2 text-xs font-semibold uppercase tracking-wide
          text-textMuted dark:text-textMutedDark
        "
      >
        Notes
      </p>

      {items.map(({ label, icon: Icon }) => {
        const isActive = active === label;

        return (
          <button
            key={label}
            onClick={() => onSelect(label)}
            className="
              relative w-full text-left px-3 py-2.5 rounded-lg mb-1
              transition-colors
            "
          >
            {/* Active background */}
            {isActive && (
              <motion.div
                layoutId="activeSidebar"
                className="
                  absolute inset-0 rounded-lg
                  bg-accentSoft dark:bg-accentSoftDark
                "
                transition={{ duration: 0.18, ease: "easeOut" }}
              />
            )}

            {/* Content */}
            <div className="relative flex items-center gap-3">
              <Icon
                size={16}
                className={
                  isActive
                    ? "text-accent dark:text-accentDark"
                    : "text-textMuted dark:text-textMutedDark"
                }
              />

              <span
                className={
                  isActive
                    ? "text-text dark:text-textDark font-medium"
                    : "text-text dark:text-textDark"
                }
              >
                {label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
