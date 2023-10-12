"use client";
import React, { useEffect, useState } from "react";
import { MdNightlight, MdLightMode } from "react-icons/md";

import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="cursor-pointer hover:text-amber-500 hover:transition-all"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdNightlight
            className="cursor-pointer hover:text-amber-500 hover:transition-all"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
};

export default DarkModeSwitch;
