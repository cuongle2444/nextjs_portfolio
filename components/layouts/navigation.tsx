import Link from "next/link";

export default function Navigation({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Portfolio
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-slate-300 hover:text-white transition">
            Trang chủ
          </Link>
          <Link
            href="/blog"
            className="text-slate-300 hover:text-white transition"
          >
            Blog
          </Link>
          <a
            href="/nextjs_portfolio/#contact"
            className="text-slate-300 hover:text-white transition"
          >
            Liên lạc
          </a>
        </div>
      </div>
    </nav>
  );
}
