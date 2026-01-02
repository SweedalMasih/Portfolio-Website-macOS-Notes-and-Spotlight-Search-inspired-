import type { NoteKey } from "../data/notes";

const items = [
  "About Me",
  "Experience",
  "Projects",
  "Skills",
  "Resume",
  "Contact",
];

export default function MobileNav({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (item: NoteKey) => void;
}) {
  return (
    <div
      className="
    md:hidden
    flex gap-2 px-3 py-2
    border-b border-border dark:border-panelMutedDark
    bg-app dark:bg-appDark
    overflow-x-auto
    flex-shrink-0
  "
    >
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item as NoteKey)}
          className={`
            whitespace-nowrap px-3 py-1.5 rounded-full text-sm
            transition
            ${
              active === item
                ? "bg-accentSoft dark:bg-accentSoftDark text-accent dark:text-accentDark"
                : "text-textMuted dark:text-textMutedDark"
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
