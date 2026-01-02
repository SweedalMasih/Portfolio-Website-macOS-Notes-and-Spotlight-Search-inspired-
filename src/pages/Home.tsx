import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Note from "../components/Note";
import Spotlight from "../components/Spotlight";
import Window from "../components/Window";
import ResumeViewer from "../components/ResumeViewer";
import ProjectCard from "../components/ProjectCard";
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
        <div className="flex h-full">
          {/* Sidebar */}
          <Sidebar active={active} onSelect={setActive} />

          {/* Content Area */}
          <div
            className="
    flex-1
    bg-app dark:bg-appDark
    transition-colors
    overflow-y-auto
    min-h-0
  "
          >
            <Note title={notes[active].title}>
              {active === "Resume" ? (
                <ResumeViewer />
              ) : active === "Projects" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      tech={project.tech}
                      repo={project.repo}
                      viewing={project.viewing}
                      demo={
                        project.featured ? window.location.href : project.demo
                      }
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="
      text-[15px] leading-7
      text-text dark:text-textDark
      whitespace-pre-wrap
    "
                >
                  {linkify(notes[active].content.trim())}
                </div>
              )}
            </Note>
          </div>
        </div>
      </Window>
    </>
  );
}
