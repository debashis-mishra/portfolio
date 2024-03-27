/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Debashis Mishra",
  title: "Hi! I'm Debashis",
  subTitle: emoji(
    "Experienced Full Stack Developer: 🚀 Specialized in JavaScript, React.js, Node.js, and various frameworks. 💻 Dedicated to building innovative web solutions that drive impact. 🌟"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xpRtUxpkhbIKVDjzIf8yQIacHcUXaafk/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/debashis-mishra",
  linkedin: "https://www.linkedin.com/in/debashismishra-007",
  gmail: "debashis.007.m@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Dynamic Full Stack Developer Enthusiastic About Exploring Diverse Technology Stacks.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Git / Firebase / Cloudinary"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kalinga Institute of Industrial Technology",
      logo: require("./assets/images/kiit.webp"),
      subHeader: "Bachelor of Technology",
      duration: "2020 - 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Branch: Information Technology",
        "CGPA: 8.95 / 10.0"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C++",
      progressPercentage: "95%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "90%"
    },
    {
      Stack: "Node.js",
      progressPercentage: "90%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "85%"
    },
    {
      Stack: "React.js", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "MongoDB", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java / Python", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work ex5perience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Digital CFO",
      companylogo: require("./assets/images/digitalcfo_tech_logo.jpeg"),
      date: "August 2023 - November 2023",
      desc: "Tech Stack: JavaScript, Node.js, MySQL, Java, Spring Boot, REST API",
      descBullets: [
        "Built OTP functionality to generate, verify, and configure OTP using RESTful APIs and MySQL to store details.",
        "Built URL shortener tool to convert long URLs to short URLs & vice - versa.",
        "Built a Pub-Sub model-based application integrated with the Strapi backend."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/netflix.png"),
      projectName: "Netflix Clone",
      projectDesc: `This is a Netflix clone where registered users can view movies, TV shows, etc; get videos according to specific genres of their wish and add them to their watchlist.`,
      footerLink: [
        {
          name: "Visit GitHub Repo",
          url: "https://github.com/debashis-mishra/netflix-clone"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dalle.png"),
      projectName: "Dall-E 2.0",
      projectDesc: "The user provides a text description and the website generates an image based on it. After successfully generating the image, the user can share it with the community or download it.",
      footerLink: [
        {
          name: "Visit GitHub Repo",
          url: "https://github.com/debashis-mishra/dalle_clone"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Problem Solving",
      subtitle: "It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions).",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        { name: "Certification", url: "https://www.hackerrank.com/certificates/deb9e2abf4a4" },
      ]
    },
    {
      title: "Secured rank 38 in Coder's Combat by GFG",
      subtitle:
        "Secured rank 38 and won an Amazon Voucher from GeeksforGeeks for being one of the top 50 rank holders in a coding contest held in our college",
      image: require("./assets/images/gfg.jpeg"),
      imageAlt: "GeeksforGeeks Logo",
      footerLink: [
      ]
    },
    {
      title: "Global Rank 271",
      subtitle:
        "Secured a rank of 271 among 3100+ in a global coding contest organised by CodeChef.",
      image: require("./assets/images/codechef.png"),
      imageAlt: "CodeChef Logo",
      footerLink: [
        {
          name: "View my Rank",
          url: "https://www.codechef.com/rankings/START30C?itemsPerPage=100&order=asc&page=1&search=debashis_007&sortBy=rank"
        }
      ]
    },
    {
      title: "Full Stack Web Developer",
      subtitle: "Completed the course 'The Complete 2021 Web Development Bootcamp' by Dr. Angela Yu on Udemy.",
      image: require("./assets/images/udemy.jpg"),
      imageAlt: "Udemy Logo",
      footerLink: [
        { name: "Certification", url: "https://www.udemy.com/certificate/UC-88950553-1f72-4b54-bc9f-88e247dbde8c/" },
      ]
    },
    {
      title: "React",
      subtitle: "It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        { name: "Certification", url: "https://www.hackerrank.com/certificates/2e0d4f610213" },
      ]
    },
    {
      title: "Node",
      subtitle: "It covers topics like Package and Modules Management, Callbacks, Event Loop, Event Emitter, Buffers, Streams and File Systems.",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        { name: "Certification", url: "https://www.hackerrank.com/certificates/51a3d8ec8596" },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Should you wish to discuss a project or extend a greeting, my inbox remains open and accessible for all your correspondence.",
  number: "+91-8249039172",
  email_address: "debashis.007.m@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "debashism007", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
