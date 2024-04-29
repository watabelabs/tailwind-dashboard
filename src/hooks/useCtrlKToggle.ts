import { useEffect } from "react";

// Define the hook as an arrow function with type annotations for the parameters.
const useCtrlKToggle = (
  setIsOpen: (isOpen: boolean) => void,
  isOpen: boolean,
): void => {
  useEffect(() => {
    // Event handler for keydown that toggles open state based on 'Ctrl+K' or 'Cmd+K'.
    const onKeydown = (event: KeyboardEvent): void => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault(); // Prevent the default action of the key event.
        setIsOpen(!isOpen); // Toggle the boolean state based on previous state.
      }
    };

    // Add the event listener when the component mounts.
    window.addEventListener("keydown", onKeydown);
    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isOpen, setIsOpen]); // Dependencies array to re-run the effect when dependencies change.
};

export default useCtrlKToggle;
