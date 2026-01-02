import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Folder, Wrench, FileText, Mail } from "lucide-react";

type SpotlightProps = {
  open: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
};

const commands = [
  { label: "About Me", icon: User },
  { label: "Experience", icon: Briefcase },
  { label: "Projects", icon: Folder },
  { label: "Skills", icon: Wrench },
  { label: "Resume", icon: FileText },
  { label: "Contact", icon: Mail },
];

export default function Spotlight({ open, onClose, onSelect }: SpotlightProps) {
  return (
    <AnimatePresence>
      {open && (
        <Command.Dialog
          open={open}
          onOpenChange={onClose}
          className="fixed inset-0 z-50 flex items-start justify-center"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Spotlight Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="
              relative mt-40 w-[560px] rounded-2xl
              bg-panel dark:bg-panelDark
              shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.7)]
              overflow-hidden
              transition-colors
            "
          >
            <Command>
              {/* Input */}
              <Command.Input
                autoFocus
                placeholder="Search notes…"
                className="
                  w-full px-4 py-3 text-sm outline-none
                  bg-panel dark:bg-panelDark
                  text-text dark:text-textDark
                  placeholder:text-textMuted dark:placeholder:text-textMutedDark
                "
              />

              {/* Divider */}
              <div className="h-px bg-border dark:bg-panelMutedDark" />

              {/* List */}
              <Command.List>
                {commands.map(({ label, icon: Icon }) => (
                  <Command.Item
                    key={label}
                    value={label}
                    onSelect={(value) => {
                      onSelect(value);
                      onClose();
                    }}
                    className="
                      group flex items-center justify-between
                      px-4 py-3 text-sm cursor-pointer
                      aria-selected:bg-accentSoft
                      dark:aria-selected:bg-accentSoftDark
                      transition-colors
                    "
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={16}
                        className="
                          text-textMuted dark:text-textMutedDark
                          group-aria-selected:text-accent
                          dark:group-aria-selected:text-accentDark
                        "
                      />
                      <span className="text-text dark:text-textDark">
                        {label}
                      </span>
                    </div>

                    <span className="text-xs text-textMuted dark:text-textMutedDark">
                      ↵
                    </span>
                  </Command.Item>
                ))}
              </Command.List>
            </Command>
          </motion.div>
        </Command.Dialog>
      )}
    </AnimatePresence>
  );
}
