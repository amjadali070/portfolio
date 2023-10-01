// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "amjadali070";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="logos:html-5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="logos:css-3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="logos:javascript" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="logos:bootstrap" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="logos:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="logos:stylefmt" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="logos:git-icon" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="logos:github-icon" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="logos:mongodb-icon" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 11,
    skill: <Icon icon="logos:express" width="90" height="60" className="display-4" />,
    name: "Express.js",
  },
  {
    id: 13,
    skill: <Icon icon="logos:nodejs-icon" className="display-4" />,
    name: "Node.js",
  },
  {
    id: 14,
    skill: <Icon icon="logos:nextjs-icon" className="display-4" />,
    name: "Next.js",
  },
  {
    id: 15,
    skill: <Icon icon="logos:java" className="display-4" />,
    name: "Java",
  },
  {
      id: 15,
      skill: <Icon icon="logos:kotlin" width="90" height="60" className="display-4 grayscale-icon" />,
      name: "Kotlin Programming",
  },
  
  {
    id: 16,
    skill: <Icon icon="logos:android-vertical" className="display-4" />,
    name: "Android Studio",
  },
  {
    id: 17,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 18,
    skill: <Icon icon="logos:tensorflow" className="display-4" />,
    name: "TensorFlow",
  },
  {
    id: 19,
    skill: <Icon icon="logos:pytorch-icon" className="display-4" />,
    name: "PyTorch",
  },
  {
    id:20,
    skill: <Icon icon="vscode-icons:file-type-json" className="display-4" />,
    name: "NLP (Natural Language Processing)",
  },
];



// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
