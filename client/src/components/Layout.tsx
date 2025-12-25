import React from "react";
import { Link, useLocation } from "wouter";
import { BookOpen, Award, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col paper-texture bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 glass">
        <div className="container max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white group-hover:bg-primary/90 transition-colors">
              <BookOpen size={18} strokeWidth={2.5} />
            </div>
            <span className="font-serif font-bold text-lg tracking-tight text-primary">
              Tell Your Research Story
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/dashboard" className={cn(
              "text-sm font-medium transition-colors hover:text-primary flex items-center gap-2",
              location === "/dashboard" ? "text-primary" : "text-muted-foreground"
            )}>
              <Award size={16} />
              <span>My Progress</span>
            </Link>
            <div className="h-4 w-px bg-border" />
            <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <User size={16} />
              <span>Halim Elhag</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container max-w-5xl mx-auto px-6 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 mt-12 bg-white/50 backdrop-blur-sm">
        <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2025 Tell Your Research Story. All rights reserved.</p>
          <p>Based on the works of Swales & Feak</p>
        </div>
      </footer>
    </div>
  );
}
