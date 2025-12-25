import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, BookOpen, CheckCircle, GraduationCap } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_academic_paper_texture_background_with_subtle_geometry.png";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-24">
        
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden rounded-2xl bg-white border border-border shadow-sm">
          <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" 
               style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/10">
              <GraduationCap size={14} />
              Graduate-Level Writing
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Tell Your <span className="text-primary italic">Research Story</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto">
              A self-paced, mastery-based platform to master academic writing. 
              Based on the works of Swales & Feak.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="#about" className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-secondary/50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Learn Methodology
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="about" className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Active Learning",
              desc: "No passive lectures. Engage with 100+ interactive quizzes and writing tasks."
            },
            {
              icon: GraduationCap,
              title: "Mastery Based",
              desc: "Progression is locked. You must score 80% or higher to unlock the next module."
            },
            {
              icon: CheckCircle,
              title: "Instant Feedback",
              desc: "Get automated, error-specific feedback derived directly from the textbooks."
            }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </section>

      </div>
    </Layout>
  );
}
