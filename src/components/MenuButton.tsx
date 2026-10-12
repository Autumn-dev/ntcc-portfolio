import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    const focusableElements = dialog?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    focusableElements?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      buttonRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        aria-controls={isOpen ? "site-navigation" : undefined}
        aria-expanded={isOpen}
        className="text-white text-2xl font-bold fixed bottom-6 left-6 z-50 rounded-xl bg-black w-fit h-fit p-3 border-double cursor-pointer border-4 border-white flex flex-col justify-center gap-2 items-center"
        onClick={() => setIsOpen((open) => !open)}
        ref={buttonRef}
        type="button"
      >
        MENU
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4">
          <button
            aria-label="Close navigation menu"
            className="absolute inset-0 h-full w-full cursor-default"
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <div
            aria-label="Site navigation"
            aria-modal="true"
            className="relative z-10"
            ref={dialogRef}
            role="dialog"
          >
            <Nav
              className="flex w-fit flex-col items-center divide-y-3 divide-solid divide-white border-4 border-double border-white bg-black text-lg font-bold text-white"
              id="site-navigation"
              onNavigate={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MenuButton;
