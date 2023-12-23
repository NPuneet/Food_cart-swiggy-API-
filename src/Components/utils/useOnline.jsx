import React, { useState } from "react";
import { useEffect } from "react";

const useOnline = () => {
  const [systemStatus, setsystemStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setsystemStatus(true);
    });
    window.addEventListener("offline", () => {
      setsystemStatus(false);
    });
  }, []);
  return systemStatus;
};

export default useOnline;
