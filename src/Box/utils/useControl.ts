import React from "react";

const useControl = (control?: boolean, controlIsVisible?: boolean): boolean => {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    function onKeyup(event) {
      if (event.keyCode !== 27) return;
      setIsVisible((prevState) => !prevState);
    }
    if (!control) {
      setIsVisible(controlIsVisible);
      return;
    }
    document.addEventListener("keyup", onKeyup);
    return () => document.removeEventListener("keyup", onKeyup);
  }, []);

  return isVisible;
};

export default useControl;
