import { motion } from "framer-motion";

export default function Note({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      key={title}
      className="
  p-6 md:p-10
  pb-24
  w-full min-w-0
  md:max-w-[720px]
  md:mx-auto
  min-h-0
  break-words
"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {/* Title */}
      <h1
        className="
          text-2xl font-semibold mb-6 tracking-tight
          text-text dark:text-textDark
        "
      >
        <span className="text-accent dark:text-accentDark">#</span> {title}
      </h1>

      {/* Content */}
      <div
        className="
          text-[15px] leading-7
          text-text dark:text-textDark
        "
      >
        {children}
      </div>
    </motion.div>
  );
}
