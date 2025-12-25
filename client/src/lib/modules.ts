export interface Module {
  id: string;
  title: string;
  description: string;
  status: 'locked' | 'active' | 'completed';
  progress: number;
}

export const modules: Module[] = [
  {
    id: "foundations",
    title: "Foundations of Academic Writing",
    description: "Understand the core principles of graduate-level discourse, audience, and purpose.",
    status: 'active',
    progress: 0
  },
  {
    id: "problem-process-solution",
    title: "Problem, Process, and Solution",
    description: "Master the classic problem-solution pattern and process descriptions.",
    status: 'locked',
    progress: 0
  },
  {
    id: "data-commentary",
    title: "Data Commentary & General-Specific Texts",
    description: "Learn to describe data effectively and move between general and specific statements.",
    status: 'locked',
    progress: 0
  },
  {
    id: "critiques",
    title: "Similarity/Contrast, Critiques, & Reviews",
    description: "Develop the skills to critique research and write manuscript reviews.",
    status: 'locked',
    progress: 0
  },
  {
    id: "research-paper",
    title: "Research Paper Construction",
    description: "Build your paper section by section: Introduction, Methods, Results, Discussion.",
    status: 'locked',
    progress: 0
  },
  {
    id: "literature-review",
    title: "Literature Reviews",
    description: "Tell a compelling research story through comprehensive literature analysis.",
    status: 'locked',
    progress: 0
  }
];
