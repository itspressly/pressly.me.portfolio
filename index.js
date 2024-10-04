/*window.onload = function() {
    alert("This webpage is still under development!");
};
*/

const projects = [
    {
        title: "Image Reader",
        description: "Developed a secure web application for reading and describing the images you output to it.",
        technologies: "HTML, CSS, JavaScript",
        link: "https://yourlink.com/image-reader" // Add a link if you have one
    },
    {
        title: "Weather application",
        description: "Developed an app in Flutter that can predict the weather using a weather API.",
        technologies: "Dart, Flutter, APIs",
        link: "https://yourlink.com/weather-app" // Add a link if you have one
    },

    {
        title: "Iron Man Jarvis",
        description: "Developed an AI assistant similar to Iron Man's Jarvis. The assistant performs tasks, talks back automatically, and supports both PC and mobile platforms.",
        technologies: " python, APIs, Voice Recognition, VS code terminial",
        link: "https://yourlink.com/weather-app" // Add a link if you have one
    },
    
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <h2 class="project-title">${project.title}</h2>
        <p class="project-description">${project.description}</p>
        <p class="project-tech"><strong>Technologies:</strong> ${project.technologies}</p>
        <button onclick="window.open('${project.link}', '_blank')">Github code</button>
    `;

    projectList.appendChild(projectCard);
});


