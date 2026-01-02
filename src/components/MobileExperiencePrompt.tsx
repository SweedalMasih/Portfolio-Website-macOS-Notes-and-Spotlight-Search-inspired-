import { X, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileExperiencePrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("mobilePromptDismissed");
    const isMobile = window.innerWidth < 768;

    if (isMobile && !dismissed) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-4 left-4 right-4 z-50
        md:hidden
      "
    >
      <div
        className="
          relative
          flex gap-3 items-start
          rounded-xl p-4
          bg-panel dark:bg-panelDark
          shadow-lg
          border border-border dark:border-panelMutedDark
        "
      >
        {/* Icon */}
        <div
          className="
            h-9 w-9 flex-shrink-0
            flex items-center justify-center
            rounded-lg
            bg-panelMuted dark:bg-panelMutedDark
          "
        >
          <Monitor size={18} className="text-accent dark:text-accentDark" />
        </div>

        {/* Text */}
        <div className="text-sm text-text dark:text-textDark leading-5">
          <p className="font-medium mb-0.5">Best viewed on a larger screen</p>
          <p className="text-textMuted dark:text-textMutedDark">
            This portfolio is designed for a desktop-like experience. You can
            explore here, but it shines on bigger screens.
          </p>
        </div>

        {/* Close */}
        <button
          onClick={() => {
            localStorage.setItem("mobilePromptDismissed", "true");
            setVisible(false);
          }}
          className="
            absolute top-2 right-2
            p-1 rounded-md
            hover:bg-panelMuted dark:hover:bg-panelMutedDark
          "
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
