// Small notebook details used across the page: tape, pins, torn edges, pencil marks.

type Style = React.CSSProperties;

export function Tape({ className = "", style }: { className?: string; style?: Style }) {
  return <span aria-hidden="true" className={`tape ${className}`} style={style} />;
}

export function Pin({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" width="26" height="32" viewBox="0 0 26 32" className={`absolute z-[3] ${className}`}>
      <path d="M13 19 L13 30" stroke="#6B7378" strokeWidth="2" strokeLinecap="round" />
      <circle cx="13" cy="11" r="9" fill="#8C7A52" />
      <circle cx="10.5" cy="8.5" r="3.2" fill="#D4C49A" />
    </svg>
  );
}

export function TornEdge() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 10"
      preserveAspectRatio="none"
      className="absolute left-0 -bottom-[9px] h-[10px] w-full"
    >
      <path
        fill="#FDFCF8"
        d="M0 0 L400 0 L394.1 3.1 L386.2 2.5 L378.9 4.6 L374.6 5.6 L370.4 5.0 L365.9 2.6 L359.4 7.8 L354.7 3.6 L346.9 8.6 L339.4 4.8 L329.6 2.3 L320.4 4.0 L315.6 2.8 L309.7 7.7 L304.6 6.1 L296.8 4.6 L289.5 2.4 L285.1 3.4 L277.1 5.0 L271.2 6.1 L264.5 4.1 L255.7 6.9 L250.2 6.0 L243.1 8.1 L234.7 4.0 L224.8 2.8 L218.3 7.3 L213.4 5.4 L209.2 6.7 L200.6 6.0 L191.3 4.2 L183.1 6.2 L175.7 5.2 L166.6 8.6 L159.8 6.6 L155.4 6.9 L147.5 9.0 L138.6 4.0 L132.3 6.7 L128.2 5.2 L123.1 2.8 L118.8 7.4 L114.0 3.7 L107.7 8.1 L103.2 5.1 L95.9 8.2 L87.0 8.0 L81.3 4.9 L75.2 8.2 L65.4 3.1 L60.3 3.6 L54.9 5.4 L47.4 3.8 L43.4 4.9 L37.2 6.0 L27.5 6.8 L20.4 6.3 L12.3 2.4 L2.9 7.5 L0.0 7.6 Z"
      />
    </svg>
  );
}

export function PencilUnderline({
  width = 240,
  color = "#138A87",
  className = "",
}: {
  width?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={width}
      height="12"
      viewBox={`0 0 ${width} 12`}
      fill="none"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      className={`sketch-lg block ${className}`}
    >
      <path d={`M3 8 C ${width * 0.25} 3, ${width * 0.6} 3, ${width - 4} 6`} />
    </svg>
  );
}

export function SketchArrow({ className = "", style }: { className?: string; style?: Style }) {
  return (
    <svg
      aria-hidden="true"
      width="34"
      height="18"
      viewBox="0 0 34 18"
      fill="none"
      stroke="#138A87"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`sketch-sm ${className}`}
      style={style}
    >
      <path d="M2 10 C 10 6, 20 6, 30 9" />
      <path d="M24 4 L30 9 L23 13" />
    </svg>
  );
}

export function CheckBox({ ticked }: { ticked?: boolean }) {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#343E45" strokeWidth="1.4" className="sketch-sm">
      <rect x="1.5" y="1.5" width="15" height="15" />
      {ticked && <path d="M4 9 L8 13 L15 3" stroke="#138A87" strokeWidth="2" />}
    </svg>
  );
}

export function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`m-0 font-mono text-[15px] ${light ? "text-teal-pale" : "text-teal-dark"}`}>{children}</p>
  );
}

export function HandNote({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`m-0 font-hand text-muted ${className}`}>{children}</p>;
}
