import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Note from "../components/Note";
import Spotlight from "../components/Spotlight";
import Window from "../components/Window";
import ResumeViewer from "../components/ResumeViewer";
import ProjectCard from "../components/ProjectCard";
import MobileNav from "../components/MobileNav";
import { notes } from "../data/notes";
import { projects } from "../data/projects";

export default function Home() {
  const [active, setActive] = useState<keyof typeof notes>("About Me");
  const [spotlightOpen, setSpotlightOpen] = useState(false);

  // ⌘K / Ctrl+K / ⌘/
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");

      if (
        (isMac && e.metaKey && e.key.toLowerCase() === "k") ||
        (!isMac && e.ctrlKey && e.key.toLowerCase() === "k") ||
        (isMac && e.metaKey && e.key === "/")
      ) {
        e.preventDefault();
        e.stopPropagation();
        setSpotlightOpen(true);
      }
    };

    document.addEventListener("keydown", handler, true);
    return () => document.removeEventListener("keydown", handler, true);
  }, []);

  function linkify(text: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(urlRegex).map((part, index) =>
      part.match(urlRegex) ? (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent dark:text-accentDark underline underline-offset-2"
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  }

  return (
    <>
      {/* Spotlight */}
      <Spotlight
        open={spotlightOpen}
        onClose={() => setSpotlightOpen(false)}
        onSelect={(value) => setActive(value as keyof typeof notes)}
      />

      {/* App Window */}
      <Window>
        <div className="flex h-full min-h-0">
          {/* Sidebar (desktop only) */}
          <Sidebar active={active} onSelect={setActive} />

          {/* RIGHT COLUMN */}
          <div className="flex-1 min-h-0 min-w-0 flex flex-col">
            {/* Mobile Nav (fixed height, mobile only) */}
            <div className="flex-shrink-0">
              <MobileNav active={active} onSelect={setActive} />
            </div>

            {/* SCROLLABLE CONTENT */}
            <div
              className="
          flex-1 min-h-0 min-w-0
          overflow-y-auto overflow-x-hidden
          bg-app dark:bg-appDark
          transition-colors
        "
            >
              <Note title={notes[active].title}>
                {active === "Resume" ? (
                  <ResumeViewer />
                ) : active === "Projects" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 min-w-0">
                    {projects.map((project) => (
                      <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        repo={project.repo}
                        viewing={project.viewing}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap break-words break-all">
                    {linkify(notes[active].content.trim())}
                  </div>
                )}
              </Note>
            </div>
          </div>
        </div>
      </Window>
    </>
  );
}
