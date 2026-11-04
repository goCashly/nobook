// Stylised Toronto skyline used as a decorative background
export default function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <g fill="currentColor">
        <rect x="40" y="120" width="50" height="100" />
        <rect x="100" y="90" width="40" height="130" />
        <rect x="150" y="140" width="60" height="80" />
        <rect x="220" y="70" width="45" height="150" />
        <rect x="275" y="110" width="55" height="110" />
        <rect x="340" y="50" width="38" height="170" />
        <rect x="388" y="100" width="50" height="120" />
        {/* CN Tower */}
        <rect x="478" y="10" width="4" height="40" />
        <rect x="474" y="50" width="12" height="40" />
        <ellipse cx="480" cy="95" rx="18" ry="8" />
        <polygon points="472,100 488,100 494,220 466,220" />
        {/* Rogers Centre dome */}
        <path d="M520 220 Q 580 150 640 220 Z" />
        <rect x="660" y="80" width="48" height="140" />
        <rect x="716" y="40" width="40" height="180" />
        <rect x="764" y="100" width="56" height="120" />
        <rect x="828" y="60" width="42" height="160" />
        <rect x="878" y="120" width="60" height="100" />
        <rect x="946" y="85" width="44" height="135" />
        <rect x="998" y="130" width="55" height="90" />
        <rect x="1060" y="100" width="40" height="120" />
        <rect x="1108" y="140" width="60" height="80" />
      </g>
    </svg>
  );
}
