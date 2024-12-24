// JavaScript for additional functionality, if needed
// For example, smooth scrolling on navigation click
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function openAndDownload() {
    // Correct path to the resume file
    const resumeLink = 'Resume Fedex.pdf'; // Update this with your actual file path
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = 'Resume.pdf'; // The name the file will have when downloaded
    document.body.appendChild(link);
    link.click();
    
    // Redirect to the home page after the download starts
    setTimeout(function() {
        window.location.href = 'index.html'; // Replace with your home page URL
    }, 1000); // 1 second delay before redirect
}

