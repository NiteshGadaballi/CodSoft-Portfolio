var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(var tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Wait for the HTML page to fully load before running the rest of the scripts
document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. EmailJS Contact Form Setup ---
    // Initialize EmailJS with your public key
    emailjs.init("ZqQAdmxdp_bEDiHRq"); 
    
    const serviceID = "service_s8at5yg";
    const contactTemplateID = "template_f0mm2xn"; 
    
    const contactForm = document.getElementById("contact-form");
    
    // The "if (contactForm)" prevents the "null" error by making sure the form exists
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const form = this;
            
            emailjs.sendForm(serviceID, contactTemplateID, form)
            .then(() => {
                console.log("Message sent ✅");
                alert("Message sent successfully!");
                form.reset(); // Clear the form after submission
            })
            .catch((error) => {
                console.error("Failed to send message ❌", error);
                alert("Something went wrong. Please try again.");
            });
        });
    }

    // --- 2. Hamburger Menu Setup ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    // The "if (hamburger)" prevents the "null" error if you don't have a hamburger icon coded in HTML yet
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }
});