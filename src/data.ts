export const profile = {
  name: "Pranitha",
  title: "Software Engineer | Data Science & ML",
  location: "Hyderabad, India",
  phone: "+91 738-298-1967",
  email: "pranitha.reddy0497@gmail.com",
  linkedin: "https://www.linkedin.com/in/bojja-pranitha/",
  github: "https://github.com/pranithareddy555",
  summary:
    "I build data-driven products and scalable APIs. Recently worked on security analytics dashboards (React + TypeScript), Spring Boot REST APIs, Kafka pipelines, and performance optimization.",
  highlights: [
    
  ],
};

export const experience = [
  {
    company: "SPI Cloud Systems LLC (Remote, USA)",
    role: "Software Engineer",
    dates: "Jul 2025 – Dec 2025",
    bullets: [
      "Developed React (TypeScript) features for a security analytics dashboard: reusable components, form validation, role-based navigation.",
      "Built Spring Boot REST APIs for alert triage, case management, and search workflows; documented endpoints using Swagger/OpenAPI.",
      "Implemented Kafka producers/consumers for asynchronous alert ingestion with retries and idempotency across distributed services.",
      "Improved API responsiveness with server-side pagination, query indexing, and Redis caching (40% p95 improvement for search endpoints).",
      "Added 50+ unit tests (JUnit/Mockito) and enforced CI checks using GitHub Actions + Docker to reduce repeat defects.",
    ],
    tech: ["React", "TypeScript", "Spring Boot", "Kafka", "Redis", "Docker", "GitHub Actions"],
  },
  {
    company: "The University of Texas at Dallas",
    role: "Graduate Student Assistant (Computer Science Department)",
    dates: "Aug 2023 – May 2024",
    bullets: ["Mentored 150+ CS students in academic tasks, collaborating with professors."],
    tech: ["Java", "DSA", "Mentoring"],
  },
];

export const projects = [
  {
    name: "Ad Click Prediction",
    description:
      "Predicted whether a user will click an ad based on features; compared models and selected the best performer.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    links: [{ label: "GitHub", href: "https://github.com/pranithareddy555" }],
  },
  {
    name: "Smart Grid Attack Detection (ML)",
    description:
      "Detected abnormal operating modes that disrupt smart grid communications using multiple ML algorithms.",
    tech: ["Python", "ML", "Classification"],
    links: [],
  },
  {
  name: "Low-Data Breast Cancer Classification (TensorFlow)",
  description:
    "Trained reproducible TensorFlow classifiers on the Wisconsin Breast Cancer dataset using only 5% and 10% of training data, comparing baseline (class-layer) vs full TensorFlow models. Reached up to 93.15% accuracy with 10% data.",
  tech: ["Python", "TensorFlow/Keras", "NumPy", "BatchNorm", "Dropout", "Adam"],
  links: [
    // Replace with your repo link if you upload it
    { label: "Code", href: "https://github.com/pranithareddy555" },
  ],
},

{
  name: "Breast Cancer Classification with SVM Kernels",
  description:
  "Trained SVM (SVC) models on the Wisconsin Breast Cancer dataset using 5% and 10% training subsets. Compared polynomial vs RBF kernels, tuned hyperparameters with GridSearchCV, and evaluated on the full test set achieving up to 95.96% accuracy.", 
   tech: [
    "Python",
    "scikit-learn",
    "SVM (SVC)",
    "GridSearchCV",
    "MaxAbsScaler",
    "NumPy",
  ],
  links: [
    { label: "Code", href: "https://github.com/pranithareddy555" },
  ],
},


  {
  name: "K-Core Decomposition on Random Graphs (NetworkX)",
  description:
    "Studied how graph core number changes with edge probability (p) in random graphs using Python + NetworkX, and visualized k-core subgraphs and Core(p) trends across densities.",
  tech: ["Python", "NetworkX", "Matplotlib", "Graph Algorithms", "Random Graphs"],
  links: [
    { label: "Code", href: "https://github.com/pranithareddy555" }
  ],
},
{
  name: "Network Reliability Analysis via Exhaustive Enumeration",
  description:
    "Computed network reliability for a complete graph of 5 nodes based on triangle operability probability by enumerating all triangle states and validating connectivity (no isolated nodes).",
  tech: ["Python", "NetworkX", "itertools", "Matplotlib", "Probability"],
  links: [
    { label: "Code", href: "https://github.com/pranithareddy555" }
  ],
},

  {
    name: "Iris Species Detection",
    description: "Classified iris flowers among three species using sepal/petal measurements.",
    tech: ["Python", "Scikit-learn"],
    links: [],
  },
];

export const publications = [
 
  {
    title: "Detection of Smart Grid Attacks Using Machine Learning Techniques",
    venue: "Journal of Engineering Sciences",
    date: "Apr 2022",
    bullets: [
      "Evaluated Perceptron, SVM, and KNN to classify smart grid data as attacked or secure.",
      "Reported strong performance with KNN for malicious activity detection.",
    ],
  },
];

export const skills = {
  Programming: ["Java", "Python", "C/C++", "C#", "SQL"],
  Frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  Backend: ["Spring Boot", "REST APIs", "Swagger/OpenAPI", "Kafka"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
  Tools: ["Git", "Docker", "Power BI", "Tableau", "VS Code", "Figma"],
  Cloud: ["AWS", "Linux"],
};

export const education = [
  {
    school: "The University of Texas at Dallas",
    degree: "M.S. Computer Science",
    dates: "Aug 2022 – May 2024",
    note: "GPA: 3.75 / 4.0",
  },
  {
    school: "GITAM (Deemed to be University), Visakhapatnam",
    degree: "B.Tech, Computer Science and Engineering",
    dates: "Jun 2018 – Apr 2022",
    note: "GPA: 9.14 / 10",
  },
  {
  degree: "Intermediate Junior College",
  school: "Narayana Junior College, Hyderabad",
  dates: "2016 – 2018",
  note: "Score: 983/1000",
},
{
  degree: "10th (SSC)",
  school: "Bhashyam High School, Hyderabad",
  dates: "2015 – 2016",
  note: "CGPA: 9.8/10",
},


];

export const achievements = [
  "Won 1st Prize – IEEE Software Testing Hackathon (UT Dallas)",
  "CodeChef 3-star | HackerRank 5-star",
  "Merit-based scholarships (GITAM University)",
  "Outstanding Project Award – TCR Innovations",
];
