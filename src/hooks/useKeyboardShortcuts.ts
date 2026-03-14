import { useEffect, useState } from "react";
import { Keyboard, X } from "lucide-react";

type Shortcut = {
  key: string;
  description: string;
  modifier?: string;
};

const SHORTCUTS: Shortcut[] = [
  { key: "?", description: "Show keyboard shortcuts" },
  { key: "/", description: "Focus search" },
  { key: "Escape", description: "Close modal / Clear search" },
  { key: "t", modifier: "⌘/Ctrl", description: "Toggle theme" },
  { key: "Home", description: "Go to top" },
  { key: "r", modifier: "⌘/Ctrl", description: "Refresh flights" },
];

export function useKeyboardShortcuts({
  onToggleTheme,
  onFocusSearch,
  onRefresh,
}: {
  onToggleTheme?: () => void;
  onFocusSearch?: () => void;
  onRefresh?: () => void;
}) {
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in inputs
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        if (e.key === "Escape") {
          (e.target as HTMLElement).blur();
        }
        return;
      }

      switch (e.key) {
        case "?":
          e.preventDefault();
          setShowHelp(true);
          break;
        case "/":
          e.preventDefault();
          onFocusSearch?.();
          break;
        case "Escape":
          setShowHelp(false);
          break;
        case "t":
          if (e.metaKey || e.ctrlKey) {
            e.preventDefault();
            onToggleTheme?.();
          }
          break;
        case "r":
          if (e.metaKey || e.ctrlKey) {
            e.preventDefault();
            onRefresh?.();
          }
          break;
        case "Home":
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onToggleTheme, onFocusSearch, onRefresh]);

  return { showHelp, setShowHelp };
}

export function KeyboardShortcutsHelp({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/95 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
            <Keyboard className="h-5 w-5 text-cyan-300" />
            Keyboard Shortcuts
          </h2>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-white/60 hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-2">
          {SHORTCUTS.map((shortcut) => (
            <div
              key={shortcut.key}
              className="flex items-center justify-between py-2 text-sm"
            >
              <span className="text-white/70">{shortcut.description}</span>
              <kbd className="flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 font-mono text-xs text-white/90">
                {shortcut.modifier && (
                  <span className="text-white/60">{shortcut.modifier}</span>
                )}
                <span>{shortcut.key}</span>
              </kbd>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-white/40">
          Press <kbd className="rounded bg-white/5 px-1">?</kbd> anytime to show
          this help
        </p>
      </div>
    </div>
  );
}
