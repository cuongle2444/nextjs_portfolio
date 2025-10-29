export default function Footer({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <p>&copy; 2025 Your Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
