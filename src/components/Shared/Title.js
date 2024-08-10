import React from "react";
import { useEffect } from "react";

const Title = ({ title }) => {
  useEffect(() => {
    document.title = title || "TSQ Stream | Watching and stream movie free";
  });

  return <></>;
};

export default Title;
