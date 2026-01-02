import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo?: string;
  viewing?: boolean;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  tech,
  repo,
  demo,
  viewing,
}: ProjectCardProps) {
  return (
    <div
      className="
        rounded-xl p-5
        bg-panel dark:bg-panelDark
        shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        transition-colors
      "
    >
      {viewing && (
        <span
          className="
      inline-block mb-1 text-xs font-medium
      text-accent dark:text-accentDark
    "
        >
          You’re viewing this
        </span>
      )}

      <h3 className="text-base font-semibold text-text dark:text-textDark mb-1">
        {title}
      </h3>

      <p className="text-sm text-textMuted dark:text-textMutedDark mb-3">
        {description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className="
              text-xs px-2 py-1 rounded-md
              bg-panelMuted dark:bg-panelMutedDark
              text-textMuted dark:text-textMutedDark
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 text-sm">
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-1
            text-accent dark:text-accentDark
            hover:underline
          "
        >
          <Github size={14} /> Code
        </a>

        {!viewing && demo ? (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
      inline-flex items-center gap-1
      text-accent dark:text-accentDark
      hover:underline
    "
          >
            <ExternalLink size={14} /> Live
          </a>
        ) : null}
      </div>
    </div>
  );
}
