import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Frame from "./Frame";

/** Browser-window shell: header pinned top, footer pinned bottom, main fills the rest. */
export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1980px] flex-col overflow-hidden border-x-2 border-b-2 border-line bg-cream">
      <Header />
      <div className="relative flex flex-1 flex-col px-4 sm:px-8 lg:px-[84px]">
        <Frame />
        <main className="relative flex-1 py-7">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
