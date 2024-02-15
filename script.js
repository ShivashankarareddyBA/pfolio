// // Smooth scrolling for anchor links
// document.addEventListener("DOMContentLoaded", function() {
//     const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
//     for (const scrollLink of scrollLinks) {
//         scrollLink.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = scrollLink.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
//             if (targetElement) {
//                 const offsetTop = targetElement.offsetTop;
//                 window.scrollTo({
//                     top: offsetTop,
//                     behavior: "smooth"
//                 });
//             }
//         });
//     }

//     // Toggle gallery visibility
//     document.querySelectorAll('.view-gallery').forEach(button => {
//         button.addEventListener('click', function() {
//             const gallery = this.nextElementSibling;
//             gallery.classList.toggle('hidden');
//         });
//     });

//     // Handle form submission
//     document.getElementById('contact-form').addEventListener('submit', function(e) {
//         e.preventDefault();
//         // Send form data to server or perform other actions
//         // Example: You can use fetch API to send form data to a backend server
//         // Replace URL with your backend endpoint
//         fetch('https://example.com/contact', {
//             method: 'POST',
//             body: new FormData(this)
//         })
//         .then(response => {
//             if (response.ok) {
//                 alert('Message sent successfully!');
//                 this.reset();
//             } else {
//                 alert('Failed to send message. Please try again later.');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('An error occurred. Please try again later.');
//         });
//     });
// });
