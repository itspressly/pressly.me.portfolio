window.onload = function() {
    alert("This webpage is still under development!");
};



const projects = [
    {
        title: "Image Reader",
        description: "Developed a secure web application for reading and describing the images you output to it ",
        technologies: "HTML, CSS, JavaScript",
    },
    {
        title: "Weather application",
        description: "Developed an app in flutter that can predict the weather using a weather api",
        technologies: "Dart, Flutter, APIs",
    },

    /** 
    {
        title: "ShopEase - E-Commerce Platform",
        description: "Led the development of an e-commerce platform with real-time inventory tracking and secure payments.",
        technologies: "JavaScript, Node.js, MongoDB",
    },
    {
        title: "AI Art Generator",
        description: "Created an AI-based art generator using GANs for unique digital art creation.",
        technologies: "Python, TensorFlow, JavaScript",
    },
    {
        title: "HealthTrack - Fitness App",
        description: "Developed a fitness app tracking health metrics with real-time syncing and social sharing features.",
        technologies: "Flutter, Firebase, JavaScript",
    }*/
   
];


const projectList = document.getElementById("projectList");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <h2 class="project-title">${project.title}</h2>
        <p class="project-description">${project.description}</p>
        <p class="project-tech"><strong>Technologies:</strong> ${project.technologies}</p>
    `;

    projectList.appendChild(projectCard);
});



