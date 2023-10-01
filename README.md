# A React Portfolio

### Getting Started

-> Make sure [Node](https://nodejs.org/en/) is installed
-> Open your project and install the dependencies

   ```bash
   npm install
   ```

-> Navigate to the src directory and open data.js
-> Add your GitHub username ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L17) lines 17-21)

   ```javascript
   /* START HERE
   ************************************************************** 
     Add your GitHub username (string - "YourUsername") below.
   */
   export const githubUsername = "Your GitHub username here";
   ```
-> Start the development server to view the results

   ```bash
   npm start
   ```

### Updating the Projects section

![Projects](/README_images/projects.png)

1. Follow the instructions to update the filteredProjects array ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L91) lines 91-95)

   ```javascript
   /* Projects
   ************************************************************** 
     List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
   */
   export const filteredProjects = ["example-1", "example-2", "example-3"];
   ```

2. Import the projects images you want to use ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L7) lines 7-8) or the default image will be applied

   ```javascript
   // Projects Images (add your images to the images directory and import below)
   import Logo from "./images/logo.svg";
   ```

3. Follow the instructions to update the projectCardImages array ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L97) lines 97-103)

   ```javascript
   // Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
   export const projectCardImages = [
     {
       name: "example-1",
       image: Logo,
     },
   ];
   ```

### Updating the Contact section

![Projects](/README_images/contact.png)

1. The contact form uses [Formspree](https://formspree.io/), create an account and add your endpoint URL ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L105) lines 105-110)

   ```javascript
   /* Contact Info
   ************************************************************** 
     Add your formspree endpoint below.
     https://formspree.io/
   */
   export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
   ```

### Deploy

A helpful guide for Create React App deployments with GitHub Pages can be found [here](https://create-react-app.dev/docs/deployment#github-pages).

1. Update the homepage value ([package.json](https://github.com/mshuber1981/github-react-portfolio-template/blob/0133fcc02ab048fefcf73825d02385ffe27c3721/package.json#L3) line 3)

   ```json
   "homepage": "https://YourUsername.github.io/your-app/",
   ```

2. Run the deploy command

   ```bash
   npm run deploy
   ```

