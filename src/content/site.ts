export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Robotics" | "Multimodal AI" | "LLM" | "RL";
  eyebrow: string;
  summary: string;
  role: string;
  period?: string;
  organization?: string;
  technologies: string[];
  metrics?: { value: string; label: string }[];
  problem: string;
  contribution: string[];
  evaluation: string;
  disclosure?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "humanoid-physical-ai", title: "Physical AI for Humanoid Robots", shortTitle: "Humanoid Physical AI", category: "Robotics", eyebrow: "01 / EMBODIED INTELLIGENCE", featured: true,
    summary: "Developing perception-to-action pipelines that connect multimodal reasoning with humanoid robot behavior.", role: "Robotics AI Engineer", period: "May 2026–Present", organization: "VinRobotics", technologies: ["ROS2", "MuJoCo", "Gazebo", "Multimodal AI"],
    problem: "Bridge visual and multimodal inputs, high-level action generation, and physical robot execution across distributed computing systems.",
    contribution: ["Develop perception-to-action pipelines through ROS2.", "Use MuJoCo for physics-based simulation and action validation, and Gazebo for navigation and behavior evaluation.", "Investigate interfaces between AI-generated actions and low-level robot control, including speech, vision, and human-following behaviors."],
    evaluation: "The CV describes simulation and behavior evaluation but provides no public quantitative results.",
    disclosure: "High-level description only. Employer systems, data, robot imagery, and implementation details require review before publication."
  },
  {
    slug: "legal-llm-benchmark", title: "Vietnamese Legal LLM Benchmark & Fine-tuning", shortTitle: "Legal LLM Benchmark", category: "LLM", eyebrow: "02 / LANGUAGE SYSTEMS", featured: true,
    summary: "A legal assistant evaluation and training pipeline spanning 22 reasoning and document-analysis tasks.", role: "AI Researcher", period: "Oct 2025–Apr 2026", organization: "CMC OpenAI", technologies: ["LLMs", "Fine-tuning", "Evaluation", "Legal AI"], metrics: [{value:"22",label:"tasks"},{value:"65% → 80%",label:"average accuracy"}],
    problem: "Evaluate Vietnamese legal chatbot and assistant performance across a range of reasoning and document-analysis tasks.",
    contribution: ["Develop a scalable evaluation pipeline across 22 tasks.", "Design a multiple-phase fine-tuning pipeline on law-specific datasets.", "Build workflows for legal document review and comparative document analysis."],
    evaluation: "The CV reports average accuracy across all tasks improving from 65% to 80%. Per-task data, model names, and dataset sizes are not available for publication.",
    disclosure: "The relationship between this employer work and the NeurIPS publication has not been established."
  },
  {
    slug: "speech-to-speech-translation", title: "Japanese Railway Speech-to-Speech Translation", shortTitle: "Railway Speech Translation", category: "Multimodal AI", eyebrow: "03 / SPEECH SYSTEMS", featured: true,
    summary: "An end-to-end translation pipeline for Japanese railway announcements, adapted for portable inference.", role: "Remote AI Engineer", period: "Oct 2025–Mar 2026", organization: "West Japan Railway Company", technologies: ["Speech", "Translation", "Fine-tuning", "Quantization"], metrics: [{value:"0.56",label:"BLEU-4"},{value:"0.77",label:"ROUGE-L"}],
    problem: "Translate railway announcements within the constraints of domain-specific language and portable devices.",
    contribution: ["Engineer an end-to-end speech-to-speech machine translation pipeline.", "Synthesize domain-specific training data and fine-tune a translation model on a private dataset.", "Apply quantization for efficient inference on resource-constrained portable devices."],
    evaluation: "The CV reports BLEU-4 of 0.56 and ROUGE-L of 0.77. Audio samples and dataset details are not public.",
    disclosure: "Private domain data and operational examples are excluded."
  },
  {
    slug: "multimodal-speech-scoring", title: "Multimodal English Speech Scoring", shortTitle: "English Speech Scoring", category: "Multimodal AI", eyebrow: "04 / SPEECH EVALUATION",
    summary: "Automated scoring for English speech competitions using a customized multimodal model.", role: "Remote AI Engineer", period: "Oct 2025–Jan 2026", organization: "Koolsoft Company", technologies: ["Multimodal AI", "Quantization", "NVIDIA A30", "Inference"], metrics: [{value:"0.58",label:"MAE vs. expert scores"}],
    problem: "Provide automated English speech scoring against human expert scores while supporting real-time deployment.",
    contribution: ["Fine-tune a customized multimodal model on a private competition dataset.", "Apply quantization for efficient inference.", "Deploy the scoring system on NVIDIA A30 servers with real-time inference capability."],
    evaluation: "The CV reports mean absolute error of 0.58 compared with human expert scores. The dataset and score scale are not public.",
    disclosure: "Competition data is proprietary. This work is not presented as the implementation of M-LAMA."
  },
  {
    slug: "vietnamese-legal-rag", title: "AI Chatbot for Vietnamese Law", shortTitle: "Vietnamese Legal RAG", category: "LLM", eyebrow: "05 / RETRIEVAL SYSTEMS",
    summary: "A LangChain-based retrieval and generation system over Vietnamese legal documents.", role: "Project Owner", period: "Jan–Jul 2025", technologies: ["LangChain", "RAG", "Vector Search", "Facebook API"],
    problem: "Make Vietnamese legal documents retrievable for question answering in a conversational interface.",
    contribution: ["Build a RAG pipeline for query parsing, retrieval, and response generation.", "Crawl and normalize documents from LuatVietnam and ThuVienPhapLuat.", "Implement vector database search and prompt optimization, then integrate the chatbot with Facebook through an API."],
    evaluation: "The CV provides no public quantitative evaluation or current demo URL."
  },
  {
    slug: "better-car-racing", title: "Better-Car-Racing Reinforcement Learning", shortTitle: "Better-Car-Racing", category: "RL", eyebrow: "06 / REINFORCEMENT LEARNING",
    summary: "A customized CarRacing environment and agents trained with three reinforcement learning approaches.", role: "Co-leader", period: "Sep–Dec 2024", technologies: ["DQN", "A2C", "PPO", "CarRacing"], metrics: [{value:"600",label:"average score across agents"}],
    problem: "Compare agents trained with different reinforcement learning algorithms in a customized racing environment.",
    contribution: ["Build a customized environment based on CarRacing.", "Construct Deep Q-learning, Advantage Actor-Critic, and Proximal Policy Optimization agents."],
    evaluation: "The CV reports an average score of 600 across the agents. Training curves and episode-level results are not available."
  }
];

export const publications = [
  {slug:"vietnamese-legal-knowledge-benchmark", title:"Benchmarking Vietnamese Legal Knowledge of Large Language Models", venue:"NeurIPS 2026", detail:"Evaluation and Dataset task", status:"Accepted"},
  {slug:"m-lama", title:"M-LAMA: Multimodal Automated Scoring of Long-form Spoken English", venue:"Interspeech 2026", detail:"Oral Presentation", status:"Accepted"}
] as const;

export const experience = [
  {organization:"VinRobotics", role:"Robotics AI Engineer", period:"May 2026–Present", summary:"Physical AI for humanoid robots across perception, reasoning, action generation, ROS2 integration, and simulation.", project:"humanoid-physical-ai"},
  {organization:"CMC OpenAI", role:"AI Researcher", period:"Oct 2025–Apr 2026", summary:"Vietnamese legal assistant evaluation across 22 tasks and a law-specific fine-tuning pipeline.", project:"legal-llm-benchmark"},
  {organization:"West Japan Railway Company", role:"Remote AI Engineer", period:"Oct 2025–Mar 2026", summary:"Speech-to-speech translation for railway announcements with domain data synthesis and quantized inference.", project:"speech-to-speech-translation"},
  {organization:"Koolsoft Company", role:"Remote AI Engineer", period:"Oct 2025–Jan 2026", summary:"Multimodal English speech scoring and real-time NVIDIA A30 deployment.", project:"multimodal-speech-scoring"}
] as const;

export const news = [
  {date:"2026", text:"M-LAMA accepted at Interspeech 2026 as an oral presentation."},
  {date:"2026", text:"Vietnamese legal knowledge benchmark accepted at NeurIPS 2026, Evaluation and Dataset task."},
  {date:"Jul 2026", text:"Completed BSc in Data Science and Artificial Intelligence at Hanoi University of Science and Technology."},
  {date:"May 2026", text:"Joined VinRobotics as Robotics AI Engineer."}
] as const;

export const skillGroups = [
  {title:"Robotics", items:["ROS2", "MuJoCo", "Gazebo", "Perception", "Navigation", "Control", "Human-robot interaction"]},
  {title:"AI & ML", items:["PyTorch", "OpenCV", "NumPy", "Scikit-learn", "Reinforcement learning", "VLA", "Multimodal models"]},
  {title:"AI systems", items:["LLMs", "RAG", "vLLM", "Fine-tuning", "Quantization", "Inference optimization"]},
  {title:"Engineering", items:["Python", "C++", "Shell", "Docker", "FastAPI", "REST APIs", "GPU inference"]}
] as const;

export function validateContent() {
  const all = [...projects.map(p => p.slug), ...publications.map(p => p.slug)];
  if (new Set(all).size !== all.length) throw new Error("Duplicate content slug");
  for (const p of projects) if (!p.title || !p.summary || !p.slug || !p.contribution.length) throw new Error(`Invalid project: ${p.slug}`);
}
validateContent();
