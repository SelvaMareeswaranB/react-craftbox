import { useEffect, useRef } from "react";

export default function useFocusBrowser(
  active: boolean,
  handleClose: () => void
) {
  const trapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!active || !trapRef.current) return;
    const container = trapRef.current;

    const getFocusableElements = () =>
      container?.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      ) ?? [];

    const focusable = getFocusableElements();
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    console.log(first, last, focusable);
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    function handleEscapeKeyPress(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
      }
    }

    container?.addEventListener("keydown", handleKeyDown);
    container?.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      container?.removeEventListener("keydown", handleKeyDown);
      container?.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [active]);

  return trapRef;
}
