import Link from "next/link";

export function BusinessCard() {
  return (
    <div className="inline-grid grid-cols-[auto_auto_auto_auto]">
      <Link
        href="/about"
        className="border-b border-current text-lg text-blue-700 hover:text-blue-400"
      >
        me
      </Link>
      <span />
      <span className="group col-span-2 cursor-pointer border-b border-current text-lg text-blue-700 hover:text-blue-400">
        <span className="group-hover:hidden">website</span>
        <span className="hidden group-hover:inline">here</span>
      </span>

      <span className="text-2xl">nokky</span>
      <span className="text-2xl">@</span>
      <span className="text-2xl">nkfr26</span>
      <span className="text-2xl">.com</span>

      <span />
      <Link
        href="https://x.com/nkfr26"
        className="col-span-2 border-t border-current text-lg text-blue-700 hover:text-blue-400"
        target="_blank"
        rel="noreferrer"
      >
        x
      </Link>
      <span />

      <Link
        href="/contact"
        className="col-span-4 border-t border-current text-lg text-blue-700 hover:text-blue-400"
      >
        email
      </Link>
    </div>
  );
}
