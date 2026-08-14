import Link from 'next/link';

import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { DesktopMenu } from '@/components/navigation/DesktopMenu';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { siteName } from '@/lib/metadata';

export function Navbar() {
  return (
    <div className="flex h-16 items-center justify-between gap-4">
      <Link
        href="/"
        className="text-sm font-semibold tracking-tight text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      >
        {siteName}
      </Link>
      <DesktopMenu />
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <MobileMenu />
      </div>
    </div>
  );
}
