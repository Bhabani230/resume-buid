document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Generate resume HTML
    const resumeHTML = `
        <h3>${fullName}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <h4>Professional Summary</h4>
        <p>${summary}</p>
        <h4>Education</h4>
        <li>${education}</li>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
    `;

    // Display resume
    document.getElementById('resume-container').innerHTML = resumeHTML;
    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('resume-output').classList.remove('hidden');
});

function printResume() {
    window.print();
}
