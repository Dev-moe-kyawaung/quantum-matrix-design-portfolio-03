import { useCallback, useEffect, useRef, useState } from "react";
import { X, Trophy, RotateCcw, Play } from "lucide-react";

/* ============================================================
   🐍 SNAKE — classic playable easter egg
   Triggered via terminal "snake", palette, or hero chip
   ============================================================ */

const N = 18;

interface Pt {
  x: number;
  y: number;
}

const rand = (n: number) => Math.floor(Math.random() * n);
const key = (p: Pt) => `${p.x},${p.y}`;

export default function SnakeGame({ onClose }: { onClose: () => void }) {
  const [snake, setSnake] = useState<Pt[]>([{ x: 8, y: 8 }]);
  const [food, setFood] = useState<Pt>({ x: 12, y: 8 });
  const [status, setStatus] = useState<"idle" | "running" | "over">("idle");
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => Number(localStorage.getItem("mka-snake-best") || 0));

  const dirRef = useRef({ x: 1, y: 0 });
  const statusRef = useRef(status);
  const foodRef = useRef(food);
  const scoreRef = useRef(0);
  statusRef.current = status;
  foodRef.current = food;
  scoreRef.current = score;

  const start = () => {
    setSnake([{ x: 8, y: 8 }]);
    dirRef.current = { x: 1, y: 0 };
    setFood({ x: 12, y: 8 });
    setScore(0);
    setStatus("running");
  };

  const placeFood = (sn: Pt[]) => {
    let p: Pt;
    do {
      p = { x: rand(N), y: rand(N) };
    } while (sn.some((s) => s.x === p.x && s.y === p.y));
    setFood(p);
  };

  const step = useCallback(() => {
    setSnake((prev) => {
      const d = dirRef.current;
      const head = { x: prev[0].x + d.x, y: prev[0].y + d.y };

      const hitWall = head.x < 0 || head.x >= N || head.y < 0 || head.y >= N;
      const hitSelf = prev.some((s) => s.x === head.x && s.y === head.y);

      if (hitWall || hitSelf) {
        setStatus("over");
        setBest((b) => {
          const nb = Math.max(b, scoreRef.current);
          localStorage.setItem("mka-snake-best", String(nb));
          return nb;
        });
        return prev;
      }

      const ate = head.x === foodRef.current.x && head.y === foodRef.current.y;
      const next = [head, ...prev];
      if (!ate) {
        next.pop();
      } else {
        setScore((s) => s + 10);
        placeFood(next);
      }
      return next;
    });
  }, []);

  /* Keyboard controls */
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const map: Record<string, Pt> = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      };
      const next = map[e.key];
      if (!next) return;
      e.preventDefault();
      if (next.x === -dirRef.current.x && next.y === -dirRef.current.y) return; // no reverse
      dirRef.current = next;
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  /* Game loop */
  useEffect(() => {
    if (status !== "running") return;
    const id = setInterval(step, 105);
    return () => clearInterval(id);
  }, [status, step]);

  /* Esc closes */
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  const snakeSet = new Set(snake.map(key));
  const headKey = key(snake[0]);

  const cells = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const k = `${x},${y}`;
      const isSnake = snakeSet.has(k);
      const isHead = k === headKey;
      const isFood = food.x === x && food.y === y;
      cells.push(
        <div
          key={k}
          className={`aspect-square transition-colors duration-75 ${
            isSnake
              ? isHead
                ? "bg-[var(--accent)]"
                : "bg-[var(--accent)]/60"
              : isFood
                ? "bg-red-500 rounded-full scale-75"
                : "bg-[var(--bg)]"
          }`}
        />
      );
    }
  }

  const dpad = (p: Pt) => (
    <button
      aria-label="direction"
      onClick={() => {
        if (status === "idle") start();
        if (!(p.x === -dirRef.current.x && p.y === -dirRef.current.y)) dirRef.current = p;
      }}
      className="w-12 h-12 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--text)] font-bold flex items-center justify-center active:scale-90 hover:border-[var(--accent)]/50 transition-all cursor-pointer select-none"
    >
      {p.x === 0 && p.y === -1 ? "▲" : p.x === 0 && p.y === 1 ? "▼" : p.x === -1 ? "◀" : "▶"}
    </button>
  );

  return (
    <div className="fixed inset-0 z-[86] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl max-w-sm w-full overflow-hidden shadow-[var(--shadow)] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Snake game"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🐍</span>
            <div>
              <h3 className="text-sm font-extrabold text-[var(--text)]">MKA Snake</h3>
              <p className="text-[10px] font-mono text-[var(--faint)]">easter egg · arrow keys</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close game"
            className="w-9 h-9 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {/* Scoreboard */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 text-xs">
              <span className="bg-[var(--accent-soft)] text-[var(--accent)] font-black px-3 py-1.5 rounded-lg font-mono tabular-nums">
                {score}
              </span>
              <span className="text-[var(--muted)]">pts</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <Trophy className="w-3.5 h-3.5 text-[var(--accent-3)]" />
              Best: <span className="font-mono font-bold text-[var(--text)] tabular-nums">{best}</span>
            </div>
          </div>

          {/* Board */}
          <div className="relative">
            <div className="grid grid-cols-[repeat(18,minmax(0,1fr))] gap-[1px] bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
              {cells}
            </div>

            {/* Overlays */}
            {status !== "running" && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] rounded-xl flex flex-col items-center justify-center gap-3 text-center p-4">
                {status === "idle" && (
                  <>
                    <span className="text-3xl animate-bounce">🐍</span>
                    <p className="text-sm font-bold text-white">Ready to play?</p>
                    <p className="text-[11px] text-zinc-400 font-mono">Use arrow keys / WASD or the D-pad</p>
                    <button
                      onClick={start}
                      className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--inverse)] font-bold text-xs px-5 py-2.5 rounded-xl cursor-pointer active:scale-95 transition-all"
                    >
                      <Play className="w-3.5 h-3.5" /> Start Game
                    </button>
                  </>
                )}
                {status === "over" && (
                  <>
                    <span className="text-3xl">💥</span>
                    <p className="text-sm font-bold text-white">Game Over — {score} pts</p>
                    <p className="text-[11px] text-zinc-400 font-mono">
                      {score >= best && score > 0 ? "🎉 New best score!" : `Best: ${best}`}
                    </p>
                    <button
                      onClick={start}
                      className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--inverse)] font-bold text-xs px-5 py-2.5 rounded-xl cursor-pointer active:scale-95 transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Play Again
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* D-pad for mobile */}
          <div className="mt-5 grid grid-cols-3 gap-2 w-fit mx-auto">
            <div />
            {dpad({ x: 0, y: -1 })}
            <div />
            {dpad({ x: -1, y: 0 })}
            {dpad({ x: 0, y: 1 })}
            {dpad({ x: 1, y: 0 })}
          </div>

          <p className="mt-4 text-center text-[10px] font-mono text-[var(--faint)]">
            inspired by Moe's Snake-Game-App 🎮 · ESC to close
          </p>
        </div>
      </div>
    </div>
  );
}
