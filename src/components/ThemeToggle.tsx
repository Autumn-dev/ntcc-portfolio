import { useEffect, useState } from "react";

// # = outline, + = glow (lit only), * = light rays (lit only)
const BULB = [
  "..*..........*..",
  "...*..####..*...",
  "....##++++##....",
  "...#++++++++#...",
  "..#++++++++++#..",
  "*.#++++++++++#.*",
  "..#++++++++++#..",
  "...#++++++++#...",
  "....#++++++#....",
  ".....#++++#.....",
  ".....######.....",
  ".....#....#.....",
  ".....######.....",
  "......####......",
];

const GLOW = "#f5d742";

function pixelColour(cell: string, lit: boolean) {
  if (cell === "#") return "currentColor";
  if (lit && (cell === "+" || cell === "*")) return GLOW;
  return null;
}

function ThemeToggle() {
  // index.html already applied the theme, so read it from <html>
  const [isBlackSpace, setIsBlackSpace] = useState(() =>
    document.documentElement.classList.contains("blackspace"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("blackspace", isBlackSpace);
    localStorage.setItem("theme", isBlackSpace ? "blackspace" : "whitespace");
  }, [isBlackSpace]);

  const lit = !isBlackSpace;

  return (
    <button
      aria-label="Black Space"
      aria-pressed={isBlackSpace}
      className="border-4 border-double border-edge bg-box p-1 text-ink hover:bg-hover cursor-pointer"
      onClick={() => setIsBlackSpace((on) => !on)}
      title="Black Space"
      type="button"
    >
      <svg
        aria-hidden="true"
        height={28}
        shapeRendering="crispEdges"
        viewBox="0 0 16 14"
        width={32}
      >
        {BULB.flatMap((row, y) =>
          [...row].map((cell, x) => {
            const fill = pixelColour(cell, lit);
            return (
              fill && (
                <rect
                  fill={fill}
                  height={1}
                  key={`${x}-${y}`}
                  width={1}
                  x={x}
                  y={y}
                />
              )
            );
          }),
        )}
      </svg>
    </button>
  );
}

export default ThemeToggle;
