let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("#navbar");

let sections = document.querySelectorAll("#section"); // Corrected 'querySelectorALL' to 'querySelectorAll'
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active"); // Removed space before [href
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

(function() {
    emailjs.init('zd2r3At2-FgwT2KZW');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const message = form.message.value;

    console.log(name, email, phone, subject, message);

     
    if (!name || !email || !phone || !subject || !message) {
        alert('All fields are required.');
        return;
    }

    emailjs.send('service_wes3pdu', 'template_sc0bu1e', {
        from_name: name,
        from_email: email,
        from_phone: phone,
        from_subject: subject,
        from_message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, function(error) {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again later.');
    });
});