// This file contains JavaScript code for interactive features on the webpage.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const experiences = [
        {
            title: "Software Engineer",
            company: "Morgan Stanley",
            date: "Aug 2025 - Present",
            desc: "Led development of cloud-based applications, mentored junior developers, and implemented CI/CD pipelines."
        },
        {
            title: "Software Engineer",
            company: "Company B",
            date: "Mar 2020 - Dec 2021",
            desc: "Developed full-stack web applications using React and Node.js, improved application performance by 40%."
        }
    ];

    const timeline = document.getElementById('timeline');
    experiences.forEach(exp => {
        const bar = document.createElement('div');
        bar.className = 'timeline-bar';

        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        bar.appendChild(dot);

        const btn = document.createElement('button');
        btn.className = 'timeline-btn';

        btn.innerHTML = `
            <div class="timeline-title">
                <strong>${exp.title}</strong> <span class="company-separator">-</span> ${exp.company}
                <span class="timeline-date">${exp.date}</span>
            </div>
            <div class="timeline-desc">${exp.desc}</div>
        `;

        bar.appendChild(btn);
        timeline.appendChild(bar);
    });

    function updateTimelineSpacing() {
        const timeline = document.querySelector('.experience-timeline');
        const bars = timeline.querySelectorAll('.timeline-bar');
        const timelineHeight = timeline.clientHeight - 40; // Account for padding
        
        // Handle different numbers of experiences
        if (bars.length === 1) {
            // Center single experience
            bars[0].style.marginTop = `${timelineHeight/2 - bars[0].clientHeight/2}px`;
        } 
        else if (bars.length === 2) {
            // Place at top and bottom
            bars[0].style.marginTop = '0';
            bars[1].style.marginTop = `${timelineHeight - bars[1].clientHeight}px`;
        }
        else if (bars.length > 2) {
            // Distribute evenly
            const spacing = timelineHeight / (bars.length - 1);
            bars.forEach((bar, index) => {
                if (index === 0) {
                    bar.style.marginTop = '0';
                } else {
                    bar.style.marginTop = `${spacing - bar.clientHeight}px`;
                }
            });
        }
    }

    // Call after creating timeline
    updateTimelineSpacing();

    // Update spacing when window is resized
    window.addEventListener('resize', updateTimelineSpacing);
});