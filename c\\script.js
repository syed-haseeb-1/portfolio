<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Name - Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="hero">
        <div class="hero-content">
            <img src="https://avatars.githubusercontent.com/u/your-github-id?v=4" alt="Your Photo" class="profile-pic">
            <h1>Your Name</h1>
            <p class="tagline">Aspiring Web Developer | Creative Thinker | Lifelong Learner</p>
            <div class="social-links">
                <a href="mailto:your.email@example.com" title="Email">📧</a>
                <a href="https://github.com/your-username" title="GitHub" target="_blank"></a>
                <a href="https://linkedin.com/in/your-linkedin" title="LinkedIn" target="_blank">💼</a>
            </div>
        </div>
    </header>
    <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>
    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>
                Hi, I'm <strong>Your Name</strong>! I love building beautiful, functional websites and learning new technologies. I enjoy solving problems and collaborating with others. Let’s make the web awesome together!
            </p>
        </section>
        <section id="projects">
            <h2>Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>Project One</h3>
                    <p>A short description of your project goes here. You can mention tools, skills, or features.</p>
                    <a href="#" class="btn" target="_blank">View Project</a>
                </div>
                <div class="project-card">
                    <h3>Project Two</h3>
                    <p>Another project description. Highlight what makes this project special or what you learned.</p>
                    <a href="#" class="btn" target="_blank">View Project</a>
                </div>
                <div class="project-card">
                    <h3>Project Three</h3>
                    <p>Briefly describe another project or achievement. Link to it if possible!</p>
                    <a href="#" class="btn" target="_blank">View Project</a>
                </div>
            </div>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <form class="contact-form" id="contactForm" action="mailto:your.email@example.com" method="POST" enctype="text/plain">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </section>
    </main>
    <footer>
        &copy; 2025 Your Name. All rights reserved.
    </footer>
    <script src="script.js"></script>
</body>
</html>
