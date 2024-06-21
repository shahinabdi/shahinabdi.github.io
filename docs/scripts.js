// scripts.js

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Default to showing the first section
document.addEventListener('DOMContentLoaded', () => {
    showSection('experience');

    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        const radius = 31.5; // 37.5 - 6 (stroke width / 2)
        const circumference = 2 * Math.PI * radius;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '75');
        svg.setAttribute('height', '75');
        svg.setAttribute('viewBox', '0 0 75 75');

        const circleBg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circleBg.setAttribute('cx', '37.5');
        circleBg.setAttribute('cy', '37.5');
        circleBg.setAttribute('r', radius);
        circleBg.setAttribute('fill', 'none');
        circleBg.setAttribute('stroke', '#333');
        circleBg.setAttribute('stroke-width', '6');

        const circleFg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circleFg.setAttribute('cx', '37.5');
        circleFg.setAttribute('cy', '37.5');
        circleFg.setAttribute('r', radius);
        circleFg.setAttribute('fill', 'none');
        circleFg.setAttribute('stroke', '#00ffff'); // Cyan color
        circleFg.setAttribute('stroke-width', '6');
        circleFg.setAttribute('stroke-dasharray', `${circumference} ${circumference}`);
        circleFg.setAttribute('stroke-dashoffset', circumference);
        circleFg.style.transition = 'stroke-dashoffset 1s ease-in-out';

        const text = document.createElement('div');
        text.classList.add('percentage');
        text.textContent = `${percent}%`;

        svg.appendChild(circleBg);
        svg.appendChild(circleFg);
        circle.appendChild(svg);
        circle.appendChild(text);

        setTimeout(() => {
            const offset = circumference - (percent / 100) * circumference;
            circleFg.style.strokeDashoffset = offset;
        }, 100);
    });
});
