import pythonSkill from "../assets/images/pythonSkill.png";
import reactSkill from "../assets/images/reactSkill.png";
import reactNativeSkill from "../assets/images/reactNativeSkill.jpg";
import djangoSkill from "../assets/images/djangoSkill.jpg";
import drfSkill from "../assets/images/drfSkill.png";
import htmlCssSkill from "../assets/images/htmlCssSkill.jpg"
import offworldMedia from "../assets/images/offworldMedia.png";
import bursaryApp from "../assets/images/bursaryApp.png";
import budgetAllocation from "../assets/images/budgetAllocation.png";
import notesApp from "../assets/images/notesApp.png";


// Resume Data
export const resumes = [
    {
      id: 1,
      name: "Stephen Bonfeb",
      phone: "+254794544826",
      email: "bonfebdevs@gmail.com",
      profession: "Software Engineer",
      career_objective: "To leverage my skills in software development...",
      education: [
        {
          id: 1,
          achievement: "Bachelor of Science in Information Technology",
          year: "2023",
          institute: "Techniacl University of Mombasa",
          description: [
            "Upper Second Class Honors",
            "Specialized in Software Development and Data Analysis.",
          ]
        },
        {
          id: 2,
          achievement: "Kenya Certificate of Secondary Education",
          year: "2018",
          institute: "St. Teresa's Secondary School",
          description: [ 
            "Mean Grade of B-(Minus)",
            "Kenya Science Congress County Level"
           ]
        },
        {
          id: 3,
          achievement: "Kenya Certificate of Primary Education",
          year: "2014",
          institute: "Gandini - Chonyi Primary",
          description: [ 
            "Total Marks - 371",
           ]
        }
      ],
      experiences: [
        {
          id: 1,
          title: "Field Test Specialist",
          company: "Transsion",
          duration: "Jan 2025 - Present",
          responsibilities: [
            "Third Party Application testing.",
            "Collecting market intelligence on transsion producs.",
            "Researching on competitor's products."
          ]
        },
        {
          id: 2,
          title: "Freelancing",
          company: null,
          duration: 2024,
          responsibilities: [
            "Developed web applications using React and Django",
            "Learning React and sklls sharpening."
          ]
        },
        {
          id: 3,
          title: "ICT Intern",
          company: "Kenya Coast National Polytechnic",
          duration: "Jan - March 2023",
          responsibilities: [
            "Developed web applications using React and Node.js.",
            "Optimized performance and improved UX for company software."
          ]
        }
      ],
      certifications: [
        {
          id: 1,
          name: "Certified Python Programmer - IBM Corsera "
        },
        {
          id: 2,
          name: "Certified Django Developer - IBM Coursera"
        },
        {
          id: 3,
          name: "Certified React JS Developer - IBM Coursera"
        }
      ],
      referees: [
        {
          id: 1,
          name: "Peter Mwangi",
          position: "Transsion RD Manager Testing Department",
          phone: "+25476543210",
          email: "peter.mwangi@tecno-mobile.co.ke"
        },
        {
          id: 2,
          name: "Dr Fullgence Mwakondo",
          position: "COD ICI TUM",
          phone: "+9876543210",
          email: "jane.smith@techcorp.com"
        }
      ]
    }
  ];

  export const skills = [
        {
          id: 1,
          skill_name: "Python",
          image: pythonSkill,
          description :[
            "Experienced in writing efficient and scalable Python code for various applications.",
            "Proficient in using Python for backend development & data analysis.",
            "Strong understanding of object-oriented programming and scripting in Python."
          ]
        },
        {
          id: 2,
          skill_name: "React JS",
          image: reactSkill,
          description: [
            "Skilled in building interactive and dynamic user interfaces using React.js.",
            "Proficient in React Hooks, state management, and component-based architecture.",
            "Experienced in integrating APIs and optimizing React applications for performance."
          ]
        },
        {
          id: 3,
          skill_name: "React Native",
          image: reactNativeSkill,
          description: [
            "Capable of developing cross-platform mobile applications using React Native.",
            "Proficient in handling navigation, state management, and API integration.",
            "Experienced in optimizing React Native apps for better performance and UI/UX."
          ]
        },
        {
          id: 4,
          skill_name: "Django",
          image: djangoSkill,
          description: [
            "Experienced in developing scalable web applications using Django framework.",
            "Proficient in Django ORM, authentication, and middleware integration.",
            "Capable of building secure and efficient backend systems with Django."
          ]
        },
        {
          id: 5,
          skill_name: "Django Rest Framework",
          image: drfSkill,
          description: [
            "Skilled in building and consuming RESTful APIs using Django Rest Framework (DRF).",
            "Proficient in authentication, serialization, and API versioning in DRF.",
            "Experienced in optimizing API performance and integrating with frontend applications."
          ]
        },
        {
          id: 6,
          skill_name: "HTML5 & CSS",
          image: htmlCssSkill,
          description: [
            "Proficient in creating responsive and visually appealing web pages using HTML5 and CSS.",
            "Experienced in CSS frameworks like Bootstrap and pre-processors like SASS.",
            "Skilled in modern web design principles, animations, and cross-browser compatibility."
          ]
        } 
  ];

  export const projects = [
    {
      id: 1,
      title: "OffWorld Media Africa",
      image: offworldMedia,
      description: "A fully functional e-commerce website built with React and Django.",
      technologies: ["React", "Django", "HTML5", "React Bootstrap", "MUI"],
      link: "https://github.com/Bonfeb/offworldmedia-backend.git",
      liveUrl: "https://offworld-media-frontend.onrender.com/"
    },
    {
      id: 2,
      title: "Bursary Application System",
      image: bursaryApp,
      description: "A fully functional e-commerce website built with React and Django.",
      technologies: ["Django", "HTML5", "CSS", "JavaScript"],
      link: "https://github.com/Bonfeb/Bursary-Application-System.git",
      liveUrl: "https://bursary-application-system.onrender.com/"
    },
    {
      id: 3,
      title: "Budget Allocation Application",
      image: budgetAllocation,
      description: "A fully functional e-commerce website built with React and Django.",
      technologies: ["React"],
      link: "https://github.com/Bonfeb/Budget-Allocation-App.git",
      liveUrl: "https://budget-allocation-app.onrender.com/"
    },
    {
      id: 4,
      title: "Notes Application",
      image: notesApp,
      description: "A fully functional e-commerce website built with React and Django.",
      technologies: ["React"],
      link: "https://github.com/Bonfeb/Notes-App.git",
      liveUrl: "https://notes-app-bonfeb.onrender.com/"
    }

  ];
  