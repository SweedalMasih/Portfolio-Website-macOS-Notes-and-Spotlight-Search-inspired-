import { Download, ExternalLink, FileText } from "lucide-react";

export default function ResumeViewer() {
  const resumeUrl = "/Sweedal_Masih_Software_Engineer.pdf";

  return (
    <div className="space-y-6">
      {/* Resume Card */}
      <div
        className="
  flex items-center gap-4 p-6 rounded-xl
  bg-panel dark:bg-panelDark
   dark:shadow-[0_5px_15px_rgba(0,0,0,0.2)]
  transition-colors
"
      >
        <div
          className="
  h-12 w-12 flex items-center justify-center rounded-lg
  bg-panelMuted dark:bg-panelMutedDark
"
        >
          <FileText className="text-[#6e6e73]" />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-text dark:text-textDark">
            Sweedal_Masih_Software_Engineer.pdf
          </p>
          <p className="text-xs text-textMuted dark:text-textMutedDark">
            Updated Jan 2026 · PDF
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
  flex items-center gap-2 px-4 py-2 rounded-lg text-sm
  bg-transparent border border:border
  hover:bg-accentSoft dark:hover:bg-accentSoftDark
  text-text dark:text-textDark
  transition
"
        >
          <ExternalLink size={14} />
          Open Resume
        </a>

        <a
          href={resumeUrl}
          download
          className="
  flex items-center gap-2 px-4 py-2 rounded-lg text-sm
  bg-transparent border border:border
  hover:bg-accentSoft dark:hover:bg-accentSoftDark
  text-text dark:text-textDark
  transition
"
        >
          <Download size={14} />
          Download
        </a>
      </div>
    </div>
  );
}
