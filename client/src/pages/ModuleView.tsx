import Layout from "@/components/Layout";
import { Link, useRoute } from "wouter";
import { modules } from "@/lib/modules";
import { ChevronRight, FileText, BrainCircuit, CheckSquare, ArrowLeft } from "lucide-react";

export default function ModuleView() {
  const [, params] = useRoute("/module/:id");
  const moduleId = params?.id;
  const module = modules.find(m => m.id === moduleId);

  if (!module) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h1 className="text-2xl font-serif font-bold mb-4">Module Not Found</h1>
          <Link href="/dashboard" className="text-primary hover:underline">
            Return to Dashboard
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header / Breadcrumbs */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/dashboard" className="hover:text-primary transition-colors">
              Dashboard
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="font-medium text-foreground">{module.title}</span>
          </div>
          
          <div className="flex justify-between items-start">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              {module.title}
            </h1>
            <div className="hidden md:flex items-center gap-2 text-sm font-medium bg-secondary/50 px-3 py-1 rounded-full text-secondary-foreground">
              <span>Level 1</span>
              <div className="w-1 h-1 bg-current rounded-full" />
              <span>Unit 1</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-slate max-w-none">
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                  <FileText className="text-primary" size={20} />
                  Audience and Purpose
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Graduate writing differs significantly from undergraduate writing. It is not merely about demonstrating knowledge to a professor who already knows the answer. Instead, it is about joining a scholarly conversation. You are writing for peers and experts, which requires a shift in tone, structure, and stance.
                </p>
                <div className="bg-secondary/30 p-4 rounded-md border-l-4 border-accent">
                  <h4 className="font-bold text-sm text-foreground mb-1">Key Concept: The Research Space</h4>
                  <p className="text-sm text-muted-foreground">
                    Swales defines the "Research Space" as the rhetorical niche your work occupies. You must "create a research space" (CARS) by establishing what is known, identifying a gap, and occupying that gap.
                  </p>
                </div>
              </div>
            </div>

            {/* Lesson Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-border">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" disabled>
                <ArrowLeft size={16} />
                Previous Unit
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-primary/90 transition-colors">
                Next Unit
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Sidebar / Activities */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm sticky top-24">
              <h3 className="font-serif font-bold text-lg mb-4">Module Activities</h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 rounded-md bg-secondary/50 border border-transparent hover:border-primary/20 hover:bg-secondary transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-primary shadow-sm">
                      <CheckSquare size={16} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Unit Quiz</div>
                      <div className="text-xs text-muted-foreground">8 Questions • 80% to pass</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
                </button>

                <button className="w-full flex items-center justify-between p-3 rounded-md bg-secondary/50 border border-transparent hover:border-primary/20 hover:bg-secondary transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-accent shadow-sm">
                      <BrainCircuit size={16} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Flashcards</div>
                      <div className="text-xs text-muted-foreground">12 Terms • Spaced Repetition</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Progress</span>
                  <span className="text-xs font-bold text-primary">0%</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
