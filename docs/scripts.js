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
});
