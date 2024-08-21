
    function toggleHobbies() {
        const hobbiesSection = document.getElementById('hobbies');
        hobbiesSection.style.display = hobbiesSection.style.display === 'none' ? 'block' : 'none';
    }


    //experience of popup
          // script.js
function openModal(title) {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    // Set modal content based on the job title
    if (title === 'Java Full Stack Apprenticeship') {
        modalTitle.textContent = title;
        modalDescription.textContent = 'Java Full Stack cource deep learning of java core to advance. More Projects, and framworks';
    } else if (title === 'Web Development Using PHP') {
        modalTitle.textContent = title;
        modalDescription.textContent = 'PHP web development role. clear concept frontend html css js basic react angular and php';
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}


// Dynamic PDF Generation
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Resume...!", 100, 100);
    doc.save("AssignmentPYTHRUSTAnika.pdf");
}

