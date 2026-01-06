import Panot from "@/assets/panot.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-30 flex items-center justify-between">
      <Link href="/">
        <Panot className="h-12 w-auto" />
      </Link>
      <nav className="hidden items-center gap-5 text-sm text-neutral-500 sm:flex">
        <Link href="/changelog" className="hover:text-neutral-900">
          Changelog
        </Link>
        <Link href="/privacy" className="hover:text-neutral-900">
          Privacy
        </Link>
      </nav>
    </header>
  );
}
