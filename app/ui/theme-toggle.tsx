'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      {theme === 'dark' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
