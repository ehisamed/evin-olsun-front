"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "./shared/components/ui/button";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button variant='default' size='icon' onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="bg-blue-50 dark:bg-accent/50 dark:hover:bg-accent/80 transition-colors duration-150
             dark:text-white hover:bg-blue-100 text-black cursor-pointer">
                {theme === 'light' ? <Sun /> : <Moon />}
        </Button>
    );
}