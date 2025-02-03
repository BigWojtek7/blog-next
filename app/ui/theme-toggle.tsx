'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme: theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {mounted ? (
        theme === 'light' ? (
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
        )
      ) : (
        <span className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
