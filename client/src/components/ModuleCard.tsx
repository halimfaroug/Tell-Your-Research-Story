import { Module } from "@/lib/modules";
import { Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  module: Module;
  index: number;
}

export default function ModuleCard({ module, index }: ModuleCardProps) {
  const isLocked = module.status === 'locked';
  const isCompleted = module.status === 'completed';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative group rounded-lg border p-6 transition-all duration-300",
        isLocked 
          ? "bg-muted/30 border-dashed border-border text-muted-foreground cursor-not-allowed" 
          : "bg-card border-border shadow-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-1"
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border",
          isLocked ? "bg-muted border-border text-muted-foreground" : 
          isCompleted ? "bg-green-100 border-green-200 text-green-700" :
          "bg-primary/5 border-primary/10 text-primary"
        )}>
          {isCompleted ? <CheckCircle2 size={16} /> : index + 1}
        </div>
        
        {isLocked && <Lock size={16} className="text-muted-foreground/50" />}
      </div>

      <h3 className={cn(
        "font-serif text-xl font-semibold mb-2 leading-tight",
        isLocked ? "text-muted-foreground" : "text-card-foreground"
      )}>
        {module.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-6 line-clamp-2 h-10">
        {module.description}
      </p>

      {/* Progress Bar (Only for unlocked) */}
      {!isLocked && (
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-muted-foreground">
            <span>Mastery</span>
            <span>{module.progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-1000 ease-out" 
              style={{ width: `${module.progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Action Area */}
      <div className="mt-6">
        {isLocked ? (
          <div className="h-9 flex items-center text-xs font-medium text-muted-foreground">
            Complete previous module to unlock
          </div>
        ) : (
          <Link href={`/module/${module.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
            {module.progress > 0 ? "Continue Learning" : "Start Module"}
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
