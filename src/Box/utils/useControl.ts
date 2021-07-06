import React from "react";

const useControl = (control?: boolean, controlIsVisible?: boolean): boolean => {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    setIsVisible(!!controlIsVisible);
  }, [controlIsVisible]);

  React.useEffect(() => {
    function onKeyup(event) {
      if (event.keyCode !== 27) return;
      setIsVisible((prevState) => !prevState);
    }
    if (control) {
      document.addEventListener("keyup", onKeyup);
      return () => document.removeEventListener("keyup", onKeyup);
    }
  }, []);

  return isVisible;
};

export default useControl;
