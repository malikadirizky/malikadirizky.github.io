const text = "Hello, I'm Malik Adi Riski";

const typingTextElement = document.getElementById("typing-text");

let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index); 
        index++; 
        setTimeout(typeWriter, 100);
}
    }       

typeWriter();

function showSection(sectionId) {
    // Sembunyikan semua section dengan class "content"
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Tampilkan section yang sesuai dengan ID
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}
