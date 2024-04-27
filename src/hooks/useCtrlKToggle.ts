import { useEffect } from "react";

function useCtrlKToggle(setIsOpen, isOpen) {
  useEffect(() => {
    function onKeydown(event) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen(!isOpen); //
      }
    }

    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isOpen, setIsOpen]);
}

export default useCtrlKToggle;
