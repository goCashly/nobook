type Name =
  | "home" | "mortgage" | "car" | "shield" | "heart" | "check" | "phone" | "whatsapp"
  | "download" | "lock" | "bolt" | "target" | "star" | "arrow" | "menu" | "close" | "file";

const paths: Record<Name, JSX.Element> = {
  home: <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z" />,
  mortgage: (
    <>
      <path d="M3 10l9-6 9 6" />
      <path d="M5 9v11h14V9" />
      <path d="M12 11v6M14 12.5c0-.8-.9-1.5-2-1.5s-2 .7-2 1.5.9 1.2 2 1.5 2 .7 2 1.5-.9 1.5-2 1.5-2-.7-2-1.5" />
    </>
  ),
  car: (
    <>
      <path d="M5 16l1.5-5A2 2 0 018.4 9.5h7.2a2 2 0 011.9 1.5L19 16" />
      <rect x="3" y="15" width="18" height="4" rx="1.5" />
      <circle cx="7" cy="19.5" r="1.3" />
      <circle cx="17" cy="19.5" r="1.3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  whatsapp: (
    <>
      <path d="M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-4-1.1L4 20z" />
      <path d="M9 9.5c.3 2 2.3 4.2 4.5 4.8l1-1.1 1.6.8c-.2 1-1 1.6-2 1.5-3.2-.3-6-3.2-6.2-6.3 0-1 .6-1.8 1.5-2l.8 1.6-1.2.7z" />
    </>
  ),
  download: <path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </>
  ),
  bolt: <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.8" />
    </>
  ),
  star: <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5z" />,
  arrow: <path d="M5 12h14m-5-5l5 5-5 5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  file: (
    <>
      <path d="M7 3h7l5 5v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
};

export default function Icon({ name, className = "h-5 w-5" }: { name: Name; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
