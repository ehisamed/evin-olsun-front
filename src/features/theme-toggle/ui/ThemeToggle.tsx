// src/features/theme-toggle/ui/ThemeToggle.tsx

'use client';

import { Button } from "@/shared/components/ui/button";
import { Moon, Sun } from "lucide-react";
import useTheme from "../model/useTheme";
import clsx from "clsx";
import { useEffect, useState } from "react";

type Props = {
  className?: string
}

export default function ThemeToggle({ className }: Props) {
  const { theme, toggleTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Button variant='default' size='icon' className={clsx(
      "bg-transparent border dark:bg-accent/50 dark:hover:bg-accent/80 transition-colors duration-150 dark:text-white hover:bg-gray-100 text-black cursor-pointer",
       className)} />;
  }

  return (
    <Button variant='default' size='icon' onClick={toggleTheme}
      className={clsx(
        "bg-transparent border dark:bg-accent/50 dark:hover:bg-accent/80 transition-colors duration-150 dark:text-white hover:bg-gray-100 text-black cursor-pointer",
        className
      )}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  );
}