import { Download, ExternalLink, FileText } from "lucide-react";

export default function ResumeViewer() {
  const resumeUrl = "/Sweedal_Masih_Software_Engineer.pdf";

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Resume Card */}
      <div
        className="
          flex flex-col sm:flex-row
          sm:items-center
          gap-4 p-5 sm:p-6
          rounded-xl
          bg-panel dark:bg-panelDark
          dark:shadow-[0_5px_15px_rgba(0,0,0,0.2)]
          transition-colors
          w-full min-w-0
        "
      >
        {/* Icon */}
        <div
          className="
            h-12 w-12 flex-shrink-0
            flex items-center justify-center
            rounded-lg
            bg-panelMuted dark:bg-panelMutedDark
          "
        >
          <FileText className="text-textMuted dark:text-textMutedDark" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p
            className="
              text-sm font-medium
              text-text dark:text-textDark
              break-words
            "
          >
            Sweedal_Masih_Software_Engineer.pdf
          </p>
          <p className="text-xs text-textMuted dark:text-textMutedDark">
            Updated Jan 2026 · PDF
          </p>
        </div>
      </div>

      {/* Actions */}
      <div
        className="
          flex flex-col sm:flex-row
          gap-3
          w-full min-w-0
        "
      >
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center gap-2
            px-4 py-2 rounded-lg text-sm
            border border-border
            text-text dark:text-textDark
            hover:bg-accentSoft dark:hover:bg-accentSoftDark
            transition
            w-full sm:w-auto
          "
        >
          <ExternalLink size={14} />
          Open Resume
        </a>

        <a
          href={resumeUrl}
          download
          className="
            inline-flex items-center justify-center gap-2
            px-4 py-2 rounded-lg text-sm
            border border-border
            text-text dark:text-textDark
            hover:bg-accentSoft dark:hover:bg-accentSoftDark
            transition
            w-full sm:w-auto
          "
        >
          <Download size={14} />
          Download
        </a>
      </div>
    </div>
  );
}
