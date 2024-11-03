// Click events for buttons
const about = document.getElementById("about");
const aboutBtn = document.getElementById("about-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");
// const services = document.getElementById("services");
// const servicesBtn = document.getElementById("services-btn");
const projects = document.getElementById("projects");
const projectsBtn = document.getElementById("projects-btn");
const contact = document.getElementById("contact");
const contactBtn = document.getElementById("contact-btn");

aboutBtn.addEventListener("click", (event) => {
  about.style.display = "block";
  skills.style.display = "none";
  // services.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  skillsBtn.classList.remove("active-btn");
  // servicesBtn.classList.remove("active-btn");
  projectsBtn.classList.remove("active-btn");
  contactBtn.classList.remove("active-btn");
  aboutBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  about.style.display = "none";
  // services.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  aboutBtn.classList.remove("active-btn");
  // servicesBtn.classList.remove("active-btn");
  projectsBtn.classList.remove("active-btn");
  contactBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
});

// servicesBtn.addEventListener("click", (event) => {
//   services.style.display = "flex";
//   about.style.display = "none";
//   skills.style.display = "none";
//   projects.style.display = "none";
//   contact.style.display = "none";
//   aboutBtn.classList.remove("active-btn");
//   skillsBtn.classList.remove("active-btn");
//   projectsBtn.classList.remove("active-btn");
//   contactBtn.classList.remove("active-btn");
//   servicesBtn.classList.add("active-btn");
// });

projectsBtn.addEventListener("click", (event) => {
  projects.style.display = "flex";
  about.style.display = "none";
  // services.style.display = "none";
  skills.style.display = "none";
  contact.style.display = "none";
  aboutBtn.classList.remove("active-btn");
  // servicesBtn.classList.remove("active-btn");
  skillsBtn.classList.remove("active-btn");
  contactBtn.classList.remove("active-btn");
  projectsBtn.classList.add("active-btn");
});

contactBtn.addEventListener("click", (event) => {
  contact.style.display = "flex";
  about.style.display = "none";
  // services.style.display = "none";
  projects.style.display = "none";
  skills.style.display = "none";
  aboutBtn.classList.remove("active-btn");
  // servicesBtn.classList.remove("active-btn");
  projectsBtn.classList.remove("active-btn");
  skillsBtn.classList.remove("active-btn");
  contactBtn.classList.add("active-btn");
});

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const sticky = document.getElementById("portfolio-skills");
  const btns = document.getElementsByClassName('btn-2');
  const btnBg = document.querySelector('.btn-bg');
  const topContent = document.querySelector('.top-content');

  const lightLogos = {
    theme: "assets/theme_light.png",
  };

  const darkLogos = {
    theme: "assets/theme_dark.png",
  };

  function setTheme(isDark) {
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;

    sticky.style.backgroundColor = isDark ? "#0B0B0B" : "#ffffff";
    Array.from(btns).forEach(btn => {
      btn.style.color = isDark ? "#ffffff" : "#0B0B0B"; // Change text color
    });

    btnBg.style.borderBottom = isDark ? "2px solid #ffffff" : "2px solid #0B0B0B"; // Adjust colors as needed
topContent.style.background = isDark 
  ? "radial-gradient(circle, rgba(15, 15, 15, 1) 0%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 1) 100%), rgb(15, 15, 15)"
  : "#fff";
  }

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);

    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);

    setTheme(isDark);
  };

  // Load saved theme from local storage or default to light theme
  loadTheme();
});


const jobTitles = [
  "Virtual Assistant",
  "Web Developer",
  "Software Tester"
];

let currentIndex = 0;
const jobTitleElement = document.getElementById('job-title');

function typeJobTitle() {
  jobTitleElement.style.width = '0'; // Reset width for typing effect
  const jobTitle = jobTitles[currentIndex];
  let charIndex = 0;

  const typingInterval = setInterval(() => {
      jobTitleElement.textContent += jobTitle.charAt(charIndex);
      charIndex++;
      if (charIndex === jobTitle.length) {
          clearInterval(typingInterval);
          setTimeout(() => eraseJobTitle(jobTitle), 1000); // Wait before erasing
      }
  }, 100);
  jobTitleElement.style.color = "#00ffee";
}

function eraseJobTitle(jobTitle) {
  const erasingInterval = setInterval(() => {
      jobTitleElement.textContent = jobTitleElement.textContent.slice(0, -1);
      if (jobTitleElement.textContent.length === 0) {
          clearInterval(erasingInterval);
          currentIndex = (currentIndex + 1) % jobTitles.length; // Move to the next job title
          setTimeout(typeJobTitle, 500); // Wait before typing the next title
      }
  }, 100);
}

// Start typing the first job title
typeJobTitle();
