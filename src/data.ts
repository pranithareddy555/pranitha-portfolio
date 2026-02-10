export const profile = {
  name: "Pranitha",
  title: "Software Engineer | Data Science & ML",
  location: "Hyderabad, India",
  email: "pranitha.reddy0497@gmail.com",
  linkedin: "https://www.linkedin.com/in/bojja-pranitha/",
  github: "https://github.com/pranithareddy555",
  summary:
    "Machine learning engineer who also enjoys building the software around models, including data prep, training, evaluation, and lightweight deployment. Built projects in recommendations, ad click prediction, healthcare classification, and smart grid security using Python, scikit-learn, and TensorFlow. Interested in developing practical, scalable ML systems with strong engineering fundamentals.",
  highlights: [
    
  ],
};

export const experience = [
  {
    company: "The University of Texas at Dallas",
    role: "Graduate Student Assistant (Computer Science Department)",
    dates: "Aug 2023 – May 2025",
    bullets: ["Mentored 150+ CS students in academic tasks, collaborating with professors."],
    tech: ["Java", "DSA", "Mentoring"],
  },
];

export const projects = [
    {
  name: "Recommendation Engine",
  description:
    "Built a collaborative filtering recommender using user item interactions and implicit feedback from clicks, carts, and purchases; improved precision at 10 by 18 percent versus a popularity baseline.",
  tech: ["Python", "Pandas", "scikit-learn", "Collaborative Filtering"],
  links: [{ label: "GitHub", href: "https://github.com/pranithareddy555" }],
},
 {
  name: "Low-Data Breast Cancer Classification (TensorFlow)",
  description:
    "Trained reproducible TensorFlow classifiers on the Wisconsin Breast Cancer dataset using only 5% and 10% of training data, comparing baseline (class-layer) vs full TensorFlow models. Reached up to 93.15% accuracy with 10% data.",
  tech: ["Python", "TensorFlow/Keras", "NumPy", "BatchNorm", "Dropout", "Adam"],
  links: [
    // Replace with your repo link if you upload it
    { label: "GitHub", href: "https://github.com/pranithareddy555" },
  ],
},
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
   links: [
    // Replace with your repo link if you upload it
    { label: "GitHub", href: "https://github.com/pranithareddy555" },
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
    { label: "GitHub", href: "https://github.com/pranithareddy555" },
  ],
},


  {
  name: "K-Core Decomposition on Random Graphs (NetworkX)",
  description:
    "Studied how graph core number changes with edge probability (p) in random graphs using Python + NetworkX, and visualized k-core subgraphs and Core(p) trends across densities.",
  tech: ["Python", "NetworkX", "Matplotlib", "Graph Algorithms", "Random Graphs"],
  links: [
    { label: "GitHub", href: "https://github.com/pranithareddy555" }
  ],
},
{
  name: "Network Reliability Analysis via Exhaustive Enumeration",
  description:
    "Computed network reliability for a complete graph of 5 nodes based on triangle operability probability by enumerating all triangle states and validating connectivity (no isolated nodes).",
  tech: ["Python", "NetworkX", "itertools", "Matplotlib", "Probability"],
  links: [
    { label: "GitHub", href: "https://github.com/pranithareddy555" }
  ],
},

  
];

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

export const publications = [
 
  {
    title: "Detection of Smart Grid Attacks Using Machine Learning Techniques",
    venue: "Journal of Engineering Sciences",
    
    bullets: [
      "Evaluated Perceptron, SVM, and KNN to classify smart grid data as attacked or secure.",
      "Reported strong performance with KNN for malicious activity detection.",
    ],
  },
];

export const skills = {
  Languages: ["Python", "SQL", "Java", "C/C++"],
  MachineLearning: [
    "scikit-learn",
    "TensorFlow",
    "Pandas",
    "NumPy",
    "Feature Engineering",
    "Hyperparameter Tuning",
    "Model Evaluation",
  ],
  Backend: ["Flask", "REST APIs", "JWT", "API Versioning", "Request Validation", "Error Handling"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
  DevOps: ["Docker", "Git", "GitHub Actions", "CI/CD", "Linux"],
  TestingAndViz: ["pytest", "Matplotlib", "NetworkX"],
};




export const achievements = [
  "Won 1st Prize – IEEE Software Testing Hackathon (UT Dallas)",
  "CodeChef 3-star | HackerRank 5-star",
  "Merit-based scholarships (GITAM University)",
  "Outstanding Project Award – TCR Innovations",
];
