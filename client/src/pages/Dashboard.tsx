import Layout from "@/components/Layout";
import ModuleCard from "@/components/ModuleCard";
import { modules } from "@/lib/modules";
import { motion } from "framer-motion";

export default function Dashboard() {
  const activeModule = modules.find(m => m.status === 'active');

  return (
    <Layout>
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-border pb-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
              Your Learning Path
            </h1>
            <p className="text-muted-foreground">
              Master each module to unlock the next step in your research story.
            </p>
          </div>
          
          <div className="text-right hidden md:block">
            <div className="text-sm font-medium text-muted-foreground mb-1">Overall Mastery</div>
            <div className="text-2xl font-bold text-primary font-serif">0%</div>
          </div>
        </div>

        {/* Current Focus Banner */}
        {activeModule && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-xl bg-primary text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-2">
                Current Module
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">
                {activeModule.title}
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mb-8 leading-relaxed">
                {activeModule.description}
              </p>
              <button className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded shadow-lg hover:bg-accent/90 transition-transform active:scale-95">
                Continue to Lesson 1
              </button>
            </div>
          </motion.div>
        )}

        {/* Module Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
