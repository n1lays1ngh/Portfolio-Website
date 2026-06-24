export const DATA = {
  name: "Nilay Singh",
  role: "Computer Science Engineering",
  about: {
    title: "Engineering the Future with Code & Data", 
    description: "I am a pre-final year Computer Engineering undergraduate at Thapar Institute of Engineering and Technology, driven by a passion for solving complex problems and building impactful solutions. With a solid foundation in Python, I specialize in machine learning, NLP, and backend development using FastAPI. I believe that experience is the best teacher, and I constantly strive to learn from every challenge—whether it's a success or a setback. Beyond academics, I actively explore emerging technologies to grow both personally and professionally.",
    img: "/photo1.jpg"
  },
  education: [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      school: "Thapar Institute of Engineering and Technology , Patiala",
      period: "Aug 2023 - Present",
      cgpa: "8.91/10",
      achievements: ["General Secretary SPICMACAY","Event Management","Leadership"]
    },
    {
      degree: "High School",
      field: "PCM",
      school: "Amity International School Sec-43 Gurugram, Haryana",
      period: "Apr 2013 - Apr 2023",
      cgpa: "94.6%",
      achievements: ["Cricket School Team Captian", "Model United Nations","Basketball Team"]
    }
  ],
  skills: {
    // --- MARQUEE (Standard Stack) ---
    technical: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "TensorFlow", icon: "devicon-tensorflow-original" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "Pandas", icon: "devicon-pandas-plain" },
      { name: "NumPy", icon: "devicon-numpy-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "React", icon: "devicon-react-original" },
    ],
    
    // --- ENGINEERING COMPETENCIES ---
    domainExpertise: [
      { 
        title: "Generative AI & LLM Engineering", 
        desc: "Designing production-grade RAG pipelines, autonomous multi-agent systems, and context-aware LLM applications with retrieval-augmented memory and local inference.",
        icon: "Brain",
        tags: ["LangChain", "Ollama", "ChromaDB", "HuggingFace", "RAG", "Prompt Engineering"] 
      },
      { 
        title: "Deep Learning & Computer Vision", 
        desc: "Building and training CNNs, RNNs, and transformer architectures for image classification, time-series forecasting, and sequential modelling tasks.",
        icon: "Cpu",
        tags: ["TensorFlow", "CNNs / RNNs", "Computer Vision", "Transformers", "Plotly"]
      },
      { 
        title: "Mathematical Foundations", 
        desc: "Applying Linear Algebra, Multivariate Calculus, and Probability Theory to reason about model behaviour, derive gradients, and tune optimisation strategies.",
        icon: "Sigma", 
        tags: ["Linear Algebra", "Calculus", "Probability & Statistics", "Optimisation"]
      },
      { 
        title: "Backend & System Design", 
        desc: "Engineering scalable REST APIs, relational database schemas, and containerised services for data-intensive, ML-backed production applications.",
        icon: "Server",
        tags: ["FastAPI", "PostgreSQL", "Docker", "Pytest", "System Design", "REST APIs"]
      }
    ],

    languages: [
      { name: "English", level: "Professional Working Proficiency" },
      { name: "Hindi",   level: "Native / Full Professional Proficiency" },
    ],

    coursework: [
      "Deep Learning & Neural Networks",
      "Linear Algebra & Probability Theory",
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ],
  },
  experience: [
    {
      role: "AI Engineering Intern",
      company: "BEL Central Research Laboratory",
      location: "Ghaziabad, India", 
      period: "June 2026 - July 2026", // Adjust the start date if necessary to match your exact timeline
      logo: "/bel-logo.png",
      responsibilities: [
        "Researched and developed TADN (Transformer-Based Assignment Decision Network), a ~1.2M parameter deep learning model for Multi-Object Radar Tracking (MOT) in defense and Air Traffic Management environments.",
        "Designed a sequence-to-sequence architecture using Self-Attention to build a global picture of incoming radar detections (ASTERIX CAT48) and Cross-Attention to dynamically map active track states (ASTERIX CAT62), successfully resolving overlapping aircraft geometries.",
        "Engineered a dynamic 'Null Sink' routing mechanism integrated with a deterministic Kalman Filter initializer to seamlessly handle false alarms, clutter, and spontaneous new track originations.",
        "Implemented a 3-Phase Progressive Curriculum training strategy ('Vanilla Sky', 'Clutter Storm', and 'Full Stress Test') that simulated severe latency dropouts (up to 3.5s) and extreme positional noise (σ=140m).",
        "Achieved a 92.12% data association accuracy on an out-of-distribution holdout dataset, completely outperforming classical Global Nearest Neighbor (GNN) baselines by reducing track fragmentation from 527 to 0 with 0% false alarm leakage.",
        "Built a production-ready data pipeline ('OpenSkyHistoricalTensorizer') in Python to ingest raw geodetic flight logs, convert them to local Cartesian coordinates, and synthetically tensorize radar distortion characteristics.",
        "Developed an enterprise-grade local document ingestion RAG (Retrieval-Augmented Generation) chatbot, optimizing traditional retrieval architectures by introducing Chain-of-Thought (CoT) prompting to maximize contextual reasoning efficiency."
      ],
      tags: ["PyTorch", "Transformers", "Deep Learning", "Radar Tracking (MOT)", "Kalman Filters", "LLMs / RAG", "Python"]
    },
    {

      role: "General Secretary",
      company: "SPICMACAY TIET",
      location: "Thapar Institute of Engineering & Technology, Patiala",
      period: "Sep 2023 - Present",
      logo: "/spicmacay-logo.png",
      responsibilities: [
        "Organized cultural events to promote Indian heritage and classical art forms on campus",
        "Led workshops and learning sessions focused on classical dance, music, and traditional art",
        "Managed public relations and promotional activities to increase society engagement and visibility"
      ],
      tags: ["Leadership", "Event Management", "Public Relations", "Team Coordination"]
    }


    
  ],
  projects: [
  // --- EXISTING PROJECTS ---

  {
    title: "SoulTune",
    description: "A full-stack AI audio analysis pipeline that extracts DSP features via Librosa, classifies genre with XGBoost, generates a poetic profile via Gemini LLM, and renders a living generative mandala — mathematically unique to every song.",
    tags: ["Python", "FastAPI", "React", "Vite", "Librosa", "XGBoost", "Gemini API", "p5.js", "Framer Motion"],
    img: "/SoulTune-logo.png",
    demoUrl: "https://soul-tune-omega.vercel.app/",
    repoUrl: "https://github.com/n1lays1ngh/SoulTune"
  },
  {
    title: "TADN — Transformer Radar Tracker",
    description: "A ~1.2M parameter Transformer architecture for multi-object radar tracking in complex airspace. Replaces classical GNN heuristics with global cross-attention over ASTERIX CAT48/62 data, achieving 92.12% association accuracy with zero track fragmentations against 527 for the classical baseline.",
    tags: ["Python", "PyTorch", "Transformers", "Radar Systems", "FastAPI", "React", "Docker", "Deep Learning"],
    img: "/tadn.png",
    demoUrl: "https://huggingface.co/spaces/Nilay31Singh/TADN-radar_association",
    repoUrl: "https://github.com/n1lays1ngh/TADN-for-Radar-Data-Association"
  },
  {
    title: "PomoFlow",
    description: "PomoFlow is a minimal, beautiful Pomodoro timer built for people who take deep work seriously. No accounts, no subscriptions, no bloat — just you, a countdown, and a streak worth protecting.",
    tags: ["React", "Vite", "JavaScript", "CSS", "Web Audio API", "Chart.js", "Productivity", "Web App","Frontend"],
    img: "/pomo-flow.png",
    demoUrl: "https://pomoflow-black.vercel.app/",
    repoUrl: "https://github.com/n1lays1ngh/PomoFlow"
  },

  {
    title: "Mental-Health-Predictor-App",
    description: "A Streamlit app that predicts an individual’s need for mental health treatment using CatBoost, with a focus on interpretability and user-friendly insights.",
    tags: ["Python", "Data Science", "Machine Learning", "Predictive Analytics", "CatBoost", "Streamlit"],
    img: "/Project1.png",
    demoUrl: "https://mental-health-predictor-app-n1lays1ngh.streamlit.app/", 
    repoUrl: "https://github.com/n1lays1ngh/Mental-Health-Predictor-App"
  },
  {
    title: "SkillEval.ai",
    description: "SkillEvalAI is an intelligent assistant that analyzes your GitHub, skills, and projects to score your job readiness, highlight skill gaps, and generate a learning roadmap.",
    tags: ["Python", "FastAPI", "Vercel", "LangChain", "GenAI", "Backend"],
    img: "/Project2.png",
    demoUrl: "https://skill-eval-ai-yozc.vercel.app/", 
    repoUrl: "https://github.com/n1lays1ngh/SkillEval.ai"
  },
  {
    title: "KHABRI-The all in one news agent",
    description: "Khabri is an AI-powered news analysis assistant that summarizes articles, identifies key insights, and delivers clear breakdowns using advanced NLP.",
    tags: ["NLP", "LLMs", "LangChain", "FastAPI", "GenAI", "Backend"],
    img: "/Project3.png",
    demoUrl: "https://khabri-rho.vercel.app/", 
    repoUrl: "https://github.com/n1lays1ngh/KHABRI"
  },

  // --- NEW PROJECTS ---

  {
    title: "RAG Chatbot with Local LLM",
    description: "A privacy-focused RAG chatbot running entirely locally. It allows users to chat with their documents using Ollama for LLM inference and a React+FastAPI stack.",
    tags: ["GenAI", "RAG", "LLMs", "FastAPI", "React", "Ollama", "Backend"],
    img: "/Project4.png", // Update with your image
    demoUrl: null, // Assuming no live demo for local LLM
    repoUrl: "https://github.com/n1lays1ngh/RAG-CHATBOT"
  },
  {
    title: "Delhi Air Quality Prediction",
    description: "A time-series forecasting model that analyzes historical pollution data to predict AQI levels in Delhi, helping visualize trends and environmental impact.",
    tags: ["Data Science", "Machine Learning", "Python", "Predictive Analytics"],
    img: "/Project5.png", // Update with your image
    demoUrl: null, 
    repoUrl: "https://github.com/n1lays1ngh/Delhi-Air-Quality-Prediction"
  },
  {
    title: "Image Recognition (CIFAR-10)",
    description: "A Deep Learning model using CNNs to classify images from the CIFAR-10 dataset with high accuracy, demonstrating computer vision fundamentals.",
    tags: ["Machine Learning", "Deep Learning", "CNN", "Computer Vision", "Python"],
    img: "/Project6.png", // Update with your image
    demoUrl: null, 
    repoUrl: "https://github.com/n1lays1ngh/Image-Recognition-on-CIFAR-10-Dataset"
  },
  {
    title: "Spam Classifier",
    description: "A text classification system utilizing NLP techniques to detect and filter spam messages efficiently, ensuring cleaner communication channels.",
    tags: ["Machine Learning", "NLP", "Classification", "Python"],
    img: "/Project7.png", // Update with your image
    demoUrl: "https://spamclassifier-nilaysingh.streamlit.app/", 
    repoUrl: "https://github.com/n1lays1ngh/SpamClassifier"
  },
  {
    title: "Bike Rental System",
    description: "A comprehensive DBMS project managing bike inventory, customer data, and rental transactions with complex SQL queries and structured database design.",
    tags: ["Backend", "DBMS", "SQL", "Database Management"],
    img: "/Project8.png", // Update with your image
    demoUrl: null, 
    repoUrl: "https://github.com/n1lays1ngh/Bike_Rental_System"
  },
  {
    title: "Superconductivity Regression",
    description: "A statistical regression analysis project predicting critical temperatures of superconductors based on chemical and physical properties.",
    tags: ["Data Science", "Machine Learning", "Regression", "Python"],
    img: "/Project9.png", // Update with your image
    demoUrl: null, 
    repoUrl: "https://github.com/n1lays1ngh/Superconductivity-Regression"
  }

],
  research: [
  {
    title: "Green AI Cascade: Spectral Heuristics, Learned Saliency, and the Hidden Cost of Face Detection in Long-Form Video Pre-Filtering",
    status: "In Progress",   // change to "Submitted" once you send to CVIP
    venue: null,             // e.g. "CVIP 2026" after submission
    year: "2026",
    authors: [
      "Nilay Singh",
      "Adwik Gupta",
      "Arun Singh Pundir",
      "Mandeep Kaur"
    ],
    abstract: "This work investigates the use of YouTube audience retention heatmaps as an annotation-free behavioural ground truth for comedic highlight detection in long-form video. We propose the Green AI Cascade, a CPU-bound tiered pre-filtering architecture that eliminates informationally redundant video segments prior to expensive LVLM inference. Through a three-track experimental evaluation on 32 stand-up comedy videos (11.9 hours), we demonstrate that simple spectral heuristics outperform learned saliency models due to label compression effects. We further identify Haar cascade face detection as a major recall suppressor and introduce an optimised configuration achieving up to 71.1% recall with significant GPU workload reduction, enabling efficient and sustainable video analytics.",
    tags: [
      "Green AI",
      "Video Analytics",
      "Highlight Detection",
      "Spectral Flux",
      "LVLM",
      "YouTube Heatmaps",
      "Efficient ML"
    ],
    contributions: [
      "Proposed the Green AI Cascade: a CPU-first tiered pre-filtering architecture for long-form video",
      "Introduced YouTube Most Replayed heatmaps as an annotation-free behavioural ground truth",
      "Conducted a 2,400-run grid search to analyse recall–pruning trade-offs using spectral heuristics",
      "Demonstrated failure of learned saliency models due to label compression under cross-video normalization",
      "Discovered that Haar cascade face detection suppresses recall by 18.6 percentage points",
      "Identified NMS over-merging as a novel failure mode in fixed-window temporal detection systems",
      "Optimised system achieving up to 71.1% recall with ~30–45% GPU workload reduction"
    ],
    paperUrl: "https://doi.org/10.5281/zenodo.19922714",   // add after arXiv / conference submission
    repoUrl: "https://github.com/n1lays1ngh/Autoshorts-GreenAI"    // add if/when you publish code
  }
  ],

  certificates: [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      date: "Mar 2025",
      id: "XB5YOCXNIEW2",
      url : "https://www.coursera.org/account/accomplishments/verify/XB5YOCXNIEW2",
      file: "public/Cert1.pdf"
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "Coursera",
      date: "May 2025",
      id: "VV2LR3RB3N89",
      url : "https://www.coursera.org/account/accomplishments/verify/VV2LR3RB3N89",
      file: "public/Cert2.pdf"
    },
    {
      title: "Unsupervised Learning, Recommenders,Reinforcement Learning",
      issuer: "Coursera",
      date: "Jul 2025",
      id: "49GXMAJL4EQ5",
      url : "https://www.coursera.org/account/accomplishments/verify/49GXMAJL4EQ5",
      file: "public/Cert3.pdf"
    },
    {
      title: "Specialisation Certificate - Machine Learning",
      issuer: "Coursera",
      date: "Jul 2025",
      id: "4AK87BDYEF9G",
      url : "https://www.coursera.org/account/accomplishments/specialization/4AK87BDYEF9G",
      file: "public/spes1.pdf"
    }
  ],

  contact: {
    email: "nilay31singh@gmail.com", // Replace with actual email
    phone: "+91 7982631261",       // Replace with actual phone
  },
  socials: {
    github: "https://github.com/n1lays1ngh",
    linkedin: "https://www.linkedin.com/in/nilay-singh-796808276/",
    twitter: "https://x.com/nilay31singh",
    instagram: "https://www.instagram.com/n.ilaysingh/",
    leetcode: "https://leetcode.com/u/Nilayy/"
  },
};