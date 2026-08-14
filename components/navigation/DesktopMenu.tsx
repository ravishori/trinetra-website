import Link from 'next/link';

import { navItems } from '@/components/navigation/NavLinks';
import { cn } from '@/lib/utils';

type DesktopMenuProps = {
  className?: string;
};

export function DesktopMenu({ className }: DesktopMenuProps) {
  return (
    <nav aria-label="Primary" className={cn('hidden items-center gap-1 md:flex', className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
