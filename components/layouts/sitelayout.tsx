import { PropsWithChildren } from "react";
import Navigation from "./navigation";
import Footer from "./footer";

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
