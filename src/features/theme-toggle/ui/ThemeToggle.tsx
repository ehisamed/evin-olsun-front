"use client";
import { Button } from "@/shared/components/ui/button";
import { Moon, Sun } from "lucide-react";
import useTheme from "../model/useTheme";
export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button variant='default' size='icon' onClick={toggleTheme}
            className="bg-transparent border dark:bg-accent/50 dark:hover:bg-accent/80 transition-colors duration-150
             dark:text-white hover:bg-gray-100 text-black cursor-pointer">
                {theme === 'light' ? <Sun /> : <Moon />}
        </Button>
    );
}